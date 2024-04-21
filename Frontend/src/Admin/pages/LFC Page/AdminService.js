import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/hospitals/";

export const listHospitals = () => {
  return axios.get(REST_API_BASE_URL);
};
export const CreateHospitals = (hospitals) => {
    return axios.post(REST_API_BASE_URL,hospitals);
  };

const REST_API_BASE_URL_HOSPITAL_EMAIL = "http://localhost:8080/api/hospitals/email/";
export const listHospitalEmail = (email) => {
  return axios.get(REST_API_BASE_URL_HOSPITAL_EMAIL + email);
};

const REST_API_BASE_URL_HOSPITAL_LIC = "http://localhost:8080/api/hospitals/license/";
export const listHospitalLicense = (license) => {
  return axios.get(REST_API_BASE_URL_HOSPITAL_LIC + license);
};

const REST_API_BASE_URL_HOSPITAL_PASS = "http://localhost:8080/api/hospitals/password/";
export const listHospitalPassword = (password) => {
  return axios.get(REST_API_BASE_URL_HOSPITAL_PASS + password);
};