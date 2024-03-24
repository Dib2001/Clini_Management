package com.example.Backend.service;

import com.example.Backend.dto.ClinicsDto;

import java.util.List;

public interface ClinicsService {
    ClinicsDto createClinics(ClinicsDto clinicsDto);

    ClinicsDto getClinicsByLic(String clinicsLic);

    ClinicsDto getClinicsByEmail(String clinicsEmail);

    List<ClinicsDto> getAllClinics();
}
