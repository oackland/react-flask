import { jsx as _jsx } from "react/jsx-runtime";
import { useApiData } from "../useApiData";
import { createContext } from "react";
// Context for user profile data
export const UserProfileContext = createContext(null);
const UserProfileProvider = ({ children, token, // Token prop destructured
 }) => {
    const { data } = useApiData("/api/current_user", token); // Use token when calling useApiData
    return (_jsx(UserProfileContext.Provider, { value: data, children: children }));
};
export default UserProfileProvider;
