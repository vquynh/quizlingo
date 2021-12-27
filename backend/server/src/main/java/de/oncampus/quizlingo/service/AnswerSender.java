package de.oncampus.quizlingo.service;

import com.github.javafaker.Faker;
import de.oncampus.quizlingo.controller.AnswerController;
import de.oncampus.quizlingo.controller.AnswerResultMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.ThreadLocalRandom;

@Service
public class AnswerSender {
        private static final Logger log = LoggerFactory.getLogger(AnswerController.class);

        private final SimpMessagingTemplate simpMessagingTemplate;

        private final Faker faker;

        public AnswerSender(SimpMessagingTemplate simpMessagingTemplate) {
            this.simpMessagingTemplate = simpMessagingTemplate;
            faker = new Faker();
        }
        @Scheduled(fixedRate = 5000)
        public void sendMessage() {
            String time = new SimpleDateFormat("HH:mm:ss").format(new Date());
            AnswerResultMessage message = new AnswerResultMessage();
            message.setUser(faker.name().username());
            message.setTimestamp(time);
            message.setSelectedAnswer(ThreadLocalRandom.current().nextInt(0,4));
            message.setQuestionId(ThreadLocalRandom.current().nextLong(0,14));
            message.setCorrect(ThreadLocalRandom.current().nextBoolean());
            log.info("Sending message: " + message);
            simpMessagingTemplate.convertAndSend("/topic/answers", message);
        }
}
