package com.example.Backend.repository;

import com.example.Backend.entity.Patients;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientReprository extends JpaRepository<Patients, Long> {
}
