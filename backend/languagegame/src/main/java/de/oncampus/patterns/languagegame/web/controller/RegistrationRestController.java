package de.oncampus.patterns.languagegame.web.controller;

import de.oncampus.patterns.languagegame.persistence.model.User;
import de.oncampus.patterns.languagegame.services.UserService;
import de.oncampus.patterns.languagegame.web.dto.UserDto;
import de.oncampus.patterns.languagegame.web.util.GenericResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RestController
public class RegistrationRestController {
    private final Logger LOGGER = LoggerFactory.getLogger(getClass());

    private final UserService userService;

    public RegistrationRestController(UserService userService) {
        super();
        this.userService = userService;
    }

    // Registration
    @PostMapping("/user/registration")
    public GenericResponse registerUserAccount(@Valid final UserDto userDto, final HttpServletRequest request) {
        LOGGER.debug("Registering user account with information: {}", userDto);
        final User registered = userService.registerNewUserAccount(userDto);
        return new GenericResponse("success");
    }

}
