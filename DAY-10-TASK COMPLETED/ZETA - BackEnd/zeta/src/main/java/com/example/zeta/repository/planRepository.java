package com.example.zeta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.zeta.model.Plan;

public interface planRepository extends JpaRepository<Plan,Long> {
    
    @Modifying
    @Query("UPDATE Plan p " +
           "SET p.planType = :planType, " +
           "p.planName = :planName, " +
           "p.planValidity = :planValidity, " +
           "p.planDetails = :planDetails, " +
           "p.planPrice = :planPrice " +
           "WHERE p.planId = :planId")
    void updatePlan(@Param("planId") Long planId,
                    @Param("planType") String planType,
                    @Param("planName") String planName,
                    @Param("planValidity") String planValidity,
                    @Param("planDetails") String planDetails,
                    @Param("planPrice") double planPrice);
}
