package de.oncampus.quizlingo.services;

import de.oncampus.quizlingo.persistence.model.Player;
import de.oncampus.quizlingo.persistence.repository.PlayerRepository;
import de.oncampus.quizlingo.web.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.time.LocalDate;

@Component
public class UserDetailsService implements UserDetailsManager, UserService {

    private final PlayerRepository playerRepository;

    public UserDetailsService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    @Override
    public void createUser(UserDetails userDetails) {
        if(playerRepository.findByUserName(userDetails.getUsername()) != null){
            Player player = new Player();
            player.setUserName(userDetails.getUsername());
            player.setPassword(userDetails.getPassword());
            player.setCreatedAt(Date.valueOf(LocalDate.now()));
            playerRepository.save(player);
        }
    }

    @Override
    public void updateUser(UserDetails userDetails) {
        Player player = playerRepository.findByUserName(userDetails.getUsername());
        player.setPassword(userDetails.getPassword());
        playerRepository.save(player);
    }

    @Override
    public void deleteUser(String username) {
        Player player = playerRepository.findByUserName(username);
        playerRepository.delete(player);
    }

    @Override
    public void changePassword(String username, String password) {
        Player player = playerRepository.findByUserName(username);
        player.setPassword(password);
        playerRepository.save(player);
    }

    @Override
    public boolean userExists(String username) {
        return playerRepository.existsByUserName(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Player player = playerRepository.findByUserName(username);
        if (player == null){
            throw new UsernameNotFoundException("No user with username: " + username + " found.");
        }
        return org.springframework.security.core.userdetails.User.builder()
                .username(username)
                .password(player.getPassword())
                .build();
    }

    @Override
    public Player registerNewUserAccount(UserDto userDto) {
        Player player = new Player();
        player.setUserName(userDto.getUsername());
        player.setPassword(userDto.getPassword());
        player.setFirstName(userDto.getFirstName());
        player.setLastName(userDto.getLastName());
        return playerRepository.save(player);
    }
}
