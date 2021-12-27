package de.oncampus.quizlingo.controller;

import de.oncampus.quizlingo.service.QuestionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.ThreadLocalRandom;

public class AnswerController {

    private final QuestionService questionService;
    private static final Logger log = LoggerFactory.getLogger(AnswerController.class);

    public AnswerController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @MessageMapping("/answer")
    @SendTo("/topic/answers")
    public AnswerResultMessage addAction(PlayerAnswer playerAnswer) throws Exception {
        boolean isCorrect = questionService.getQuestion(playerAnswer.questionId).getCorrectAnswer() == playerAnswer.selectedAnswer;
        log.info("Received answer");
        AnswerResultMessage message = new AnswerResultMessage();
        message.setUser(playerAnswer.user);
        message.setTimestamp(playerAnswer.timestamp);
        message.setSelectedAnswer(playerAnswer.selectedAnswer);
        message.setQuestionId(playerAnswer.questionId);
        message.setCorrect(isCorrect);
        return message;
    }
}
