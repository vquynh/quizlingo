package de.oncampus.quizlingo.domain.dto;

import com.github.javafaker.Faker;
import de.oncampus.quizlingo.domain.model.Level;

import java.util.Arrays;
import java.util.Date;

public class PlayerDTO {

    public PlayerDTO(Long id) {
        Faker faker = new Faker();
        this.id = id;
        this.name = faker.name().fullName();
        this.profilePicUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
        this.country = "Germany";
        this.level = Arrays.stream(Level.values()).findAny().get();
        this.totalScore = 1000;
        this.highScore = 50;
        this.averageScore = 40;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    private Long id;
    private String name;
    private String profilePicUrl;
    private String country;
    private Level level;

    private int totalScore;
    private int highScore;
    private int averageScore;
    private Date createdAt;
    private Date updatedAt;
    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Level getLevel() {
        return level;
    }

    public void setLevel(Level level) {
        this.level = level;
    }

    public int getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(int totalScore) {
        this.totalScore = totalScore;
    }

    public int getHighScore() {
        return highScore;
    }

    public void setHighScore(int highScore) {
        this.highScore = highScore;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getProfilePicUrl() {
        return profilePicUrl;
    }

    public void setProfilePicUrl(String profilePicUrl) {
        this.profilePicUrl = profilePicUrl;
    }

    public int getAverageScore() {
        return averageScore;
    }

    public void setAverageScore(int averageScore) {
        this.averageScore = averageScore;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
