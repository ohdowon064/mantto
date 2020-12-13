# from rest_framework_jwt.settings import api_settings
# from datetime import datetime, timedelta

# jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

# class AccountActivationTokenGenerator():
#     def make_token(self, serialized_user):
#         payload = {
#             'username' : serialized_user.validated_data['account'],
#             'exp': datetime.utcnow() + timedelta(minutes=2)
#         }
#         jwt_token = jwt_encode_handler(payload)
#         return jwt_token


# account_activation_token = AccountActivationTokenGenerator()

import six
from django.contrib.auth.tokens import PasswordResetTokenGenerator

class AccountActivationTokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return (six.text_type(user.pk) + six.text_type(timestamp) + six.text_type(user.is_active))

account_activation_token = AccountActivationTokenGenerator()