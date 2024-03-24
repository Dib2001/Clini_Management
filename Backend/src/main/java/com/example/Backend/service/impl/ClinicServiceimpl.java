package com.example.Backend.service.impl;

import com.example.Backend.dto.ClinicsDto;
import com.example.Backend.entity.Clinics;
import com.example.Backend.exception.ResourceFoundException;
import com.example.Backend.mapper.ClinicMapper;
import com.example.Backend.repository.ClinicReprository;
import com.example.Backend.service.ClinicsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ClinicServiceimpl implements ClinicsService {

    private ClinicReprository clinicReprository;
    @Override
    public ClinicsDto createClinics(ClinicsDto clinicsDto) {
        Clinics clinics = ClinicMapper.mapToClinics(clinicsDto);
        Clinics savedClinics = clinicReprository.save(clinics);
        return ClinicMapper.mapToClinicDto(savedClinics);
    }

    @Override
    public ClinicsDto getClinicsByLic(String clinicsLic) {
        Clinics clinics = clinicReprository.findByLicense(clinicsLic)
                .orElseThrow(() ->
                        new ResourceFoundException("Clinics is exist with given license: " + clinicsLic));
        return ClinicMapper.mapToClinicDto(clinics);
    }

    @Override
    public ClinicsDto getClinicsByEmail(String clinicsEmail) {
        Clinics clinics = clinicReprository.findByEmail(clinicsEmail)
                .orElseThrow(() ->
                        new ResourceFoundException("Clinics is exist with given email: " + clinicsEmail));
        return ClinicMapper.mapToClinicDto(clinics);
    }

    @Override
    public List<ClinicsDto> getAllClinics() {
        List<Clinics> clinics = clinicReprository.findAll();
        return clinics.stream().map((clinic) -> ClinicMapper.mapToClinicDto(clinic))
                .collect(Collectors.toList());
    }
}
