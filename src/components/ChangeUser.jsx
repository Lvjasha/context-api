import UserContext from '../context/UserContext';
import { useContext } from 'react';

const ChangeUser = () => {
    const { user, setUser } = useContext(UserContext);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setUser(user);
        setUser('');
    };

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <input
                    placeholder="Enter text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <button type="submit" title="Submit">
                    Write User
                </button>
            </form>
        </>
    );
};

export default ChangeUser;
