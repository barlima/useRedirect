import React from "react";
import { useRoleContext } from "../context/RoleContext";

export const Admin: React.FC = () => {
  const { role } = useRoleContext();
  console.log(`Visiting Admin page as ${role}`);

  return <p>This page is visible for admin only</p>;
};
