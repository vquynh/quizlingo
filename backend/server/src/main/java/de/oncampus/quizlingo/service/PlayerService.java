package de.oncampus.quizlingo.service;

import de.oncampus.quizlingo.domain.dto.PlayerDTO;

public interface PlayerService {

    PlayerDTO getPlayer(long id);
}
