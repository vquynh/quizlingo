package de.oncampus.quizlingo.domain.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Term {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private Type type;

    private String translation;

    @OneToMany
    private List<Example> exampleList;

    @OneToMany
    private List<Keyword> keywordList;

    private String conjugation;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
