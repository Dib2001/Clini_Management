package com.example.Backend.mapper;

import com.example.Backend.dto.MedicinesDto;
import com.example.Backend.entity.Medicines;

public class MedicinesMapper {
    public static MedicinesDto mapToMedicinesDto(Medicines medicines){
        return new MedicinesDto(
                medicines.getId(),
                medicines.getName(),
                medicines.getHospitalsId(),
                medicines.getQuantity()
        );
    }

    public static Medicines mapToMedicines(MedicinesDto medicinesDto){
        return new Medicines(
                medicinesDto.getId(),
                medicinesDto.getName(),
                medicinesDto.getHospitalId(),
                medicinesDto.getQuantity()
        );
    }
}
