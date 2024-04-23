package com.example.Backend.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Patients")
public class Patients {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "hospitalID")
    private Long hospitalsId; //Fk hospitals id

    @Column(name = "departmentID")
    private Long departmentID; //Fk department id

    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getHospitalsId() {
		return hospitalsId;
	}

	public void setHospitalsId(Long hospitalsId) {
		this.hospitalsId = hospitalsId;
	}

	public Long getDepartmentID() {
		return departmentID;
	}

	public void setDepartmentID(Long departmentID) {
		this.departmentID = departmentID;
	}

	public Long getDoctorID() {
		return doctorID;
	}

	public void setDoctorID(Long doctorID) {
		this.doctorID = doctorID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhn() {
		return phn;
	}

	public void setPhn(String phn) {
		this.phn = phn;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getSymp() {
		return symp;
	}

	public void setSymp(String symp) {
		this.symp = symp;
	}

	public String getAddr() {
		return addr;
	}

	public void setAddr(String addr) {
		this.addr = addr;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getApprovereject() {
		return approvereject;
	}

	public void setApprovereject(String approvereject) {
		this.approvereject = approvereject;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	@Column(name = "doctorID")
    private Long doctorID; //Fk doctor id

    @Column(name = "name")
    private String name;

    @Column(name = "email")
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

    @Column(name = "remarks")
    private String remarks;
}

