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
    # img = qr.make_image(fill_color="black", back_color="white")
    # in_byte = img.tobytes().decode('latin1')
    # img.save('test.png')
    return qr.get_matrix()


# qrdata = qrcoder('some d  adasdasdasdasdasdsasdasdasdssdata')
# print(help(qrdata))
# print(qrdata.print_ascii())
# qrdata.print_ascii()
# print(len(qrdata.get_matrix()))

# print(len(qrdata.get_matrix()[0]))
# print((qrdata.get_matrix()))
