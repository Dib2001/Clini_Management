package com.example.Backend.service;

import com.example.Backend.dto.HospitalsDto;

import java.util.List;

public interface HospitalsService {
    HospitalsDto createHospitals(HospitalsDto hospitalsDto);

    HospitalsDto getHospitalsByLic(String clinicsLic);
    HospitalsDto getHospitalsById(Long id);

    HospitalsDto getHospitalsByEmail(String clinicsEmail);

    boolean authenticateUser(String email, String password);

    List<HospitalsDto> getAllHospitals();

    HospitalsDto updateHospitals(Long ID, HospitalsDto updatedHospitals);

}
