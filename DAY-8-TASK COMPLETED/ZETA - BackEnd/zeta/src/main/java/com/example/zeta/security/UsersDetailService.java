package com.example.giftcraft.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.example.giftcraft.model.Users;
import com.example.giftcraft.repository.UsersRepository;

@Component
public class UsersDetailService implements UserDetailsService {

    @Autowired
    private UsersRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Users> userInfo = repository.findByEmail(username);
        return userInfo.map(UsersDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("user not found " + username));

    }
}

