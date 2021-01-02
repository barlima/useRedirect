import React, { useContext, useState } from "react";
import { Role } from "../utils/types";

interface IUserRole {
  role: Role;
  setRole: (role: Role) => void;
}

const RoleContext = React.createContext<IUserRole>({
  role: Role.USER,
  setRole: () => {}
});

export const RoleProvider: React.FC = ({ children }) => {
  const [role, setRole] = useState<Role>(Role.USER);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRoleContext = () => useContext(RoleContext);
