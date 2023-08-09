from transformers import BertForQuestionAnswering
from transformers import AutoTokenizer
from transformers import pipeline

_model = BertForQuestionAnswering.from_pretrained('deepset/bert-base-cased-squad2')
model_checkpoint = "deepset/bert-base-cased-squad2"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)

context = ("Value of 1 Faraday is 96500C. The 'C' in it stand for Columb. A human cannot survive 1 Faraday of current.")

questions = ["What is the value of Rydberg's constant?"]


def predict_answer(question, context, answer_threshold=0.005):
    nlp = pipeline('question-answering', model=_model, tokenizer=tokenizer)

    ans_dict = nlp({
        'question': question,
        'context': context
    })
    print(ans_dict)
    return ans_dict["answer"] if ans_dict['score'] >= answer_threshold else "Answer not found"


print(tokenizer.encode(questions[0], truncation=True, padding=True))
