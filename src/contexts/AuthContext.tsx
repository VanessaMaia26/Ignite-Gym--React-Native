import { UserDTO } from "@dtos/UserDTO";
import { createContext, ReactNode, useState } from "react";

export type AuthContextDataProps = {
    user: UserDTO;
    setUser: (user: UserDTO) => void;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({
    id: '1',
    name: 'Vanessa',
    email: 'vanessa@email.com',
    avatar: 'vanessa.png'
  });

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
          </AuthContext.Provider>
    )
}