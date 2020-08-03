import qrcode

def qrcoder(data):
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)
    qrdata=[]
    y = qr.get_matrix()
    for item in y:
        qrdata.append([int(elm) for elm in item])
    return qrdata


