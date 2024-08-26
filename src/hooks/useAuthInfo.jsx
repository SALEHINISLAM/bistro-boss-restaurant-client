import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const useAuthInfo = () => {
    const auth=useContext(AuthContext)
    return auth

};

export default useAuthInfo;