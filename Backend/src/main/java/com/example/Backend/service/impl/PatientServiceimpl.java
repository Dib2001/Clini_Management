package com.example.Backend.service.impl;

import com.example.Backend.dto.PatientsDto;
import com.example.Backend.entity.Patients;
import com.example.Backend.exception.ResourceFoundException;
import com.example.Backend.exception.ResourceNotFoundException;
import com.example.Backend.mapper.PatientMapper;
import com.example.Backend.repository.PatientReprository;
import com.example.Backend.service.PatientService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public PatientsDto updatePatients(Long ID, PatientsDto updatedPatients) {
        Patients patients = patientReprository.findById(ID).orElseThrow(
                ()-> new ResourceNotFoundException("Patients is not exists with given id:"+ID)
        );
        patients.setDate(updatedPatients.getDate());
        patients.setDepartmentID(updatedPatients.getDepartmentID());
        patients.setDoctorID(updatedPatients.getDoctorID());
        patients.setRemarks(updatedPatients.getRemarks());
        patients.setApprovereject(updatedPatients.getApprovereject());

        Patients updatePatientsObj = patientReprository.save(patients);
        return PatientMapper.mapToPatientDto(updatePatientsObj);
    }

    @Override
    public void deletePatient(Long ID) {
        Patients patients = patientReprository.findById(ID).orElseThrow(
                ()-> new ResourceNotFoundException("Patients is not exists with given id:"+ID)
        );
        patientReprository.deleteById(ID);
    }

    @Override
    public List<PatientsDto> getAllPatients() {
        List<Patients> Patients = patientReprository.findAll();
        return Patients.stream().map((Patient) -> PatientMapper.mapToPatientDto(Patient))
                .collect(Collectors.toList());
    }
}
