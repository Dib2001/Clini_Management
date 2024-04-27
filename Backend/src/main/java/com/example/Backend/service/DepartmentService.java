package com.example.Backend.service;

import com.example.Backend.dto.DepartmentDto;

import java.util.List;

public interface DepartmentService {
    DepartmentDto createDepartment(DepartmentDto departmentDto);

    DepartmentDto getDepartmentById(Long departmentId);
    DepartmentDto getDepartmentByName(String departmentName);

    List<DepartmentDto> getAllDepartments();
}
