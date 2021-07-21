"""Server for the Doggy App"""

from flask import Flask 

app = Flask(__name__)

@app.route("/")
def homepage():
    """View Homepage"""

    return render_template("root.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=5000)
