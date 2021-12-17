package de.oncampus.quizlingo.controller;

import java.util.Date;

public class AnswerResultMessage {
    public AnswerResultMessage(String user, Date time, String text, String sessionId, int selectedAnswer, long questionId, boolean isCorrect) {
        this.user = user;
        this.time = time;
        this.text = text;
        this.sessionId = sessionId;
        this.selectedAnswer = selectedAnswer;
        this.questionId = questionId;
        this.isCorrect = isCorrect;
    }

    String user;
    Date time = new Date();
    String text;
    String sessionId;
    int selectedAnswer;
    long questionId;
    boolean isCorrect;
}
