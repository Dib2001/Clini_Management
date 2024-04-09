package com.example.Backend.service;

import com.example.Backend.dto.DepartmentDto;
import com.example.Backend.dto.DoctorsDto;

public interface DepartmentService {
    DepartmentDto createDepartment(DepartmentDto departmentDto);

    DepartmentDto getDepartmentById(Long departmentId);

    DepartmentDto updateDepartments(Long ID, DepartmentDto updateDepartments);

    void deleteDepartment(Long ID);
}
