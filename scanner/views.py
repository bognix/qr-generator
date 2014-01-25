from django.core.urlresolvers import reverse
from django.http.response import HttpResponse
from django.views.generic.edit import FormView
from helpers.qr_generator import QrGenerator
from helpers.views import AppendToContextMixin
from scanner.forms import UrlForm


class ScannerIndexView(AppendToContextMixin, FormView):

    template_name = 'scanner/index.html'
    form_class = UrlForm

    def get_success_url(self):
        return reverse('scanner:index')

    def post(self, request, *args, **kwargs):
        if len(request.POST['url']) > 0:
            qr = QrGenerator().generate_qr(request.POST['url'])
            return HttpResponse(qr)
        else:
            return HttpResponse('dupa')