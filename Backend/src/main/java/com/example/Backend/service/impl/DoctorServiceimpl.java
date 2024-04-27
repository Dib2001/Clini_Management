package com.example.Backend.service.impl;

import com.example.Backend.dto.DoctorsDto;
import com.example.Backend.entity.Doctors;
import com.example.Backend.exception.ResourceFoundException;
import com.example.Backend.mapper.DoctorMapper;
import com.example.Backend.repository.DoctorReprository;
import com.example.Backend.service.DoctorsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DoctorServiceimpl implements DoctorsService {

    private DoctorReprository doctorReprository;

    @Override
    public DoctorsDto createDoctors(DoctorsDto doctorsDto) {
        Doctors doctors = DoctorMapper.mapToDoctors(doctorsDto);
        Doctors savedDoctors = doctorReprository.save(doctors);
        return DoctorMapper.mapToDoctorDto(savedDoctors);
    }

    @Override
    public DoctorsDto getDoctorById(Long doctorID) {
        Doctors doctors = doctorReprository.findById(doctorID)
                .orElseThrow(() ->
                        new ResourceFoundException("Doctor is not exist with given Id: " + doctorID));
        return DoctorMapper.mapToDoctorDto(doctors);
    }

    @Override
    public void deleteDoctor(Long ID) {
        Doctors doctors = doctorReprository.findById(ID)
                .orElseThrow(() ->
                        new ResourceFoundException("Doctor is not exist with given Id: " + ID));
        doctorReprository.deleteById(ID);
    }

    @Override
    public List<DoctorsDto> getAllDoctors() {
        List<Doctors> Doctors = doctorReprository.findAll();
        return Doctors.stream().map((Doctor) -> DoctorMapper.mapToDoctorDto(Doctor))
                .collect(Collectors.toList());
    }
}
