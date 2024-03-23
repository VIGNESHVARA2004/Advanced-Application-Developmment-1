package com.example.zeta.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.zeta.dto.PaymentData;
import com.example.zeta.dto.RechargeData;
import com.example.zeta.model.AddOn;
import com.example.zeta.model.Payment;
import com.example.zeta.model.Plan;
import com.example.zeta.model.Recharge;
import com.example.zeta.repository.addonRepository;
import com.example.zeta.repository.paymentRepository;
import com.example.zeta.repository.planRepository;
import com.example.zeta.repository.rechargeRepository;

@Service
public class customerService {

    @Autowired
    private planRepository PlanRepository;

    @Autowired
    private addonRepository AddonRepository;

    @Autowired
    private rechargeRepository RechargeRepository;

    @Autowired
    private paymentRepository PaymentRepository;

     // Method to fetch all plans
    public List<Plan> getAllPlans() {
        return PlanRepository.findAll();
    }

    // Method to add recharge for a plan
    public void addRecharge(Long planId, RechargeData rechargeData) {
        Plan plan = PlanRepository.findById(planId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Plan ID"));
        // Logic to add recharge
        // Assuming the rechargeData contains necessary details like price, status, date, etc.
        Recharge recharge = new Recharge();
        recharge.setPlan(plan);
        // Set other recharge details
        RechargeRepository.save(recharge);
    }

    // Method to add recharge for an addon
    public void addAddonRecharge(Long addonId, RechargeData rechargeData) {
        AddOn addon = AddonRepository.findById(addonId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Addon ID"));
        // Logic to add addon recharge
        // Assuming the rechargeData contains necessary details like price, status, date, etc.
        Recharge recharge = new Recharge();
        recharge.setAddon(addon);
        // Set other recharge details
        RechargeRepository.save(recharge);
    }

    // Method to fetch all addons
    public List<AddOn> getAllAddons() {
        return AddonRepository.findAll();
    }

    // Method to view recharges for a user
    public List<Recharge> getUserRecharges(Long userId) {
        // Logic to fetch recharges for the specified user ID
        // Assuming you have a way to associate recharges with users
        // Implement accordingly based on your data model
        return RechargeRepository.findByUserId(userId);
    }

    // Method to edit a recharge
    public void editRecharge(Long rechargeId, RechargeData rechargeData) {
        Recharge recharge = RechargeRepository.findById(rechargeId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Recharge ID"));
        // Logic to edit recharge details
        // Update recharge details based on rechargeData
        RechargeRepository.save(recharge);
    }

    // Method to delete a recharge
    public void deleteRecharge(Long rechargeId) {
        Recharge recharge = RechargeRepository.findById(rechargeId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Recharge ID"));
        // Logic to delete recharge
        RechargeRepository.delete(recharge);
    }

    // Method to make payment
    public void makePayment(PaymentData paymentData) {
        // Logic to make payment
        // Assuming paymentData contains necessary details like payment amount, payment date, etc.
        Payment payment = new Payment();
        // Set payment details
        PaymentRepository.save(payment);
    }
    
}
