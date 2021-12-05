package de.oncampus.quizlingo.services;

import de.oncampus.quizlingo.persistence.model.Player;
import de.oncampus.quizlingo.web.dto.UserDto;

public interface UserService {

    Player registerNewUserAccount(UserDto accountDto);
}
