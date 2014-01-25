from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'qrscan.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^scanner/', include('scanner.urls', namespace='scanner')),
    url(r'^admin/', include(admin.site.urls))

)
