package com.example.zeta.repository;

import java.util.List;
import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.zeta.model.Recharge;

import jakarta.transaction.Transactional;

public interface rechargeRepository extends JpaRepository<Recharge,Long>{
    
    @Query("SELECT r FROM Recharge r " +
           "JOIN r.payment p " +
           "JOIN p.customer c " +
           "JOIN c.user u " +
           "WHERE u.userId = :userId")
    List<Recharge> findByUserId(Long userId);

    @Transactional
    @Modifying
    @Query("UPDATE Recharge r " +
           "SET r.rechargePrice = :rechargePrice, " +
           "r.status = :status, " +
           "r.date = :date " +
           "WHERE r.plan.planId = :planId")
    void updateRechargeByPlanId(@Param("planId") Long planId,
                                @Param("rechargePrice") double rechargePrice,
                                @Param("status") String status,
                                @Param("date") Date date);
    @Transactional
    @Modifying
    @Query("DELETE FROM Recharge r WHERE r.plan.planId = :planId")
    void deleteByPlanId(@Param("planId") Long planId);
}
