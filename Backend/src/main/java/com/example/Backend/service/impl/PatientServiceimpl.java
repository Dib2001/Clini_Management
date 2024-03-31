package com.example.Backend.service.impl;

import com.example.Backend.dto.PatientsDto;
import com.example.Backend.entity.Patients;
import com.example.Backend.exception.ResourceFoundException;
import com.example.Backend.mapper.PatientMapper;
import com.example.Backend.repository.PatientReprository;
import com.example.Backend.service.PatientService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PatientServiceimpl implements PatientService {
    private PatientReprository patientReprository;
    @Override
    public PatientsDto createPatients(PatientsDto patientsDto) {
        Patients patients = PatientMapper.mapToPatients(patientsDto);
        Patients savePatients = patientReprository.save(patients);
        return PatientMapper.mapToPatientDto(savePatients);
    }

    @Override
    public PatientsDto getPatientById(Long id) {
        Patients patients = patientReprository.findById(id).
                orElseThrow(()->
                        new ResourceFoundException("Patients is not exist with given Id: "+ id));
        return PatientMapper.mapToPatientDto(patients);
    }
}
