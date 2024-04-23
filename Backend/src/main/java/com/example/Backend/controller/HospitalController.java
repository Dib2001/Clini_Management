package com.example.Backend.controller;


import com.example.Backend.dto.HospitalsDto;
import com.example.Backend.dto.DepartmentDto;
import com.example.Backend.dto.DoctorsDto;
import com.example.Backend.dto.PatientsDto;
import com.example.Backend.service.HospitalsService;
import com.example.Backend.service.DepartmentService;
import com.example.Backend.service.DoctorsService;
import com.example.Backend.service.PatientService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/hospitals/")
public class HospitalController {
    private HospitalsService hospitalsService;
    private DoctorsService doctorsService;
    private DepartmentService departmentService;
    private PatientService patientService;

    //Post clinic REST API
    @PostMapping
    public ResponseEntity<HospitalsDto> createHospitals(@RequestBody HospitalsDto hospitalsDto){
        HospitalsDto savedHospital = hospitalsService.createHospitals(hospitalsDto);
        return new ResponseEntity<>(savedHospital, HttpStatus.CREATED);
    }

    //Get all Hospitals REST API
    @GetMapping
    public ResponseEntity<List<HospitalsDto>>getAllHospital(){
        List<HospitalsDto> Hospital = hospitalsService.getAllHospitals();
        return ResponseEntity.ok(Hospital);
    }

    // Get hospitals by license REST API
    @GetMapping("license/{license}")
    public ResponseEntity<HospitalsDto> getHospitalByLic(@PathVariable("license") String hospitalsLic){
        HospitalsDto hospitalsDto = hospitalsService.getHospitalsByLic(hospitalsLic);
        return ResponseEntity.ok(hospitalsDto);
    }

    //Get hospitals by email REST API
    @GetMapping("email/{email}")
    public ResponseEntity<HospitalsDto> getHospitalByEmail(@PathVariable("email") String hospitalsEmail){
        HospitalsDto hospitalsDto = hospitalsService.getHospitalsByEmail(hospitalsEmail);
        return ResponseEntity.ok(hospitalsDto);
    }

    @PostMapping("login/")
    public ResponseEntity<Boolean> loginUser(@RequestBody HospitalsDto hospitalDTO) {
        boolean hospitalsDto = hospitalsService.authenticateUser(hospitalDTO.getEmail(), hospitalDTO.getPassword());
        return ResponseEntity.ok(hospitalsDto);
    }

    //Post doctors REST API
    @PostMapping("doctors/")
    public ResponseEntity<DoctorsDto> createDoctors(@RequestBody DoctorsDto doctorsDto){
        DoctorsDto savedDoctors = doctorsService.createDoctors(doctorsDto);
        return new ResponseEntity<>(savedDoctors, HttpStatus.CREATED);
    }

    //Post department REST API
    @PostMapping("department/")
    public ResponseEntity<DepartmentDto> createDepartments(@RequestBody DepartmentDto departmentDto){
        DepartmentDto savedDepartment = departmentService.createDepartment(departmentDto);
        return new ResponseEntity<>(savedDepartment, HttpStatus.CREATED);
    }

    // Get doctor by ID REST API
    @GetMapping("doctors/{id}")
    public ResponseEntity<DoctorsDto> getDoctorById(@PathVariable("id") Long doctorId){
        DoctorsDto doctorsDto = doctorsService.getDoctorById(doctorId);
        return ResponseEntity.ok(doctorsDto);
    }

    // Get department by ID REST API
    @GetMapping("department/{id}")
    public ResponseEntity<DepartmentDto> getDepartmentById(@PathVariable("id") Long departmentId){
        DepartmentDto departmentDto = departmentService.getDepartmentById(departmentId);
        return ResponseEntity.ok(departmentDto);
    }

    //Post patients REST API
    @PostMapping("patients/")
    public ResponseEntity<PatientsDto> createPatients(@RequestBody PatientsDto patientsDto){
        PatientsDto savedPatients = patientService.createPatients(patientsDto);
        return new ResponseEntity<>(savedPatients, HttpStatus.CREATED);
    }

    // Get patient by ID REST API
    @GetMapping("patients/{id}")
    public ResponseEntity<PatientsDto> getPatientById(@PathVariable("id") Long patientId){
        PatientsDto patientsDto = patientService.getPatientById(patientId);
        return ResponseEntity.ok(patientsDto);
    }

    /*Build update Hospitals Rest Api*/
    @PutMapping("{id}")
   public ResponseEntity<HospitalsDto> updateHospitals(@PathVariable("id") Long ID,@RequestBody HospitalsDto updatedHospitals){
       HospitalsDto hospitalsDto=hospitalsService.updateHospitals(ID, updatedHospitals);
       return ResponseEntity.ok(hospitalsDto);
   }

    /*Build update Patients Rest Api*/
    @PutMapping("patients/{id}")
    public ResponseEntity<PatientsDto> updatePatients(@PathVariable("id") Long ID,@RequestBody PatientsDto updatedPatients){
        PatientsDto patientsDto=patientService.updatePatients(ID, updatedPatients);
        return ResponseEntity.ok(patientsDto);
    }

    /*Build update Department Rest Api*/
    @PutMapping("department/{id}")
    public ResponseEntity<DepartmentDto> updatePatients(@PathVariable("id") Long ID,@RequestBody DepartmentDto updatedDepartment){
        DepartmentDto departmentDto=departmentService.updateDepartments(ID, updatedDepartment);
        return ResponseEntity.ok(departmentDto);
    }

    /*Build Delete Department Rest Api*/
    @DeleteMapping("department/{id}")
    public ResponseEntity<String> deleteDepartment(@PathVariable("id") Long ID){
        departmentService.deleteDepartment(ID);
        return ResponseEntity.ok("Department Deleted");
    }

    @DeleteMapping("patients/{id}")
    public ResponseEntity<String> deletePatient(@PathVariable("id") Long ID){
        patientService.deletePatient(ID);
        return ResponseEntity.ok("Patients Deleted");
    }

    @DeleteMapping("doctors/{id}")
    public ResponseEntity<String> deleteDoctor(@PathVariable("id") Long ID){
        doctorsService.deleteDoctor(ID);
        return ResponseEntity.ok("Doctor Deleted");
    }
}
