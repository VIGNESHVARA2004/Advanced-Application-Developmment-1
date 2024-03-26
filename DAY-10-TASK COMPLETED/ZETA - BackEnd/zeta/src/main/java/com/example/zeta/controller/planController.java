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
import org.springframework.web.bind.annotation.RestController;

import com.example.zeta.dto.PlanDTO;
import com.example.zeta.service.planService;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/api/plan")
public class planController {

    @Autowired 
    private planService PlanService;

    @PostMapping
    public ResponseEntity<String> addPlan(@RequestBody PlanDTO planDTO) {
        PlanService.addPlan(planDTO);
        return ResponseEntity.ok("Plan Added");
    }


    @GetMapping
    public ResponseEntity<List<PlanDTO>> viewAllPlans() {
        List<PlanDTO> plans = PlanService.getAllPlans();
        return ResponseEntity.ok(plans);
    }

    @PutMapping("/{planId}")
    public ResponseEntity<String> editPlan(@PathVariable Long planId, @RequestBody PlanDTO updatedPlanDTO) {
        PlanService.editPlan(planId, updatedPlanDTO);
        return ResponseEntity.ok("Plan Edited");
    }

    @DeleteMapping("/{planId}")
    public ResponseEntity<String> deletePlan(@PathVariable Long planId) {
        PlanService.deletePlan(planId);
        return ResponseEntity.ok("Plan Deleted");
    }
    
    
}
