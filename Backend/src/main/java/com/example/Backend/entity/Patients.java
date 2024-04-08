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
@Table(name = "Patients")
public class Patients {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "clinicID", nullable = false)
    private Long clinicsId; //Fk clinic id

    @Column(name = "departmentID", nullable = false)
    private Long departmentID; //Fk department id

    @Column(name = "doctorID", nullable = false)
    private Long doctorID; //Fk doctor id

    @Column(name = "name")
    private String name;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "phn")
    private String phn;

    @Column(name = "sex")
    private String sex;

    @Column(name = "age")
    private String age;

    @Column(name = "symp")
    private String symp;

    @Column(name = "addr")
    private String addr;

    @Column(name = "date")
    private String date;

    @Column(name = "approvereject")
    private String approvereject;
}

