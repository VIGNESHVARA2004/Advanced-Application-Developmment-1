package com.example.zeta.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.zeta.model.Customer;

public interface customerRepository extends JpaRepository<Customer, Integer>{
    
}
