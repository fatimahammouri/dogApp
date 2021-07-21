"""Server for the Doggy App"""

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def homepage():
    """View Homepage"""

    return render_template("root.html")

@app.route("/api/breeds")
def breed_list():
    """Get all breeds from the DOG API"""

    url = "https://dog.ceo/api/breeds/list/all"
    


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=5000)
