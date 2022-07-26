export interface LoginTypes {
  email: string;
  setEmail: (e: string) => void;
  password: string;
  setPassword: (e: string) => void;
  handleAdminLogin: any;
}

export interface ProtectedRouteTypes {
  children: any;
  adminLogin: boolean;
}
