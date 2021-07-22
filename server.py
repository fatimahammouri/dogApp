"""Server for the Doggy App"""

from flask import Flask, render_template, jsonify 
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

    # .json method parse JSON response from the DOG API as Python dictionary
    data = response.json()

    # breeds are keys in the dictionary value of the data dictionary
    breeds = data["message"].keys()

    # create an empty list/iterate over the keys object/append to the list
    breeds_list = []

    for breed in breeds:
        breeds_list.append(breed)
    
    # return JSON response of the python breeds list
    return jsonify(breeds_list)
    
@app.route("/api/<breed>/images")
def breed_images(breed):
    """Get images of dogs from a certain breed from the Dog API"""

    url = f"https://dog.ceo/api/breed/{breed}/images"

    response = requests.get(url)
    data = response.json()
    images = data["message"]
    
     

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=5000)
