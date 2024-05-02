package com.example.Backend.service;

import com.example.Backend.dto.MedicinesDto;

import java.util.List;

public interface MedicinesService {
    MedicinesDto createMedicines(MedicinesDto medicinesDto);

    MedicinesDto getMedicinesById(Long medicinesId);
    MedicinesDto getMedicinesByName(String medicinesName);

    List<MedicinesDto> getAllMedicines();
}
