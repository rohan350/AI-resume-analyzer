from flask import Flask, request, jsonify
from skill_extractor import extract_skills

app = Flask(__name__)

@app.route("/analyze", methods=["POST"])
def analyze():

    data = request.json
    text = data["text"]

    skills = extract_skills(text)

    return jsonify({
        "skills": skills,
        "suggestion": "Add more projects and cloud skills"
    })

if __name__ == "__main__":
    app.run(port=8000)