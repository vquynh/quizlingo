package de.oncampus.quizlingo.persistence.repository;

import de.oncampus.quizlingo.persistence.model.Player;
import org.springframework.data.repository.CrudRepository;

public interface PlayerRepository extends CrudRepository<Player, Long> {

    public Player findByUserName(String username);

    public boolean existsByUserName(String username);
}
