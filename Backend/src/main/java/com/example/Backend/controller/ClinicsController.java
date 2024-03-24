package com.example.Backend.controller;


import com.example.Backend.dto.ClinicsDto;
import com.example.Backend.dto.DepartmentDto;
import com.example.Backend.dto.DoctorsDto;
import com.example.Backend.service.ClinicsService;
import com.example.Backend.service.DepartmentService;
import com.example.Backend.service.DoctorsService;
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
    private DoctorsService doctorsService;
    private DepartmentService departmentService;

    //Post clinic REST API
    @PostMapping
    public ResponseEntity<ClinicsDto> createClinics(@RequestBody ClinicsDto clinicsDto){
        ClinicsDto savedClinics = clinicsService.createClinics(clinicsDto);
        return new ResponseEntity<>(savedClinics, HttpStatus.CREATED);
    }

    //Post doctors REST API
    @PostMapping("doctors/")
    public ResponseEntity<DoctorsDto> createDoctors(@RequestBody DoctorsDto doctorsDto){
        DoctorsDto savedDoctors = doctorsService.createDoctors(doctorsDto);
        return new ResponseEntity<>(savedDoctors, HttpStatus.CREATED);
    }

    //Post department REST API
    @PostMapping("department/")
    public ResponseEntity<DepartmentDto> createDepartments(@RequestBody DepartmentDto departmentDto){
        DepartmentDto savedDepartment = departmentService.createDepartment(departmentDto);
        return new ResponseEntity<>(savedDepartment, HttpStatus.CREATED);
    }

    // Get doctor by ID REST API
    @GetMapping("doctors/{id}")
    public ResponseEntity<DoctorsDto> getDoctorById(@PathVariable("id") Long doctorId){
        DoctorsDto doctorsDto = doctorsService.getDoctorById(doctorId);
        return ResponseEntity.ok(doctorsDto);
    }

    // Get department by ID REST API
    @GetMapping("department/{id}")
    public ResponseEntity<DepartmentDto> getDepartmentById(@PathVariable("id") Long departmentId){
        DepartmentDto departmentDto = departmentService.getDepartmentById(departmentId);
        return ResponseEntity.ok(departmentDto);
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

    //Get all Clinics REST API
    @GetMapping
    public ResponseEntity<List<ClinicsDto>>getAllClinics(){
        List<ClinicsDto> clinics = clinicsService.getAllClinics();
        return ResponseEntity.ok(clinics);
    }
}
