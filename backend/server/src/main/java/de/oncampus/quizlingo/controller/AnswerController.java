package de.oncampus.quizlingo.controller;

import de.oncampus.quizlingo.service.QuestionService;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;

import java.util.Date;

public class AnswerController {

    private final QuestionService questionService;

    public AnswerController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @MessageMapping("/answer")
    @SendTo("/topic/answers")
    public AnswerResultMessage addAction(AnswerMessage answerMessage) throws Exception {
        boolean isCorrect = questionService.getQuestion(answerMessage.questionId).getCorrectAnswer() == answerMessage.selectedAnswer;
        return new AnswerResultMessage(answerMessage.user, new Date(), answerMessage.text, answerMessage.sessionId, answerMessage.selectedAnswer, answerMessage.questionId, isCorrect);
    }
}
