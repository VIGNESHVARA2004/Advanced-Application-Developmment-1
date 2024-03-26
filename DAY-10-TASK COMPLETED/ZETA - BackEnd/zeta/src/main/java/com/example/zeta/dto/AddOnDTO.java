package com.example.zeta.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddOnDTO {
    private String addonName;
    private double addonPrice;
    private String addonDetails;
    private String addonValidity;
    private Integer addonData;
    private String addonType;
}