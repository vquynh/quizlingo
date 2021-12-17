package de.oncampus.quizlingo.service;

import de.oncampus.quizlingo.domain.dto.QuestionDTO;
import de.oncampus.quizlingo.domain.dto.TopicDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {
    @Override
    public List<QuestionDTO> getAllQuestions() {
        TopicDTO topicDTO = new TopicDTO("Test topic");
        return List.of(
                new QuestionDTO("Question 1", topicDTO, new ArrayList<>(), List.of("A - Option 1", "B - Option 2", "C - Option 3", "D - Option 4"), 0),
                new QuestionDTO("Question 2", topicDTO, new ArrayList<>(), List.of("A - Option 1", "B - Option 2", "C - Option 3", "D - Option 4"), 1),
                new QuestionDTO("Question 3", topicDTO, new ArrayList<>(), List.of("A - Option 1", "B - Option 2", "C - Option 3", "D - Option 4"), 2),
                new QuestionDTO("Question 4", topicDTO, new ArrayList<>(), List.of("A - Option 1", "B - Option 2", "C - Option 3", "D - Option 4"), 3),
                new QuestionDTO("Question 5", topicDTO, new ArrayList<>(), List.of("A - Option 1", "B - Option 2", "C - Option 3", "D - Option 4"), 0));
    }

    @Override
    public QuestionDTO getQuestion(long id) {
        TopicDTO topicDTO = new TopicDTO("Test topic");
        return new QuestionDTO("Question 1", topicDTO, new ArrayList<>(), List.of("A - Option 1", "B - Option 2", "C - Option 3", "D - Option 4"), 0);
    }


}
