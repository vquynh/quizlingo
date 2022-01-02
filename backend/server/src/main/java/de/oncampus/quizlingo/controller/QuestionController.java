package de.oncampus.quizlingo.controller;

import de.oncampus.quizlingo.domain.dto.QuestionDTO;
import de.oncampus.quizlingo.service.QuestionService;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/questions/{topic}")
    public List<QuestionDTO> getQuestionsByTopic(@PathVariable String topic){
        return questionService.getQuestionsByTopic(topic);
    }

    @PutMapping("/questions/{id}")
    public QuestionDTO addQuestion(@PathVariable Long id, @RequestBody QuestionCommand questionCommand){
        return questionService.updateQuestion(id, questionCommand);
    }

    @DeleteMapping("/questions/{id}")
    public void deleteQuestion(@PathVariable Long id){
        questionService.deleteQuestion(id);
    }

    @PostMapping("/questions")
    public QuestionDTO addQuestion(@RequestBody QuestionCommand questionCommand){
        return questionService.addQuestion(questionCommand);
    }
}
