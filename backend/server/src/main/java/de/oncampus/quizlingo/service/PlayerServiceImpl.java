package de.oncampus.quizlingo.service;

import de.oncampus.quizlingo.domain.dto.PlayerDTO;
import org.springframework.stereotype.Service;

@Service
public class PlayerServiceImpl implements PlayerService {

    @Override
    public PlayerDTO getPlayer(long id) {
        return new PlayerDTO(id);
    }
}
