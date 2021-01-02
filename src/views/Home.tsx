import React from "react";
import { useRoleContext } from "../context/RoleContext";

export const Home: React.FC = () => {
  const { role } = useRoleContext();
  console.log(`Visiting Home page as ${role}`);

  return <p>This page is visible for everyone</p>;
};
