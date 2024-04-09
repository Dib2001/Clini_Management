package com.example.Backend.mapper;

import com.example.Backend.dto.HospitalsDto;
import com.example.Backend.entity.Hospitals;

public class HospitalMapper {
    public static HospitalsDto mapToClinicDto(Hospitals hospitals){
        return new HospitalsDto(
                hospitals.getId(),
                hospitals.getEmail(),
                hospitals.getPassword(),
                hospitals.getHospitalName(),
                hospitals.getOwnerName(),
                hospitals.getMobile(),
                hospitals.getLicense(),
                hospitals.getPin(),
                hospitals.getDistrict(),
                hospitals.getState(),
                hospitals.getPost(),
                hospitals.getAddress()
        );
    }
    public static Hospitals mapToClinics(HospitalsDto hospitalsDto){
        return new Hospitals(
                hospitalsDto.getId(),
                hospitalsDto.getEmail(),
                hospitalsDto.getPassword(),
                hospitalsDto.getHospitalName(),
                hospitalsDto.getOwnerName(),
                hospitalsDto.getMobile(),
                hospitalsDto.getLicense(),
                hospitalsDto.getPin(),
                hospitalsDto.getDistrict(),
                hospitalsDto.getState(),
                hospitalsDto.getPost(),
                hospitalsDto.getAddress()
        );
    }
}
