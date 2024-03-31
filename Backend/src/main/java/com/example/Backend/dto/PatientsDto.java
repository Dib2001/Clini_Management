package com.example.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PatientsDto {
    private Long id;
    private Long clinicId;
    private Long departmentID;
    private Long doctorID;
    private String name;
    private String email;
    private String phn;
    private String sex;
    private String age;
    private String symp;
    private String addr;
}