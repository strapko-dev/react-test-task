export interface HeaderLink {
  name: string;
  icon: React.ReactElement;
  href: string;
}

export type Users = User[];

export interface User {
  name: string;
  email: string;
  permissions: string[];
  image: string;
}

export interface Permission {
  value: string;
  label: string;
}
