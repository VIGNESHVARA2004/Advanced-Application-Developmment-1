package com.example.zeta.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.zeta.model.AddOn;
import com.example.zeta.repository.addonRepository;


@Service
public class addonService {
    
    @Autowired
    private addonRepository AddonRepository;
    
    public AddOn addAddon(AddOn addon) {
        return AddonRepository.save(addon);
    }

    public List<AddOn> getAllAddons() {
        return AddonRepository.findAll();
    }

    public AddOn getAddonById(Long addonId) {
        return AddonRepository.findById(addonId).orElse(null);
    }
}
