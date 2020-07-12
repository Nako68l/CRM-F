import {EmployeePosition} from "../enums/position.enum";
import {Gender} from "../enums/gender.enum";

export class Employee {
  fullName: string;
  position: EmployeePosition;
  birthday: Date;
  gender: Gender;
  contactInformation: string;
  salary: number;
  _id?: string;
  createdAt?: Date;
}
