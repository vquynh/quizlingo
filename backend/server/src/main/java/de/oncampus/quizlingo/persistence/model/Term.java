package de.oncampus.quizlingo.persistence.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Term {
    @Id
    @Column(name = "id", nullable = false)
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
