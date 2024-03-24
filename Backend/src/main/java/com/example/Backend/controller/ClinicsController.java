package com.example.Backend.controller;


import com.example.Backend.dto.ClinicsDto;
import com.example.Backend.service.ClinicsService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/clinics/")
public class ClinicsController {
    private ClinicsService clinicsService;

    //build clinic REST API
    @PostMapping
    public ResponseEntity<ClinicsDto> createClinics(@RequestBody ClinicsDto clinicsDto){
        ClinicsDto savedClinics = clinicsService.createClinics(clinicsDto);
        return new ResponseEntity<>(savedClinics, HttpStatus.CREATED);
    }

    // Get clinic by license REST API
    @GetMapping("license/{license}")
    public ResponseEntity<ClinicsDto> getClinicsByLic(@PathVariable("license") String clinicsLic){
        ClinicsDto clinicsDto = clinicsService.getClinicsByLic(clinicsLic);
        return ResponseEntity.ok(clinicsDto);
    }

    //Get clinic by email REST API
    @GetMapping("email/{email}")
    public ResponseEntity<ClinicsDto> getClinicsByEmail(@PathVariable("email") String clinicsEmail){
        ClinicsDto clinicsDto = clinicsService.getClinicsByEmail(clinicsEmail);
        return ResponseEntity.ok(clinicsDto);
    }

    //Build Get all Clinics REST API
    @GetMapping
    public ResponseEntity<List<ClinicsDto>>getAllClinics(){
        List<ClinicsDto> clinics = clinicsService.getAllClinics();
        return ResponseEntity.ok(clinics);
    }
}
