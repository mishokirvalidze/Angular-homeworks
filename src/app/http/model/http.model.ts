export interface Iemployees {
  name: string;
  age: number;
  salary: number;
}

export interface Iemployee extends Iemployees {
  id: string;
}
