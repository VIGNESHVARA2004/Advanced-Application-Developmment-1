package com.example.zeta.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RechargeResponseDTO {
    private Long rechargeId;
    private double rechargePrice;
    private String status;
    private Date date;  
}
