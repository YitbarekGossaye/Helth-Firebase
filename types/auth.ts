export interface User {
    id: string;
    username: string;
    role: 'SystemAdmin' | 'HospitalAdmin' | 'Doctor' | 'Receptionist' | 'Patient';
  }