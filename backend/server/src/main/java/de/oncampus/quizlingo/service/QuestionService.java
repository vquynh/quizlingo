package de.oncampus.quizlingo.service;

import de.oncampus.quizlingo.domain.dto.QuestionDTO;

import java.util.List;

public interface QuestionService {

    List<QuestionDTO> getAllQuestions();
    QuestionDTO getQuestion(long id);
}
