package com.example.Backend.service;

import com.example.Backend.dto.DoctorsDto;

public interface DoctorsService {
    DoctorsDto createDoctors(DoctorsDto doctorsDto);

    DoctorsDto getDoctorById(Long id);
}
