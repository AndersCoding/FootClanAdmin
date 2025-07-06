import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

export type User = {
  id: number;
  name: string;
  email: string;
};

type UserContextType = {
  users: User[];
  fetchUsers: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = () => {
    api
      .get("/user")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, fetchUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUsers must be used within UserProvider");
  return context;
};
