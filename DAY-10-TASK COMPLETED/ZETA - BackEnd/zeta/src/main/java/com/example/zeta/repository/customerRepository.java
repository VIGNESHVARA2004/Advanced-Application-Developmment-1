package com.example.zeta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.zeta.model.Customer;

public interface customerRepository extends JpaRepository<Customer, Integer>{
    
    @Query("SELECT c FROM Customer c WHERE c.user.userId = :userId")
    Customer findByUserId(@Param("userId") Long userId);
}
