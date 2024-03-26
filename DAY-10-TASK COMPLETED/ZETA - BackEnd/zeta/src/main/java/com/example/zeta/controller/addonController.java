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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.zeta.dto.AddOnDTO;
import com.example.zeta.dto.ResponseAddon;
import com.example.zeta.model.AddOn;
import com.example.zeta.service.addonService;

@RestController
@RequestMapping("/api/addon")
public class addonController {

    @Autowired
    private addonService AddonService;

   @PostMapping
    public ResponseEntity<String> addAddon(@RequestBody AddOnDTO addonDTO) {
        AddonService.addAddon(addonDTO);
        return ResponseEntity.ok("Addon Added");
    }

    @GetMapping
    public ResponseEntity<List<ResponseAddon>> getAllAddons() {
        List<ResponseAddon> addons = AddonService.getAllAddons();
        return ResponseEntity.ok(addons);
    }

    @PutMapping("/{addonId}")
    public ResponseEntity<String> editAddon(@PathVariable Long addonId, @RequestBody AddOnDTO updatedAddonData) {
        AddOn addon = AddonService.getAddonById(addonId);
        if (addon != null) {
            AddonService.editAddon(addonId, updatedAddonData);
            return ResponseEntity.ok("Addon updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{addonId}")
    public ResponseEntity<String> deleteAddon(@PathVariable Long addonId) {
        AddOn addon = AddonService.getAddonById(addonId);
        if (addon != null) {
            AddonService.deleteAddon(addonId);
            return ResponseEntity.ok("Addon deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
}
