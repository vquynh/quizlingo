package de.oncampus.quizlingo.service;

import de.oncampus.quizlingo.domain.dto.QuestionDTO;
import de.oncampus.quizlingo.domain.model.*;
import de.oncampus.quizlingo.repository.QuestionRepository;
import de.oncampus.quizlingo.repository.TermRepository;
import de.oncampus.quizlingo.repository.TopicRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;
    private final TermRepository termRepository;
    private final TopicRepository topicRepository;

    public QuestionServiceImpl(QuestionRepository questionRepository, TermRepository termRepository, TopicRepository topicRepository) {
        this.questionRepository = questionRepository;
        this.termRepository = termRepository;
        this.topicRepository = topicRepository;
    }

    @Override
    public List<QuestionDTO> getAllQuestions() {
        List<QuestionDTO> questionDTOS = new ArrayList<>();
        questionRepository.findAll().iterator().forEachRemaining(question -> questionDTOS.add(toQuestionDTO(question)));
        return questionDTOS;
    }

    private QuestionDTO toQuestionDTO(Question question) {
        List<String> terms = question.getTerms().stream().map(Term::getName).collect(Collectors.toList());
        return new QuestionDTO(
                question.getQuestionText(),
                question.getTopic().getName(),
                question.getLevel(),
                terms,
                question.getOptions(),
                question.getCorrectAnswer());
    }

    @Override
    public QuestionDTO getQuestion(long id) {
        return questionRepository.findById(id).map(this::toQuestionDTO).orElse(null);
    }

    @Override
    public QuestionDTO addQuestion(QuestionDTO questionDTO) {
        questionRepository.save(toQuestionEntity(questionDTO));
        return questionDTO;
    }

    private Question toQuestionEntity(QuestionDTO questionDTO) {
        Question question = new Question();
        question.setQuestionText(questionDTO.getQuestionText());
        Topic topic = topicRepository.findByName(questionDTO.getTopic());
        if(topic == null){
            topic = new Topic();
            topic.setName(questionDTO.getTopic());
            topicRepository.save(topic);
        }
        question.setTopic(topic);
        question.setOptions(questionDTO.getOptions());
        question.setCorrectAnswer(questionDTO.getCorrectAnswer());
        question.setLevel(questionDTO.getLevel());
        List<Term> terms = new ArrayList<>();
        questionDTO.getTerms().forEach(name -> {
            Term term = termRepository.findByName(name);
            if (term == null){
                term = new Term();
                term.setName(name);
                termRepository.save(term);
            }
            terms.add(term);

        });
        question.setTerms(terms);
        return question;
    }


}
