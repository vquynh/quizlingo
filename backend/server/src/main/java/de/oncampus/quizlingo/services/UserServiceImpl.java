package de.oncampus.quizlingo.services;

import de.oncampus.quizlingo.exception.UserAlreadyExistException;
import de.oncampus.quizlingo.persistence.model.Player;
import de.oncampus.quizlingo.persistence.repository.PlayerRepository;
import de.oncampus.quizlingo.web.dto.UserDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService{
    private final PlayerRepository repository;

    public UserServiceImpl(PlayerRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDto registerNewUserAccount(UserDto userDto) throws UserAlreadyExistException {
        if (usernameExists(userDto.getEmail())) {
            throw new UserAlreadyExistException("There is an account with that email address: "
                    + userDto.getEmail());
        }

        Player user = new Player();
        user.setUserName(userDto.getUsername());
        user.setPasswordHash(userDto.getPassword());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setPasswordHash(userDto.getPassword());
        //user.setRoles(Arrays.asList("ROLE_USER"));
        repository.save(user);
        return userDto;
    }

    private boolean usernameExists(String username) {
        return repository.findByUserName(username) != null;
    }

}
