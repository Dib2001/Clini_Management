import axios from "axios";

const REST_API_BASE_URL_LIST_HOSPITAL_CREATE = "http://localhost:8080/api/hospitals/";
export const listHospitals = () => {
  return axios.get(REST_API_BASE_URL_LIST_HOSPITAL_CREATE);
};
export const CreateHospitals = (hospitals) => {
  return axios.post(REST_API_BASE_URL_LIST_HOSPITAL_CREATE, hospitals);
};

const REST_API_BASE_URL_HOSPITAL_Login = "http://localhost:8080/api/hospitals/login/";
export const HospitalLogin = (email, password) => {
  return axios.post(REST_API_BASE_URL_HOSPITAL_Login, email, password);
};
const REST_API_BASE_URL_LIST_HOSPITAL_EMAIL = "http://localhost:8080/api/hospitals/email/";
export const HospitalEmail = (email) => {
  return axios.get(REST_API_BASE_URL_LIST_HOSPITAL_EMAIL + email);
};
const REST_API_BASE_URL_LIST_HOSPITAL_LIC = "http://localhost:8080/api/hospitals/license/";
export const HospitalLicense = (license) => {
  return axios.get(REST_API_BASE_URL_LIST_HOSPITAL_LIC + license);
};
const REST_API_BASE_URL_LIST_HOSPITAL_Id = "http://localhost:8080/api/hospitals/id/";
export const HospitalId = (id) => {
  return axios.get(REST_API_BASE_URL_LIST_HOSPITAL_Id + id);
};
export const HospitalUpdate = (id, data) => {
  return axios.put(REST_API_BASE_URL_LIST_HOSPITAL_Id + id, data);
};


const REST_API_BASE_URL_LIST_PATIENT_CREATE = "http://localhost:8080/api/hospitals/patients/";
export const listPatients = () => {
  return axios.get(REST_API_BASE_URL_LIST_PATIENT_CREATE);
};
export const CreatePatients = (patients) => {
  return axios.post(REST_API_BASE_URL_LIST_PATIENT_CREATE, patients);
};
export const PatientsId = (ID) => {
  return axios.get(REST_API_BASE_URL_LIST_PATIENT_CREATE+ID);
};
export const PatientsUpdateId = (ID, data) => {
  return axios.put(REST_API_BASE_URL_LIST_PATIENT_CREATE+ID, data);
};
export const PatientsDeleteId = (ID) => {
  return axios.delete(REST_API_BASE_URL_LIST_PATIENT_CREATE+ID);
};


const REST_API_BASE_URL_LIST_DOCTOR_CREATE = "http://localhost:8080/api/hospitals/doctors/";
export const listDoctors = () => {
  return axios.get(REST_API_BASE_URL_LIST_DOCTOR_CREATE);
};
export const CreateDoctors = (doctors) => {
  return axios.post(REST_API_BASE_URL_LIST_DOCTOR_CREATE, doctors);
};
export const DoctorsId = (ID) => {
  return axios.get(REST_API_BASE_URL_LIST_DOCTOR_CREATE+ID);
};
const REST_API_BASE_URL_LIST_DOCTOR_Name = "http://localhost:8080/api/hospitals/doctors/name/";
export const DoctorsName = (name) => {
  return axios.get(REST_API_BASE_URL_LIST_DOCTOR_Name + name);
};
const REST_API_BASE_URL_LIST_DOCTOR_ID = "http://localhost:8080/api/hospitals/doctors/";
export const DocotrDeleteId = (ID) => {
  return axios.delete(REST_API_BASE_URL_LIST_DOCTOR_ID+ID);
};


const REST_API_BASE_URL_LIST_DEPARTMENT_CREATE = "http://localhost:8080/api/hospitals/department/";
export const listDepartments= () => {
  return axios.get(REST_API_BASE_URL_LIST_DEPARTMENT_CREATE);
};
export const CreateDepartments = (department) => {
  return axios.post(REST_API_BASE_URL_LIST_DEPARTMENT_CREATE, department);
};
export const DepartmentsId = (ID) => {
  return axios.get(REST_API_BASE_URL_LIST_DEPARTMENT_CREATE+ID);
};
const REST_API_BASE_URL_LIST_DEPARTMENT_Name = "http://localhost:8080/api/hospitals/department/name/";
export const DepartmentsName = (name) => {
  return axios.get(REST_API_BASE_URL_LIST_DEPARTMENT_Name + name);
};

const RESt_API_BASE_URL_LIST_MEDICINE_CREATE = "http://localhost:8080/api/hospitals/medicine/";
export const listMedicines= () => {
  return axios.get(RESt_API_BASE_URL_LIST_MEDICINE_CREATE);
};
export const CreateMedicine = (medicine) => {
  return axios.post(RESt_API_BASE_URL_LIST_MEDICINE_CREATE, medicine);
};