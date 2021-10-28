package de.oncampus.patterns.languagegame.services;

import de.oncampus.patterns.languagegame.persistence.model.User;
import de.oncampus.patterns.languagegame.web.dto.UserDto;

public interface UserService {

    User registerNewUserAccount(UserDto accountDto);
}
