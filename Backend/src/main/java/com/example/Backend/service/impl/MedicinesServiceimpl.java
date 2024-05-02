package com.example.Backend.service.impl;

import com.example.Backend.dto.MedicinesDto;
import com.example.Backend.entity.Medicines;
import com.example.Backend.exception.ResourceFoundException;
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
    public List<MedicinesDto> getAllMedicines() {
        List<Medicines> Medicine = medicinesReprository.findAll();
        return Medicine.stream().map((Medicines) -> MedicinesMapper.mapToMedicinesDto(Medicines))
                .collect(Collectors.toList());
    }
}
