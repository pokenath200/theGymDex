from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows frontend (on a different port) to access this API

# Dummy data - imagine this is from a database
gyms = [
    {"id": 1, "name": "Iron Paradise"},
    {"id": 2, "name": "The Barbell Club"}
]

@app.route("/gyms", methods=["GET"])
def get_gyms():
    # This sends JSON to the frontend
    return jsonify(gyms)

# Start the Flask app
if __name__ == "__main__":
    app.run(port=5000, debug=True)
