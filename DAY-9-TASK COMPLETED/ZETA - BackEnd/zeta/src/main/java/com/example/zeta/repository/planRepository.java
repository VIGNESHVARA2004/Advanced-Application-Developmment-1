package com.example.zeta.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.zeta.model.Plan;

public interface planRepository extends JpaRepository<Plan,Long> {
    
}
