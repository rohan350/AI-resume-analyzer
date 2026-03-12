import pandas as pd

skill_list = [
    "python",
    "java",
    "react",
    "node",
    "sql",
    "aws",
    "docker",
    "machine learning"
]

def extract_skills(text):

    found_skills = []

    text = text.lower()

    for skill in skill_list:
        if skill in text:
            found_skills.append(skill)

    return found_skills