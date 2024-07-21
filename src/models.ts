export enum accessOptions {
    administrator = "administrador",
    nmanager = "gerente",
    employee = "funcionario"
  }

  export type userType = {
    fullName: string;
    register: string | number;
    access: accessOptions;
    active: boolean; 

  }