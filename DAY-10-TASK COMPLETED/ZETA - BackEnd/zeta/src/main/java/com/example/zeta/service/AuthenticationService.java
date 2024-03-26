package com.example.zeta.service;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.zeta.dto.Request.LoginRequest;
import com.example.zeta.dto.Request.RegisterRequest;
import com.example.zeta.dto.Response.AuthenticationResponse;
import com.example.zeta.model.Customer;
import com.example.zeta.model.User;
import com.example.zeta.repository.customerRepository;
import com.example.zeta.repository.userRepository;


import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final userRepository UserRepository;
    private final customerRepository CustomerRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setMobileNumber(request.getMobileNumber());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setUserRole(request.getUserRole());
        UserRepository.save(user);

        if (request.getUserRole().equals("USER")) {
            Customer customer = new Customer();
            customer.setCustomerName(request.getUsername());
            customer.setUser(user);
            CustomerRepository.save(customer);
        }

        String jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        User user = (User) UserRepository.findByUsername(request.getUsername());

        String jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
