import {Position} from "../../../../CRM-B/src/enums/position.enum";
import {Gender} from "../../../../CRM-B/src/enums/gender.enum";

export class Employee {
  fullName: string;
  position: Position;
  birthday: Date;
  gender: Gender;
  contactInformation: string;
  salary: number;
  created_at?: Date;
}
