export interface IStudentMark {
  admissionDate: string;
  admissionNumber: string;
  class: string;
  dateofBirth: string;
  email: string;
  firstName: string;
  gender: string;
  id: string;
  lastName: string;
  phone: string;
  picture: string;
  rollNumber: number;
  section: string;
  userId: string;
}

export interface IUser {
  fullName: string;
  id: string;
  role: string;
  picture:string,
  login:string
}

export type AuthType ="login"