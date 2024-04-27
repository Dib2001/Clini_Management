package com.example.Backend.service;

import com.example.Backend.dto.DoctorsDto;

import java.util.List;

public interface DoctorsService {
    DoctorsDto createDoctors(DoctorsDto doctorsDto);

    DoctorsDto getDoctorById(Long id);
    DoctorsDto getDoctorByName(String name);

    void deleteDoctor(Long ID);

    List<DoctorsDto> getAllDoctors();
}
