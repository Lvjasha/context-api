import { useContext } from 'react';
import UserContext from '../context/UserContext';

const UserInfo = () => {
    const { user, setUser } = useContext(UserContext);

    return <h1>{user}</h1>;
};

export default UserInfo;
