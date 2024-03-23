package com.example.zeta.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.zeta.model.AddOn;
import com.example.zeta.service.addonService;

@RestController
@RequestMapping("/api/addon")
public class addonController {

    @Autowired
    private addonService AddonService;

   @PostMapping
    public ResponseEntity<String> addAddon(@RequestBody AddOn addonData) {
        AddonService.addAddon(addonData);
        return ResponseEntity.ok("Addon Added");
    }
    
}
