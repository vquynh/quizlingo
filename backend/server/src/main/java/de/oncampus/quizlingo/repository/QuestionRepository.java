package de.oncampus.quizlingo.repository;

import de.oncampus.quizlingo.domain.model.Question;
import org.springframework.data.repository.CrudRepository;

public interface QuestionRepository extends CrudRepository<Question, Long> {


}
