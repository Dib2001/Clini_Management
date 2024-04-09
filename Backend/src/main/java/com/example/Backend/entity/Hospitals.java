package com.example.Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Hospitals")

public class Hospitals {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; //primary key

    @Column(name = "email",nullable = false, unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "hospitalName")
    private String hospitalName;

    @Column(name = "ownerName")
    private String ownerName;

    @Column(name = "mobile")
    private String mobile;

    @Column(name = "license",nullable = false, unique = true)
    private String license;

    @Column(name = "pin")
    private String pin;

    @Column(name = "district")
    private String district;

    @Column(name = "state")
    private String state;

    @Column(name = "post")
    private String post;

    @Column(name = "address")
    private String address;

}
