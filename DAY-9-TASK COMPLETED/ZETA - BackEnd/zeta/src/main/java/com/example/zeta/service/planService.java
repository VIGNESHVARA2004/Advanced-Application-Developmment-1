package com.example.zeta.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.zeta.model.Plan;
import com.example.zeta.repository.planRepository;

@Service
public class planService {

    @Autowired
    private planRepository PlanRepository;

    public void addPlan(Plan planData) {
        // Logic to add plan
        PlanRepository.save(planData);
    }

    public List<Plan> getAllPlans() {
        // Logic to fetch all plans
        return PlanRepository.findAll();
    }

    public void editPlan(Long planId, Plan updatedPlanData) {
        // Logic to edit plan
        Plan existingPlan = PlanRepository.findById(planId)
                                           .orElseThrow(() -> new RuntimeException("Plan not found"));
        existingPlan.setPlanType(updatedPlanData.getPlanType());
        existingPlan.setPlanName(updatedPlanData.getPlanName());
        existingPlan.setPlanValidity(updatedPlanData.getPlanValidity());
        existingPlan.setPlanDetails(updatedPlanData.getPlanDetails());
        existingPlan.setPlanPrice(updatedPlanData.getPlanPrice());
        PlanRepository.save(existingPlan);
    }

    public void deletePlan(Long planId) {
        // Logic to delete plan
        PlanRepository.deleteById(planId);
    }
    
}
