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
@Table(name = "Doctors")
public class Doctors {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "name")
    private String name;

    @Column(name = "hospitalID", nullable = false)
    private Long hospitalsId; //Fk hospitals id

    @Column(name = "departmentID", nullable = false)
    private Long departmentID;

    @Column(name = "mobile")
    private String mobile;

    @Column(name = "address")
    private String address;
}

