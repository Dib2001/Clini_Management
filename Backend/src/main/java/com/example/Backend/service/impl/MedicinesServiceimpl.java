package com.example.Backend.service.impl;

import com.example.Backend.dto.MedicinesDto;
import com.example.Backend.entity.Medicines;
import com.example.Backend.exception.ResourceFoundException;
import com.example.Backend.mapper.DepartmentMapper;
import com.example.Backend.mapper.MedicinesMapper;
import com.example.Backend.repository.MedicinesReprository;
import com.example.Backend.service.MedicinesService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MedicinesServiceimpl implements MedicinesService {
    private MedicinesReprository medicinesReprository;

    @Override
    public MedicinesDto createMedicines(MedicinesDto medicinesDto) {
        Medicines medicines = MedicinesMapper.mapToMedicines(medicinesDto);
        Medicines savedMedicines = medicinesReprository.save(medicines);
        return MedicinesMapper.mapToMedicinesDto(savedMedicines);

    }

    @Override
    public MedicinesDto getMedicinesById(Long medicinesId) {
        Medicines medicines = medicinesReprository.findById(medicinesId)
                .orElseThrow(() ->
                        new ResourceFoundException("Medicines is not exist with given Id: " + medicinesId));
        return MedicinesMapper.mapToMedicinesDto(medicines);
    }

    @Override
    public MedicinesDto getMedicinesByName(String medicinesName) {
        Medicines medicines = medicinesReprository.findByMedicinesName(medicinesName)
                .orElseThrow(() ->
                        new ResourceFoundException("Medicines is not exist with given NAme: " + medicinesName));
        return MedicinesMapper.mapToMedicinesDto(medicines);
    }

    @Override
    public List<MedicinesDto> getAllMedicines() {
        List<Medicines> Medicines = medicinesReprository.findAll();
        return Medicines.stream().map((Medicine) -> MedicinesMapper.mapToMedicinesDto(Medicine))
                .collect(Collectors.toList());
    }
}
