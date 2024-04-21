package com.example.Backend.service;

import com.example.Backend.dto.HospitalsDto;

import java.util.List;

public interface HospitalsService {
    HospitalsDto createHospitals(HospitalsDto hospitalsDto);

    HospitalsDto getHospitalsByLic(String clinicsLic);

    HospitalsDto getHospitalsByEmail(String clinicsEmail);
    HospitalsDto getHospitalsByPassword(String clinicsPassword);

    List<HospitalsDto> getAllHospitals();

    HospitalsDto updateHospitals(Long ID, HospitalsDto updatedHospitals);

}
