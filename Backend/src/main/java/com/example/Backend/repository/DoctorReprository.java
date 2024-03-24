package com.example.Backend.repository;

import com.example.Backend.entity.Doctors;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorReprository extends JpaRepository<Doctors, Long> {
}
