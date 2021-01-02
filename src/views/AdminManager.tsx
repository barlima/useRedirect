import React from "react";
import { useRoleContext } from "../context/RoleContext";

export const AdminManager: React.FC = () => {
  const { role } = useRoleContext();
  console.log(`Visiting Manger&Admin page as ${role}`);

  return <p>This page is visible for manager and admin</p>;
};
