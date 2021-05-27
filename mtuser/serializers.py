from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import update_last_login
from django.contrib.auth import authenticate, get_user_model
from mtuser.models import User
from copy import deepcopy

user = get_user_model()

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

class UserSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('account', 'password', 'name', 'email', 'gender')

    def create(self, validated_data):
        user = User.objects.create(
            account=validated_data['account'],
            name=validated_data['name'],
            email=validated_data['email'],
            gender=validated_data['gender']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class UserSignInSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=300, read_only=True)
    account = serializers.CharField(max_length=100)
    password = serializers.CharField(max_length=100, write_only=True)

    def validate(self, data):
        account = data.get('account', None)
        password = data.get('password', None)
        user = authenticate(account=account, password=password)

        if user is None:
            return {'account' : None}

        try:
            payload = jwt_payload_handler(user)
            jwt_token = jwt_encode_handler(payload)
            update_last_login(None, user)
        
        except User.DoesNotExist:
            raise serializers.ValidationError('User with given Account ID and Password does not exists.')

        return {
            'account' : user.account,
            'name' : user.name,
            'token' : jwt_token
        }