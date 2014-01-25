import StringIO
import qrcode

__author__ = 'bognix'


class QrGenerator():

    def generate_qr(self, string):
        img = qrcode.make(string)
        output = StringIO.StringIO()
        img.save(output, "PNG")
        img_base64 = output.getvalue().encode("base64")
        output.close()
        return img_base64