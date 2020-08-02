from flask import Blueprint, render_template, jsonify, request
import os
from .qrcd import qrcoder

qrCode = Blueprint('QRCode',__name__)

# @qrCode.route('/', methods=['GET', 'POST'])
# def index():
#     # return render_template('index.html')
#     return str(os.path.abspath(os.getcwd()))


# @qrCode.route('/post_data', methods=['POST'])
# def post_data():
#     json_data = request.get_json()
#     data = json_data['title']
#     return 'posted' , 201

@qrCode.route('/get_qrcode', methods=['GET', 'POST'])
def get_qrcode():
    json_data = request.get_json()
    data = json_data['data_to_qr']
    QR_code_latin1 = qrcoder(data)
    return jsonify({'QRcode':QR_code_latin1})
