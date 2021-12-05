package de.oncampus.quizlingo.services;

import de.oncampus.quizlingo.exception.UserAlreadyExistException;
import de.oncampus.quizlingo.web.dto.UserDto;

public interface UserService {

    UserDto registerNewUserAccount(UserDto userDto) throws UserAlreadyExistException, UserAlreadyExistException;
}
