package de.oncampus.quizlingo.controller;

import de.oncampus.quizlingo.domain.model.Role;
import de.oncampus.quizlingo.service.TopicService;
import de.oncampus.quizlingo.service.TopicServiceImpl;
import de.oncampus.quizlingo.domain.dto.TopicDTO;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.List;

@RestController
public class TopicRestController {

    private final TopicService topicService;

    public TopicRestController(TopicService topicService) {
        this.topicService = topicService;
    }


    @GetMapping("/topics")
    public List<TopicDTO> getAllTopics(){

        return topicService.getAllTopics();
    }

    @PostMapping("/topics")
    @ResponseStatus(HttpStatus.CREATED)
    @RolesAllowed(Role.ADMIN)
    public TopicDTO create(@RequestBody TopicDTO topicDTO) throws TopicServiceImpl.TopicAlreadyExistException {
        return topicService.createTopic(topicDTO);
    }

    @GetMapping("/")
    public String home(){
        return "Spanish learning game server. Go to endpoint /swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config to see api documentation";
    }
}
