package com.example.Backend.mapper;

import com.example.Backend.dto.DoctorsDto;
import com.example.Backend.entity.Clinics;
import com.example.Backend.entity.Doctors;

public class DoctorMapper {
    public static DoctorsDto mapToDoctorDto(Doctors doctors){
        return new DoctorsDto(
                doctors.getId(),
                doctors.getEmail(),
                doctors.getName(),
                doctors.getClinicsId(),
                doctors.getDepartmentID(),
                doctors.getMobile(),
                doctors.getAddress()
        );
    }

    public static Doctors mapToDoctors(DoctorsDto doctorsDto){
        return new Doctors(
                doctorsDto.getId(),
                doctorsDto.getEmail(),
                doctorsDto.getName(),
                doctorsDto.getClinicId(),
                doctorsDto.getDepartmentID(),
                doctorsDto.getMobile(),
                doctorsDto.getAddress()
        );
    }
}
