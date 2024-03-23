package com.example.zeta.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RechargeData {
    private double rechargePrice;
    private String status;
}
