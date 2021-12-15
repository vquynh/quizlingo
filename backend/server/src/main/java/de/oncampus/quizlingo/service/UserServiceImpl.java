package de.oncampus.quizlingo.service;

import de.oncampus.quizlingo.exception.UserAlreadyExistException;
import de.oncampus.quizlingo.domain.model.user.Account;
import de.oncampus.quizlingo.repository.AccountRepository;
import de.oncampus.quizlingo.domain.dto.UserDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService{
    private final AccountRepository repository;

    public UserServiceImpl(AccountRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDto registerNewUserAccount(UserDto userDto) throws UserAlreadyExistException {
        if (usernameExists(userDto.getUsername())) {
            throw new UserAlreadyExistException("There is an account with that username: "
                    + userDto.getUsername());
        }
        Account account = new Account();
        account.setUserName(userDto.getUsername());
        account.setPasswordHash(new BCryptPasswordEncoder().encode(userDto.getPassword()));
        repository.save(account);
        return userDto;
    }

    private boolean usernameExists(String username) {
        return repository.findByUserName(username) != null;
    }

}
