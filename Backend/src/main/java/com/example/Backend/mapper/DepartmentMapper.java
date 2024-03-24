package com.example.Backend.mapper;

import com.example.Backend.dto.DepartmentDto;
import com.example.Backend.entity.Department;

public class DepartmentMapper {
    public static DepartmentDto mapToDepartmentDto(Department department){
        return new DepartmentDto(
                department.getId(),
                department.getName(),
                department.getClinicsId()
        );
    }

    public static Department mapToDepartment(DepartmentDto departmentDto){
        return new Department(
                departmentDto.getId(),
                departmentDto.getName(),
                departmentDto.getClinicId()
        );
    }
}
