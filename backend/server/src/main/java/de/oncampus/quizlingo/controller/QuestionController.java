package de.oncampus.quizlingo.controller;

import de.oncampus.quizlingo.domain.dto.QuestionDTO;
import de.oncampus.quizlingo.service.QuestionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping("/questions")
    public List<QuestionDTO> getAllQuestions(){
        return questionService.getAllQuestions();
    }

    
    @PostMapping("/questions")
    public QuestionDTO addQuestion(@RequestBody QuestionDTO questionDTO){
        return questionService.addQuestion(questionDTO);
    }
}
