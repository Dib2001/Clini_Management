package com.example.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HospitalsDto {
    private Long id;
    private String email;
    private String password;
    private String hospitalName;
    private String ownerName;
    private String mobile;
    private String license;
    private String pin;
    private String district;
    private String state;
    private String post;
    private String address;

}
