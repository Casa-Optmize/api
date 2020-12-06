export interface ICreateUserRequestDTO {
  name: string;
  email: string;
  password: string;

  cep: string;
  address: string;
  city: string;
  state: string;
  neighborhood: string;
  marital_status: string;

  age: number;
  gender: string
}