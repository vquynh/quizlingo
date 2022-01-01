package de.oncampus.quizlingo.controller;

import de.oncampus.quizlingo.domain.dto.GameDTO;
import de.oncampus.quizlingo.domain.dto.PlayerDTO;
import de.oncampus.quizlingo.exception.InvalidNumberOfPlayers;
import de.oncampus.quizlingo.exception.PlayerNotFoundException;
import de.oncampus.quizlingo.service.GameService;
import org.springframework.web.bind.annotation.*;

@RestController
public class GameController {

    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping("/games/{id}")
    public GameDTO getGame(@PathVariable String id){
        return gameService.getGameById(Long.parseLong(id));
    }

    @PostMapping("/games")
    public GameDTO addGame(@RequestBody GameDTO gameDTO) throws InvalidNumberOfPlayers, PlayerNotFoundException {
        return gameService.addGame(gameDTO);
    }


}
