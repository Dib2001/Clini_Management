package com.example.Backend.repository;

import com.example.Backend.entity.Clinics;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClinicReprository extends JpaRepository<Clinics, Long> {
    Optional<Clinics> findByLicense(String license);
    Optional<Clinics> findByEmail(String email);
}
