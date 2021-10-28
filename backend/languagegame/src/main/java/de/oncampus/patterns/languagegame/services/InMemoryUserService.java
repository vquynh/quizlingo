package de.oncampus.patterns.languagegame.services;

import de.oncampus.patterns.languagegame.persistence.model.User;
import de.oncampus.patterns.languagegame.web.dto.UserDto;
import org.springframework.stereotype.Component;

@Component
public class InMemoryUserService implements UserService {
    @Override
    public User registerNewUserAccount(UserDto accountDto) {
        return new User();
    }
}
