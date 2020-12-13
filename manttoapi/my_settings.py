from pathlib import Path

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '^+doe_fzd7fm!blxat48tp^e(-pnqc0tgvvnad7-76%*#(j92d'


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'mantto_dev', # db name
        'USER': 'manttoadmin', # db 계정
        'PASSWORD': '!aksEh3983', # db 비밀번호
        'HOST': 'mantto-dbinstance.cmaji1a4g0ys.ap-northeast-2.rds.amazonaws.com',
        'PORT': '3306',
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'"
        },
    }
}