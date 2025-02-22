import { createContext } from 'react';
// можно читать и изменять данные из контекста
const UserContext = createContext({
    user: '',
    setUser: () => {},
});

export default UserContext;
