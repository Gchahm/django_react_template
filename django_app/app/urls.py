
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView

open_api_urls = [
    path('schema.yml', SpectacularAPIView.as_view(), name='schema'),
    # Optional UI:
    path('swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]

api_urls = [
    path('docs/', include(open_api_urls)),
    path('auth/', include('dj_rest_auth.urls')),
]
urlpatterns = [
    path('api/', include(api_urls)),
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
