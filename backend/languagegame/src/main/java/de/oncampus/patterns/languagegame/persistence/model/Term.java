package de.oncampus.patterns.languagegame.persistence.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.List;

@Entity
public class Term {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    private Type type;

    private String translation;

    private List<Example> exampleList;

    private List<Keyword> keywordList;

    private String conjugation;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
