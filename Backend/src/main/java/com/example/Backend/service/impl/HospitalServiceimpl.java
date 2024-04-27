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
        Hospitals hospitals = HospitalMapper.mapToHospital(hospitalsDto);
        Hospitals savedHospitals = hospitalReprository.save(hospitals);
        return HospitalMapper.mapToHospitalDto(savedHospitals);
    }

    @Override
    public HospitalsDto getHospitalsByLic(String HospitalsLic) {
        Hospitals hospitals = hospitalReprository.findByLicense(HospitalsLic)
                .orElseThrow(() ->
                        new ResourceFoundException("Hospitals is exist with given license: " + HospitalsLic));
        return HospitalMapper.mapToHospitalDto(hospitals);
    }

    @Override
    public HospitalsDto getHospitalsByEmail(String HospitalsEmail) {
        Hospitals hospitals = hospitalReprository.findByEmail(HospitalsEmail)
                .orElseThrow(() ->
                        new ResourceFoundException("Hospitals is exist with given email: " + HospitalsEmail));
        return HospitalMapper.mapToHospitalDto(hospitals);
    }

    public boolean authenticateUser(String HospitalsEmail, String password) {
        Hospitals hospital = hospitalReprository.findByEmail(HospitalsEmail)
                .orElse(null);
        return hospital != null && hospital.getPassword().equals(password);
    }

    @Override
    public List<HospitalsDto> getAllHospitals() {
        List<Hospitals> Hospitals = hospitalReprository.findAll();
        return Hospitals.stream().map((Hospital) -> HospitalMapper.mapToHospitalDto(Hospital))
                .collect(Collectors.toList());
    }

    @Override
    public HospitalsDto updateHospitals(Long ID, HospitalsDto updatedHospitals) {
         Hospitals hospitals =  hospitalReprository.findById(ID).orElseThrow(
                ()-> new ResourceNotFoundException("Hospitals is not exists with given id:"+ID)
        );
        hospitals.setHospitalName(updatedHospitals.getHospitalName());
        hospitals.setEmail(updatedHospitals.getEmail());
        hospitals.setPassword(updatedHospitals.getPassword());
        hospitals.setMobile(updatedHospitals.getMobile());
        hospitals.setAddress(updatedHospitals.getAddress());
        hospitals.setPin(updatedHospitals.getPin());
        hospitals.setDistrict(updatedHospitals.getDistrict());
        hospitals.setState(updatedHospitals.getState());
        hospitals.setPost(updatedHospitals.getPost());

        Hospitals updatedHospitalsObj = hospitalReprository.save(hospitals);
        return HospitalMapper.mapToHospitalDto(updatedHospitalsObj);
    }
    @Override
    public HospitalsDto getHospitalsById(Long id) {
        Hospitals hospitals = hospitalReprository.findById(id)
                .orElseThrow(() ->
                        new ResourceFoundException("Hospital is not exist with given Id: " + id));
        return HospitalMapper.mapToHospitalDto(hospitals);
    }

}
