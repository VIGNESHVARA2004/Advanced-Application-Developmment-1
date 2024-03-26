package com.example.zeta.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlanDTO {
    private Long planId;
    private String planName;
    private String planType;
    private String planValidity;
    private String planDetails;
    private double planPrice;
    private Integer planData;
}
