from flask import Flask, request, jsonify
from answers_predict import predict_answer

app = Flask(__name__)

# Your model code goes here
# Replace this dummy function with your actual model code
def get_answer(context, question):
    # Your model inference code here
    return predict_answer(context=context, question=question)

@app.route("/api/ask", methods=["POST"])
def ask_question():
    data = request.get_json()
    context = data["context"]
    question = data["question"]
    answer = get_answer(context, question)
    return jsonify({"answer": answer})


if __name__ == "__main__":
    app.run(debug=True)


#This is Python backend.