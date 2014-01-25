from django import forms


class UrlForm(forms.Form):
    url = forms.CharField(
        max_length=200,
        widget=forms.TextInput(attrs={'class':'form-control input-lg', 'placeholder': '...convert to QR'}
        ))