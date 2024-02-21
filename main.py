from flask import Flask, request, jsonify,render_template


app = Flask(__name__)
# @app.route('/')
# def index():
#     return render_template('index.html')

@app.route('/process_text', methods=['GET'])
def process_text():
    response   =  "Test Response"
    return jsonify({'processed_text': response}), 200
if __name__ == '__main__':
    app.run(debug=True)