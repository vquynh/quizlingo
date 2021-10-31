package de.oncampus.patterns.languagegame.persistence.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Example {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    private String text;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
