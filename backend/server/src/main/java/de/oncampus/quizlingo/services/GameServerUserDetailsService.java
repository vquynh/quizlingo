package de.oncampus.quizlingo.services;

import de.oncampus.quizlingo.persistence.model.Player;
import de.oncampus.quizlingo.persistence.repository.PlayerRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class GameServerUserDetailsService implements UserDetailsService {

    private final PlayerRepository userRepository;

    public GameServerUserDetailsService(PlayerRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Player user = userRepository.findByUserName(username);
        if (user == null) {
            throw new UsernameNotFoundException("No user found with username: " + username);
        }
        PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        return User.builder().passwordEncoder(encoder::encode).username(user.getUserName())
        .password(user.getPasswordHash()).authorities(getAuthorities(List.of("ROLE_USER"))).build();
    }

    private static List<GrantedAuthority> getAuthorities (List<String> roles) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        for (String role : roles) {
            authorities.add(new SimpleGrantedAuthority(role));
        }
        return authorities;
    }

}
