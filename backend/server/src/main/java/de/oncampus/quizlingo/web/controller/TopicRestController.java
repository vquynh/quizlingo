package de.oncampus.quizlingo.web.controller;

import de.oncampus.quizlingo.persistence.model.Game;
import de.oncampus.quizlingo.persistence.model.Topic;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TopicRestController {

    @GetMapping("/topics")
    public List<Topic> getAllTopics(){
        Topic topic = new Topic();
        topic.setName("Topic 1");
        return List.of(topic);
    }

    @GetMapping("/")
    public String home(){
        return "Spanish learning game server. Go to endpoint /swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config to see api documentation";
    }
}
