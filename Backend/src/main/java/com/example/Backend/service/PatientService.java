package com.example.Backend.service;

import com.example.Backend.dto.PatientsDto;

import java.util.List;

public interface PatientService {

    PatientsDto createPatients(PatientsDto patientsDto);

    PatientsDto getPatientById(Long id);

    PatientsDto updatePatients(Long ID, PatientsDto updatedPatients);

    List<PatientsDto> getAllPatients();

    void deletePatient(Long ID);
}
