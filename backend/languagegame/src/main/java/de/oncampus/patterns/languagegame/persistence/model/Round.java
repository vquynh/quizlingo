package de.oncampus.patterns.languagegame.persistence.model;


import javax.persistence.*;
import java.util.List;

@Entity
public class Round {
    @Id
    private Long id;

    @ManyToOne
    private Game game;

    @OneToMany(targetEntity=Question.class, fetch= FetchType.EAGER)
    private List<Question> questionList;

    private Category category;

    private Level level;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public List<Question> getQuestionList() {
        return questionList;
    }

    public void setQuestionList(List<Question> questionList) {
        this.questionList = questionList;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Level getLevel() {
        return level;
    }

    public void setLevel(Level level) {
        this.level = level;
    }
}
