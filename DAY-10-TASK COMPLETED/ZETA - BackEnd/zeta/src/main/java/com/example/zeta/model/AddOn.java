package com.example.zeta.model;


import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddOn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addonId;
    private String addonName;
    private double addonPrice;
    private String addonDetails;
    private String addonValidity;
    private Integer addonData;
    private String addonType;
    @OneToMany(mappedBy = "addon")
    private List<Recharge> recharges;
}
