package com.example.Backend.mapper;

import com.example.Backend.dto.ClinicsDto;
import com.example.Backend.entity.Clinics;

public class ClinicMapper {
    public static ClinicsDto mapToClinicDto(Clinics clinics){
        return new ClinicsDto(
                clinics.getId(),
                clinics.getEmail(),
                clinics.getPassword(),
                clinics.getClinicName(),
                clinics.getOwnerName(),
                clinics.getMobile(),
                clinics.getLicense(),
                clinics.getPin(),
                clinics.getDistrict(),
                clinics.getState(),
                clinics.getPost(),
                clinics.getAddress()
        );
    }
    public static Clinics mapToClinics(ClinicsDto clinicsDto){
        return new Clinics(
                clinicsDto.getId(),
                clinicsDto.getEmail(),
                clinicsDto.getPassword(),
                clinicsDto.getClinicName(),
                clinicsDto.getOwnerName(),
                clinicsDto.getMobile(),
                clinicsDto.getLicense(),
                clinicsDto.getPin(),
                clinicsDto.getDistrict(),
                clinicsDto.getState(),
                clinicsDto.getPost(),
                clinicsDto.getAddress()
        );
    }
}
