from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from mtuser.serializers import UserSignUpSerializer, UserSignInSerializer
from mtuser.models import User
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

# email
from mtuser.email import email_authentication
from mtuser.token import account_activation_token
from django.utils.encoding import force_text
from django.views import View
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.http import JsonResponse 

@swagger_auto_schema(
    method='post',
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            'account' : openapi.Schema(
                type=openapi.TYPE_STRING,
                description='아이디'
            ),
            'password' : openapi.Schema(
                type=openapi.TYPE_STRING,
                description='비밀번호'
            ),
            'name' : openapi.Schema(
                type=openapi.TYPE_STRING,
                description='이름'
            ),
            'email' : openapi.Schema(
                type=openapi.TYPE_STRING,
                description='유저의 부산대학교 웹메일'
            ),
            'gender' : openapi.Schema(
                type=openapi.TYPE_STRING,
                description='성별. 여자일 경우 F 또는 남자일 경우 M을 입력한다.  '
            ),
        },
        required=['account', 'password', 'name', 'email', 'gender']
    )
)

@api_view(['POST'])
@permission_classes([AllowAny])
def sign_up(request):
    """
        회원가입 API

        ---
        # 내용
            - 만또에서 회원가입하는 API이다. 
            - 아이디(account), 비밀번호(password), 이름(name), 이메일(email), 성별(gender)는 필수입력.
            - 슈퍼계정은 manttoadmin만 존재한다.
            - 슈퍼계정은 데이터베이스에 직접 입력해서 생성해야한다.
    """
    if request.method == 'POST':
        serializer = UserSignUpSerializer(data=request.data)

        if not serializer.is_valid(raise_exception=True):
            return Response(
                {
                    "message" : "Request Body Error."
                }, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if not User.objects.filter(account=serializer.validated_data['account']).exists():
            user = serializer.save()
            email_authentication.message(request, user)
            return Response(
                {
                    "message" : "Sign up Success. But needs Email Authentication."
                },
                status=status.HTTP_201_CREATED
            )
        
        return Response(
            {
                "message" : "Duplicate Account ID : Sign Up Fail."
            },
            status=status.HTTP_409_CONFLICT
        )

@swagger_auto_schema(
    method='post',
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            'account' : openapi.Schema(
                type=openapi.TYPE_STRING,
                description='계정 아이디'
            ),
            'password' : openapi.Schema(
                type=openapi.TYPE_STRING,
                description='계정 비밀번호'
            ),
        },
        required=['account', 'password']
    )
)
@api_view(['POST'])
@permission_classes([AllowAny])
def sign_in(request):
    """
        로그인 API

        ---
        # 내용
            - 로그인할 때 사용하는 API이다.
            - 로그인을 하면 로그인 성공메세지와 아이디(account)를 암호화해서 만들어진 토큰을 발급한다.
            - 인증 API(회원가입, 로그인)를 제외한 모든 API는 토큰을 필요로 한다.
    """
    if request.method == 'POST':
        print("그냥 여기를 못들어오는데??")
        print('data', request.data)
        serializer = UserSignInSerializer(data=request.data)

        if not serializer.is_valid(raise_exception=True):
            return Response(
                {
                    "message" : "Request Body Error."
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        print(serializer.data)
        if serializer.validated_data['account'] is None:
            return Response(
                {
                    "message" : "[Account ID] or [Password] is not valid."
                },
                status=status.HTTP_404_NOT_FOUND
            )

        return Response(
            {
                "message" : "Sign In Success",
                "token" : serializer.data['token']
            },
            status=status.HTTP_200_OK
        )

class AccountActivate(View):
    def get(self, request, uidb64, token):
        try:
            uid = force_text(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)

            if account_activation_token.check_token(user, token):
                user.is_activate = True
                user.save()
                print(user.is_activate)
                
                return JsonResponse({'message': f"[ID : {user.account}] 회원가입 이메일 인증이 완료되었습니다."}, status=200)
        
        except User.DoesNotExist:
            return Response(
                {
                    "message" : "User Does not Exist."
                },
                status=status.HTTP_404_NOT_FOUND
            )