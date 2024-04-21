package com.example.Backend.service.impl;

import com.example.Backend.dto.HospitalsDto;
import com.example.Backend.entity.Hospitals;
import com.example.Backend.exception.ResourceFoundException;
import com.example.Backend.exception.ResourceNotFoundException;
import com.example.Backend.mapper.HospitalMapper;
import com.example.Backend.repository.HospitalReprository;
import com.example.Backend.service.HospitalsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class HospitalServiceimpl implements HospitalsService {

    private HospitalReprository hospitalReprository;
    @Override
    public HospitalsDto createHospitals(HospitalsDto hospitalsDto) {
        Hospitals hospitals = HospitalMapper.mapToClinics(hospitalsDto);
        Hospitals savedHospitals = hospitalReprository.save(hospitals);
        return HospitalMapper.mapToClinicDto(savedHospitals);
    }

    @Override
    public HospitalsDto getHospitalsByLic(String clinicsLic) {
        Hospitals hospitals = hospitalReprository.findByLicense(clinicsLic)
                .orElseThrow(() ->
                        new ResourceFoundException("Hospitals is exist with given license: " + clinicsLic));
        return HospitalMapper.mapToClinicDto(hospitals);
    }

    @Override
    public HospitalsDto getHospitalsByEmail(String clinicsEmail) {
        Hospitals hospitals = hospitalReprository.findByEmail(clinicsEmail)
                .orElseThrow(() ->
                        new ResourceFoundException("Hospitals is exist with given email: " + clinicsEmail));
        return HospitalMapper.mapToClinicDto(hospitals);
    }

    @Override
    public HospitalsDto getHospitalsByPassword(String clinicsPassword) {
        Hospitals hospitals = hospitalReprository.findByPassword(clinicsPassword)
                .orElseThrow(() ->
                        new ResourceFoundException("" + clinicsPassword));
        return HospitalMapper.mapToClinicDto(hospitals);
    }

    @Override
    public List<HospitalsDto> getAllHospitals() {
        List<Hospitals> clinics = hospitalReprository.findAll();
        return clinics.stream().map((clinic) -> HospitalMapper.mapToClinicDto(clinic))
                .collect(Collectors.toList());
    }

    @Override
    public HospitalsDto updateHospitals(Long ID, HospitalsDto updatedClinics) {
         Hospitals hospitals =  hospitalReprository.findById(ID).orElseThrow(
                ()-> new ResourceNotFoundException("Hospitals is not exists with given id:"+ID)
        );
        hospitals.setHospitalName(updatedClinics.getHospitalName());
        hospitals.setEmail(updatedClinics.getEmail());
        hospitals.setPassword(updatedClinics.getPassword());
        hospitals.setMobile(updatedClinics.getMobile());
        hospitals.setAddress(updatedClinics.getAddress());
        hospitals.setPin(updatedClinics.getPin());
        hospitals.setDistrict(updatedClinics.getDistrict());
        hospitals.setState(updatedClinics.getState());
        hospitals.setPost(updatedClinics.getPost());

        Hospitals updatedHospitalsObj = hospitalReprository.save(hospitals);
        return HospitalMapper.mapToClinicDto(updatedHospitalsObj);
    }
}
