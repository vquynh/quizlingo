package de.oncampus.patterns.languagegame.persistence.repository;

import de.oncampus.patterns.languagegame.persistence.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {


    public User findByUserName(String username);

    public boolean existsByUserName(String username);
}
