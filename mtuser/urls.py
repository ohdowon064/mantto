from django.urls import path
from mtuser import views

urlpatterns = [
    path('sign-up', views.sign_up), # 회원가입
    path('sign-in', views.sign_in), # 로그인
    path('activate/<str:uidb64>/<str:token>', views.AccountActivate.as_view()), # 이메일 인증
]