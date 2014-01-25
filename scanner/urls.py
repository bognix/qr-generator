from django.conf.urls import url
from django.conf.urls import patterns
from scanner.views import ScannerIndexView


urlpatterns = patterns('',
                       url(
                           #example: /
                           regex=r'^$',
                           view=ScannerIndexView.as_view(),
                           name='index'
                       ),
                       )
