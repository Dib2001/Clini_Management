package com.example.Backend.repository;

import com.example.Backend.entity.Medicines;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MedicinesReprository extends JpaRepository<Medicines, Long> {
}
