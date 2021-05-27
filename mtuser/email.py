from django.core.mail import EmailMessage
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.contrib.sites.shortcuts import get_current_site
from mtuser.token import account_activation_token
from mtuser.models import User
from rest_framework import status

class EmailAuthentication():
    def _message(self, domain, uidb64, token):
        return f"""아래 링크를 클릭하면 회원가입 인증이 완료됩니다.
        
        회원가입 링크 : http://{domain}/api/activate/{uidb64}/{token}
        
        감사합니다."""

    def message(self, request, user):
        current_site = get_current_site(request)
        print('현재 URL : ', current_site)
        domain = current_site.domain
        print('domain : ', domain)
        uidb64 = urlsafe_base64_encode(force_bytes(user.pk))
        token = account_activation_token.make_token(user)
        message_data = self._message(domain, uidb64, token)
        
        mail_title = "만또 회원가입 이메일 인증을 완료해주세요."
        mail_to = user.email
        email = EmailMessage(mail_title, message_data, to=[mail_to])
        email.send()

email_authentication = EmailAuthentication()