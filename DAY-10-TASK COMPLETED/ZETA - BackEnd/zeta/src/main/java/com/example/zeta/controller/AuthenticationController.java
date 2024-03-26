package com.example.zeta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.zeta.dto.Request.LoginRequest;
import com.example.zeta.dto.Request.RegisterRequest;
import com.example.zeta.dto.Response.AuthenticationResponse;
import com.example.zeta.model.User;
import com.example.zeta.repository.userRepository;
import com.example.zeta.service.AuthenticationService;
import java.util.List;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @Autowired
    private userRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(
            @RequestBody RegisterRequest request
    ) {
        service.register(request);
        return ResponseEntity.ok("Registered successfully");
    }

    @GetMapping("/getregister")
    public ResponseEntity<List<User>> getRegister() {
        List<User> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }
}
