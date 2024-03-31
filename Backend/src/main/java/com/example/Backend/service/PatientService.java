package com.example.Backend.service;

import com.example.Backend.dto.PatientsDto;

public interface PatientService {

    PatientsDto createPatients(PatientsDto patientsDto);

    PatientsDto getPatientById(Long id);
}
