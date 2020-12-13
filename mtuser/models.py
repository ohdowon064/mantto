from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# 계정 관리 매니저
class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, account, name, email, gender, password, **extra_fields):
        values = [account, name, email, gender]
        field_value_map = dict(zip(self.model.REQUIRED_FIELDS, values))
        for field_name, value in field_value_map.items():
            if not value:
                raise ValueError(f'The {field_name} value must be set.')

        user = self.model(
            account=account,
            name=name,
            email=email,
            gender=gender
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, account, name, email, gender, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(account, name, email, gender, password, **extra_fields)

    def create_superuser(self, account, name, email, gender, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True')

        return self._create_user(account, name, email, gender, password, **extra_fields)




class User(AbstractBaseUser, PermissionsMixin):
    user_no = models.AutoField(primary_key=True)
    account = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=200)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    phone = models.CharField(max_length=30, blank=True, null=True)
    report_help = models.BooleanField(default=True)
    alarm_active = models.BooleanField(default=True)
    mantto_rank = models.IntegerField(default=5)
    mantti_rank = models.IntegerField(default=5)
    major = models.CharField(max_length=30)
    matching_count = models.IntegerField(default=0)

    objects = UserManager()
    USERNAME_FIELD = 'account'
    REQUIRED_FIELDS = ['name', 'email', 'gender']

    class Meta:
        db_table = 'user'

