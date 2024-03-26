package com.example.zeta.service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.zeta.dto.PaymentData;
import com.example.zeta.dto.RechargeData;
import com.example.zeta.dto.RechargeResponseDTO;
import com.example.zeta.dto.ResponseAddon;
import com.example.zeta.dto.ResponsePlan;
import com.example.zeta.model.AddOn;
import com.example.zeta.model.Customer;
import com.example.zeta.model.Payment;
import com.example.zeta.model.Plan;
import com.example.zeta.model.Recharge;
import com.example.zeta.repository.addonRepository;
import com.example.zeta.repository.customerRepository;
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

    @Autowired
    private customerRepository CustomerRepository;

     
    public List<ResponsePlan> getAllPlans() {
        List<Plan> plans = PlanRepository.findAll();
        return plans.stream()
                .map(plan -> new ResponsePlan(
                        plan.getPlanId(),
                        plan.getPlanName(),
                        plan.getPlanType(),
                        plan.getPlanValidity(),
                        plan.getPlanDetails(),
                        plan.getPlanPrice(),
                        plan.getPlanData()))
                .collect(Collectors.toList());
    }

    
    public void addRecharge(Long planId, RechargeData rechargeData) {
        Plan plan = PlanRepository.findById(planId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid Plan ID"));
    
        Long userId = rechargeData.getUserId();
        Customer customer = CustomerRepository.findByUserId(userId);
    
        Recharge recharge = new Recharge();
        recharge.setRechargePrice(rechargeData.getRechargePrice());
        recharge.setStatus(rechargeData.getStatus());
        recharge.setDate(new Date());
        recharge.setPlan(plan);
    
        Payment payment = new Payment();
        payment.setStatus("Pending"); 
        payment.setTotalAmount(rechargeData.getRechargePrice());
        payment.setPaymentDate(new Date());
        payment.setCustomer(customer);
        PaymentRepository.save(payment);
        recharge.setPayment(payment);
    
        RechargeRepository.save(recharge);
    }

    
    public void addAddonRecharge(Long addonId, RechargeData rechargeData) {
    AddOn addon = AddonRepository.findById(addonId)
            .orElseThrow(() -> new IllegalArgumentException("Invalid Addon ID"));

    Long userId = rechargeData.getUserId();
    Customer customer = CustomerRepository.findByUserId(userId);

    Recharge recharge = new Recharge();
    recharge.setRechargePrice(rechargeData.getRechargePrice());
    recharge.setStatus(rechargeData.getStatus());
    recharge.setDate(new Date());
    recharge.setAddon(addon);

    Payment payment = new Payment();
    payment.setStatus("Pending");
    payment.setTotalAmount(rechargeData.getRechargePrice());
    payment.setPaymentDate(new Date());

    payment.setCustomer(customer);
    PaymentRepository.save(payment);

    recharge.setPayment(payment);

    RechargeRepository.save(recharge);
}

    
    public List<ResponseAddon> getAllAddons() {
        List<AddOn> addons = AddonRepository.findAll();
        return addons.stream()
                .map(addon -> new ResponseAddon(
                        addon.getAddonId(),
                        addon.getAddonName(),
                        addon.getAddonPrice(),
                        addon.getAddonDetails(),
                        addon.getAddonValidity(),
                        addon.getAddonData(),
                        addon.getAddonType()))
                .collect(Collectors.toList());
    }

    
    public List<RechargeResponseDTO> getUserRecharges(Long userId) {
    List<Recharge> recharges = RechargeRepository.findByUserId(userId);
    return recharges.stream()
            .map(this::convertToResponseDTO)
            .collect(Collectors.toList());
    }

    private RechargeResponseDTO convertToResponseDTO(Recharge recharge) {
        return new RechargeResponseDTO(
                recharge.getRechargeId(),
                recharge.getRechargePrice(),
                recharge.getStatus(),
                recharge.getDate()
        );
    }

    public void editRecharge(Long planId, RechargeData rechargeData) {
        RechargeRepository.updateRechargeByPlanId(planId,
                rechargeData.getRechargePrice(),
                rechargeData.getStatus(),
                new Date());
    }


    public void deleteRecharge(Long planId) {
        
        RechargeRepository.deleteByPlanId(planId);
    }


    public void makePayment(PaymentData paymentData) {
        Customer customer = CustomerRepository.findById(paymentData.getCustomerId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid Customer ID"));

        Payment payment = new Payment();
        payment.setStatus(paymentData.getStatus());
        payment.setTotalAmount(paymentData.getTotalAmount());
        payment.setPaymentDate(new Date()); 
        payment.setModeOfPayment(paymentData.getModeOfPayment());
        
        payment.setCustomer(customer);

        PaymentRepository.save(payment);
    }
    
}
