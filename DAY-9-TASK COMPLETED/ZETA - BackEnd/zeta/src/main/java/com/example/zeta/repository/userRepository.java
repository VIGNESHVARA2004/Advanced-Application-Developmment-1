package com.example.zeta.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.zeta.model.User;

public interface userRepository extends JpaRepository<User, Long>{
    
}
