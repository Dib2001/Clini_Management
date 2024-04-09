package com.example.Backend.service.impl;

import com.example.Backend.dto.DepartmentDto;
import com.example.Backend.entity.Department;
import com.example.Backend.exception.ResourceFoundException;
import com.example.Backend.exception.ResourceNotFoundException;
import com.example.Backend.mapper.DepartmentMapper;
import com.example.Backend.repository.DepartmentReprository;
import com.example.Backend.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class DepartmentServiceimpl implements DepartmentService {
    private DepartmentReprository departmentReprository;

    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {
        Department department = DepartmentMapper.mapToDepartment(departmentDto);
        Department savedDepartment = departmentReprository.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }

    @Override
    public DepartmentDto getDepartmentById(Long departmentId) {
        Department department = departmentReprository.findById(departmentId)
                .orElseThrow(() ->
                        new ResourceFoundException("Department is not exist with given Id: " + departmentId));
        return DepartmentMapper.mapToDepartmentDto(department);
    }

    @Override
    public DepartmentDto updateDepartments(Long ID, DepartmentDto updateDepartments) {
        Department department = departmentReprository.findById(ID).orElseThrow(
                ()->new ResourceNotFoundException("Department is not found")
        );
        department.setHospitalsId(updateDepartments.getHospitalId());
        department.setName(updateDepartments.getName());

        Department updateDepartmentObj = departmentReprository.save(department);
        return DepartmentMapper.mapToDepartmentDto(updateDepartmentObj);
    }

    @Override
    public void deleteDepartment(Long ID) {
        Department department = departmentReprository.findById(ID).orElseThrow(
                ()->new ResourceNotFoundException("Department is not found")
        );

        departmentReprository.deleteById(ID);
    }
}
