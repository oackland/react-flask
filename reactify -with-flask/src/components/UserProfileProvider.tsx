import React from "react";
import { useApiData } from "../useApiData";
import { createContext } from "react";

type User = {
  id: number;
  username: string;
  email: string;
};

// Context for user profile data
export const UserProfileContext = createContext<User | null>(null);

interface UserProfileProviderProps {
  token: string; // Token prop added
  children: React.ReactNode;
}

const UserProfileProvider: React.FC<UserProfileProviderProps> = ({
  children,
  token, // Token prop destructured
}) => {
  const { data } = useApiData<User>("/api/current_user", token); // Use token when calling useApiData

  return (
    <UserProfileContext.Provider value={data}>
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileProvider;
