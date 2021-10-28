package de.oncampus.patterns.languagegame.persistence.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Option {

    private Long id;
    private String optionText;

    public void setId(Long id) {
        this.id = id;
    }

    @Id
    public Long getId() {
        return id;
    }

    public String getOptionText() {
        return optionText;
    }

    public void setOptionText(String optionText) {
        this.optionText = optionText;
    }
}
