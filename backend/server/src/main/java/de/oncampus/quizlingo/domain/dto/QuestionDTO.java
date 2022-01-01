package de.oncampus.quizlingo.domain.dto;

import java.util.List;

public class QuestionDTO {

    public QuestionDTO(String name, String topic, String level, List<String> terms, List<String> options, Integer correctAnswer) {
        this.questionText = name;
        this.level = level;
        this.topic = topic;
        this.terms = terms;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    private String questionText;
    private String topic;
    private List<String> terms;
    private List<String> options;
    private Integer correctAnswer;
    private String level;

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
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

    public Integer getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(Integer correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
