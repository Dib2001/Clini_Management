package com.example.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorsDto {
    private Long id;
    private String email;
    private String name;
    private Long hospitalId;
    private Long departmentID;
    private String mobile;
    private String address;
}
