package com.example.Backend.repository;

import com.example.Backend.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DepartmentReprository extends JpaRepository<Department, Long> {
    Optional<Department> findByName(String name);
}
