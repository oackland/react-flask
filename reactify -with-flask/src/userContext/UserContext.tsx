// import React, { createContext, useContext, ReactNode, useState } from "react";
//
// interface User {
//   id: number;
//   username: string;
//   email: string;
//   //... other fields
// }
//
// interface UserContextProps {
//   user: User | null;
//   setUser: React.Dispatch<React.SetStateAction<User | null>>;
// }
//
// const UserContext = createContext<UserContextProps | undefined>(undefined);
//
// export const UserProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [user, setUser] = useState<User | null>(null);
//
//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
//
// export const useUser = (): UserContextProps => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// };
