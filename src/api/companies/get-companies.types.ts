export type Vacancy = {
  title: string;
  description: string;
  salary: string;
};

export type Company = {
  name: string;
  description: string;
  website: string;
  location: string;
  vacancy: Vacancy;
};
