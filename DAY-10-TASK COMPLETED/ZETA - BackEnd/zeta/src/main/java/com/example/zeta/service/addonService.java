package com.example.zeta.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.zeta.dto.AddOnDTO;
import com.example.zeta.dto.ResponseAddon;
import com.example.zeta.model.AddOn;
import com.example.zeta.repository.addonRepository;


@Service
public class addonService {
    
    @Autowired
    private addonRepository AddonRepository;
    
    @SuppressWarnings("null")
    public AddOn addAddon(AddOnDTO addonDTO) {
        AddOn addon = new AddOn();
        addon.setAddonName(addonDTO.getAddonName());
        addon.setAddonPrice(addonDTO.getAddonPrice());
        addon.setAddonDetails(addonDTO.getAddonDetails());
        addon.setAddonValidity(addonDTO.getAddonValidity());
        addon.setAddonData(addonDTO.getAddonData());
        addon.setAddonType(addonDTO.getAddonType());
        return AddonRepository.save(addon);
    }

    public List<ResponseAddon> getAllAddons() {
        List<AddOn> addons = AddonRepository.findAll();
        return addons.stream()
                     .map(this::convertToAddonResponse)
                     .collect(Collectors.toList());
    }

    private ResponseAddon convertToAddonResponse(AddOn addon) {
        return new ResponseAddon(
            addon.getAddonId(),
            addon.getAddonName(),
            addon.getAddonPrice(),
            addon.getAddonDetails(),
            addon.getAddonValidity(),
            addon.getAddonData(),
            addon.getAddonType()
        );
    }

    @SuppressWarnings("null")
    public AddOn getAddonById(Long addonId) {
        return AddonRepository.findById(addonId).orElse(null);
    }

    public void editAddon(Long addonId, AddOnDTO updatedAddonData) {
        AddonRepository.updateAddon(addonId,
                                     updatedAddonData.getAddonName(),
                                     updatedAddonData.getAddonPrice(),
                                     updatedAddonData.getAddonDetails(),
                                     updatedAddonData.getAddonValidity(),
                                     updatedAddonData.getAddonData(),
                                     updatedAddonData.getAddonType());
    }

    @SuppressWarnings("null")
    public void deleteAddon(Long addonId) {
        
        AddonRepository.deleteById(addonId);
    }
}
