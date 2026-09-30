export interface IManager {
  _id?: string;
  name: string;
  phone?: string;
  picture?: string;
  description?: string;
}

export interface CreateManagerFormValues {
  name: string;
  phone?: string;
  description?: string;
  picture?: File;
}
