package com.example.Backend.mapper;

import com.example.Backend.dto.PatientsDto;
import com.example.Backend.entity.Patients;

public class PatientMapper {
    public static PatientsDto mapToPatientDto(Patients patients){
        return new PatientsDto(
                patients.getId(),
                patients.getHospitalsId(),
                patients.getDepartmentID(),
                patients.getDoctorID(),
                patients.getName(),
                patients.getEmail(),
                patients.getPhn(),
                patients.getSex(),
                patients.getAge(),
                patients.getSymp(),
                patients.getAddr(),
                patients.getDate(),
                patients.getApprovereject(),
                patients.getRemarks(),
                patients.getPay()
        );
    }

    public static Patients mapToPatients(PatientsDto patientsDto){
        return new Patients(
                patientsDto.getId(),
                patientsDto.getClinicId(),
                patientsDto.getDepartmentID(),
                patientsDto.getDoctorID(),
                patientsDto.getName(),
                patientsDto.getEmail(),
                patientsDto.getPhn(),
                patientsDto.getSex(),
                patientsDto.getAge(),
                patientsDto.getSymp(),
                patientsDto.getAddr(),
                patientsDto.getDate(),
                patientsDto.getApprovereject(),
                patientsDto.getRemarks(),
                patientsDto.getPay()
        );
    }
}
