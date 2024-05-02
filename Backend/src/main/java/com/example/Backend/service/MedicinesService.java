package com.example.Backend.service;

import com.example.Backend.dto.MedicinesDto;

import java.util.List;

public interface MedicinesService {
    MedicinesDto createMedicines(MedicinesDto medicinesDto);

    List<MedicinesDto> getAllMedicines();
}
