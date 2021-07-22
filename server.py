"""Server for the Doggy App"""

from flask import Flask, render_template, 
import requests

app = Flask(__name__)

@app.route("/")
def homepage():
    """View Homepage"""

    return render_template("root.html")

@app.route("/api/breeds")
def breed_list():
    """Get all breeds from the DOG API"""

    # url: endpoint from the dog API for getting all breeds list
    # can be found here: https://dog.ceo/dog-api/documentation/ 
    url = "https://dog.ceo/api/breeds/list/all"

    # get function from requests library allow to make a GET requests
    response = requests.get(url)


    

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=5000)
