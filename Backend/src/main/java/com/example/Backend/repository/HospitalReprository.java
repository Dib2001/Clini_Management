package com.example.Backend.repository;

import com.example.Backend.entity.Hospitals;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HospitalReprository extends JpaRepository<Hospitals, Long> {
    Optional<Hospitals> findByLicense(String license);
    Optional<Hospitals> findByEmail(String email);
}
