export type User = {
    readonly id?: string
    username: string
    password: string
    email: string
    first_name?: string
    last_name?: string
  }


export type Car = {
    id: number;
    make: string;
    model: string;
    year: number;
  }