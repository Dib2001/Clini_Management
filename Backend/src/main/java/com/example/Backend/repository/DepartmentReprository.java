package com.example.Backend.repository;

import com.example.Backend.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentReprository extends JpaRepository<Department, Long> {
}
