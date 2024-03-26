package com.example.zeta.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.zeta.model.Payment;

public interface paymentRepository extends JpaRepository<Payment,Long>{
    
}
