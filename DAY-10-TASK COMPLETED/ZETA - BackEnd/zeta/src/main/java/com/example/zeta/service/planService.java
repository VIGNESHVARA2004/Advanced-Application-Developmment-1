package com.example.zeta.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.zeta.dto.PlanDTO;
import com.example.zeta.model.Plan;
import com.example.zeta.repository.planRepository;

@Service
public class planService {

    @Autowired
    private planRepository PlanRepository;

    @SuppressWarnings("null")
    public void addPlan(PlanDTO planDTO) {
        Plan plan = new Plan();
        plan.setPlanName(planDTO.getPlanName());
        plan.setPlanType(planDTO.getPlanType());
        plan.setPlanValidity(planDTO.getPlanValidity());
        plan.setPlanDetails(planDTO.getPlanDetails());
        plan.setPlanPrice(planDTO.getPlanPrice());
        plan.setPlanData(planDTO.getPlanData());
        PlanRepository.save(plan);
    }
    
    public List<PlanDTO> getAllPlans() {
        List<Plan> plans = PlanRepository.findAll();
        List<PlanDTO> planDTOs = new ArrayList<>();
        for (Plan plan : plans) {
            PlanDTO planDTO = new PlanDTO();
            planDTO.setPlanId(plan.getPlanId());
            planDTO.setPlanName(plan.getPlanName());
            planDTO.setPlanType(plan.getPlanType());
            planDTO.setPlanValidity(plan.getPlanValidity());
            planDTO.setPlanDetails(plan.getPlanDetails());
            planDTO.setPlanPrice(plan.getPlanPrice());
            planDTO.setPlanData(plan.getPlanData());
            planDTOs.add(planDTO);
        }
        return planDTOs;
    }
    
    public void editPlan(Long planId, PlanDTO updatedPlanDTO) {
        Optional<Plan> optionalPlan = PlanRepository.findById(planId);
        if (optionalPlan.isPresent()) {
            Plan plan = optionalPlan.get();
            plan.setPlanName(updatedPlanDTO.getPlanName());
            plan.setPlanType(updatedPlanDTO.getPlanType());
            plan.setPlanValidity(updatedPlanDTO.getPlanValidity());
            plan.setPlanDetails(updatedPlanDTO.getPlanDetails());
            plan.setPlanPrice(updatedPlanDTO.getPlanPrice());
            plan.setPlanData(updatedPlanDTO.getPlanData());
            PlanRepository.save(plan);
        }
    }

    public void deletePlan(Long planId) {
        PlanRepository.deleteById(planId);
    }
    
}
