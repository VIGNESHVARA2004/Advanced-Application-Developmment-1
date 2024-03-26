package com.example.zeta.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.zeta.dto.PaymentData;
import com.example.zeta.dto.RechargeData;
import com.example.zeta.dto.RechargeResponseDTO;
import com.example.zeta.dto.ResponseAddon;
import com.example.zeta.dto.ResponsePlan;
import com.example.zeta.model.AddOn;
import com.example.zeta.model.Plan;
import com.example.zeta.model.Recharge;
import com.example.zeta.service.customerService;

@RestController
@RequestMapping("/api/customer")
public class customerController {

    @Autowired
    private customerService CustomerService;

     @GetMapping("/plan")
    public ResponseEntity<List<ResponsePlan>> viewAllPlans() {
        List<ResponsePlan> plans = CustomerService.getAllPlans();
        return ResponseEntity.ok(plans);
    }

    @PostMapping("/recharge/plan/{planId}")
    public ResponseEntity<String> addRecharge(@PathVariable Long planId, @RequestBody RechargeData rechargeData) {
        CustomerService.addRecharge(planId, rechargeData);
        return ResponseEntity.ok("Plan Recharged");
    }

    @PostMapping("/recharge/addon/{addonId}")
    public ResponseEntity<String> addAddonRecharge(@PathVariable Long addonId, @RequestBody RechargeData rechargeData) {
        CustomerService.addAddonRecharge(addonId, rechargeData);
        return ResponseEntity.ok("Addon Recharged");
    }

    @GetMapping("/addon")
    public ResponseEntity<List<ResponseAddon>> viewAllAddons() {
        List<ResponseAddon> addons = CustomerService.getAllAddons();
        return ResponseEntity.ok(addons);
    }

    @GetMapping("/recharge/{userId}")
    public ResponseEntity<List<RechargeResponseDTO>> viewUserRecharge(@PathVariable Long userId) {
        List<RechargeResponseDTO> recharges = CustomerService.getUserRecharges(userId);
        return ResponseEntity.ok(recharges);
    }

    @PutMapping("/recharge/{planId}")
    public ResponseEntity<String> editRecharge(@PathVariable Long planId, @RequestBody RechargeData rechargeData) {
        CustomerService.editRecharge(planId, rechargeData);
        return ResponseEntity.ok("Recharge Edited");
    }

    @DeleteMapping("/recharge/{planId}")
    public ResponseEntity<String> deleteRecharge(@PathVariable Long planId) {
        CustomerService.deleteRecharge(planId);
        return ResponseEntity.ok("Recharge Deleted");
    }

    @PostMapping("/makepayment")
    public ResponseEntity<String> makePayment(@RequestBody PaymentData paymentData) {
        CustomerService.makePayment(paymentData);
        return ResponseEntity.ok("Payment Successful");
    }
    
}
