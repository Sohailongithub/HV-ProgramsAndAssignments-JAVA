from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        age = request.form.get('age')
        return render_template('contact_form.html',n=name,a=age)

    return render_template('contact_form.html')
if __name__ == '__main__':
    app.run(debug = True)

