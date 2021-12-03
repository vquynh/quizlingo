package de.oncampus.patterns.languagegame.services;

import de.oncampus.patterns.languagegame.persistence.model.User;
import de.oncampus.patterns.languagegame.persistence.repository.UserRepository;
import de.oncampus.patterns.languagegame.web.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.time.LocalDate;

@Component
public class UserDetailsService implements UserDetailsManager, UserService {

    private final UserRepository userRepository;

    public UserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void createUser(UserDetails userDetails) {
        if(userRepository.findByUserName(userDetails.getUsername()) != null){
            User user = new User();
            user.setUserName(userDetails.getUsername());
            user.setPassword(userDetails.getPassword());
            user.setCreatedAt(Date.valueOf(LocalDate.now()));
            userRepository.save(user);
        }
    }

    @Override
    public void updateUser(UserDetails userDetails) {
        User user = userRepository.findByUserName(userDetails.getUsername());
        user.setPassword(userDetails.getPassword());
        userRepository.save(user);
    }

    @Override
    public void deleteUser(String username) {
        User user = userRepository.findByUserName(username);
        userRepository.delete(user);
    }

    @Override
    public void changePassword(String username, String password) {
        User user = userRepository.findByUserName(username);
        user.setPassword(password);
        userRepository.save(user);
    }

    @Override
    public boolean userExists(String username) {
        return userRepository.existsByUserName(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUserName(username);
        if (user == null){
            throw new UsernameNotFoundException("No user with username: " + username + " found.");
        }
        return org.springframework.security.core.userdetails.User.builder()
                .username(username)
                .password(user.getPassword())
                .build();
    }

    @Override
    public User registerNewUserAccount(UserDto userDto) {
        User user = new User();
        user.setUserName(userDto.getUsername());
        user.setPassword(userDto.getPassword());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        return userRepository.save(user);
    }
}
