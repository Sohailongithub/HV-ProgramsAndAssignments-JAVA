from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def To_Do_List ():
    if request.method == 'POST':
        title = request.form.get('title')
        textbox = request.form.get('text-box')
        return render_template('index.html', T=title, TB=textbox)
    
    return render_template('index.html')
if __name__ == '__main__':
    app.run(debug = True)

