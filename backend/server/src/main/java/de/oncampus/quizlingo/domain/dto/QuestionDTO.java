package de.oncampus.quizlingo.domain.dto;

import java.util.List;

public class QuestionDTO {

    public QuestionDTO(String name, TopicDTO topic, List<String> terms, List<String> options, String correctAnswer) {
        this.questionText = name;
        this.topic = topic;
        this.terms = terms;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    private String questionText;
    private TopicDTO topic;
    private List<String> terms;
    private List<String> options;
    private String correctAnswer;

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public TopicDTO getTopic() {
        return topic;
    }

    public void setTopic(TopicDTO topic) {
        this.topic = topic;
    }

    public List<String> getTerms() {
        return terms;
    }

    public void setTerms(List<String> terms) {
        this.terms = terms;
    }

    public List<String> getOptions() {
        return options;
    }

    public void setOptions(List<String> options) {
        this.options = options;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }
}
