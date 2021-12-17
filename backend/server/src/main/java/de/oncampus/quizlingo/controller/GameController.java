package de.oncampus.quizlingo.controller;

import de.oncampus.quizlingo.domain.dto.TopicDTO;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.util.HtmlUtils;

public class GameController {

    @MessageMapping("/game")
    @SendTo("/topic/game")
    public TopicDTO addGame(GameMessage message) throws Exception {
        Thread.sleep(1000); // simulated delay
        return new TopicDTO("Topic: " + HtmlUtils.htmlEscape(message.text));
    }
}
