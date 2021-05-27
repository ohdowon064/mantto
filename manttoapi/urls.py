"""manttoapi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from rest_framework.permissions import AllowAny
from rest_framework import routers
from drf_yasg import openapi
from drf_yasg.views import get_schema_view

# API Schema Document Settings
schema_url_patterns = [
    path('api/', include('mtuser.urls')),
]

schema_view = get_schema_view(
    openapi.Info(
        title='Mantto Server Open API',
        default_version='loganapi',
        description="""만또 백엔드 담당 오도원입니다.
                    아래 API 관련해서 궁금하신 사항은 언제든지 물어보시기 바랍니다.""",
        terms_of_service="https://www.notion.so/Mantto-c2aa4bbcdecd41d6a35a24343ed03917",
        contact=openapi.Contact(email='**********@gmail.com'),
        license=openapi.License(name="Logan's API-Factory"),
    ),
    validators=['flex'],
    public=True,
    permission_classes=(AllowAny, ),
    patterns=schema_url_patterns,
)

# API URL
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('mtuser.urls')),

    # Auto DRF API Documents
    url(r"^api/swagger(?P<format>\.json|\.yaml)/$", schema_view.with_ui(cache_timeout=0), name="schema-json",),
    path('api/swagger', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('api/redoc', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc-ui'),
]
