from flask import Flask, render_template, request,redirect,url_for,session
from flask_mysqldb import MySQL
app = Flask(__name__)

app.config["MySQL_HOST"]='Localhost'
app.config["MySQL_USER"]="root"
app.config["MySQL_PASSWORD"]="123456"
app.config["MySQL_DB"]='flask_project'
app.secret_key="938836ghfgu"

mysql=MySQL(app)
@app.route("/")

def home():
    return "Welcome to authentication"

@app.route("/register",methods=['GET', 'POST'])
def register():
    if request.method == "POST" and "username" in request.form and "password" in request.form:
        username = request.form["username"]
        password = request.form["password"]
        cursor = mysql.connection.cursor()
        cursor.execute('INSERT INTO register (username, password) VALUES (%s, %s)', (username, password))
        mysql.connection.commit()
        return "<h1>Signup successful</h1>"
    return render_template('register.html')

@app.route("/login",methods=["GET","POST"])
def login():
    if request.method == "POST" and "username" in request.form and "password" in request.form:
        username = request.form["username"]
        password = request.form["password"]
        cursor=mysql.connection.cursor()
        cursor.execute('select * from authentication where username=%s and password=%s',(username,password))
        exist = cursor.fetchone()
        if exist:
            session["logged"]=True
            session["username"]=exist[0]
            return "<h1>Login Successful</h1>"
        else:
            return "<h1>Login failed</h1>"
    return render_template('login.html')



if __name__ == "__main__":
    app.run(debug=True)
