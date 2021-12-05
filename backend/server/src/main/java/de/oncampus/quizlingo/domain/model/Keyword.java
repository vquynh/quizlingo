package de.oncampus.quizlingo.domain.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Keyword {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    private String keyword;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
