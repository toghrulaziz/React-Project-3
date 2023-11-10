import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function ReactTask3({ usersArray, setUsersArray }) {

    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
    });

    const handleInputChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    const handleAddUser = () => {
        setUsersArray([...usersArray, newUser]);
        setNewUser({ name: '', email: '' });
    };

    const handleDeleteUser = (index) => {
        const updatedUsersArray = [...usersArray];
        updatedUsersArray.splice(index, 1);
        setUsersArray(updatedUsersArray);
    };

    const handleEditUser = (index) => {
        const editedUser = usersArray[index];

        const newName = prompt('Enter new name:', editedUser.name);
        const newEmail = prompt('Enter new email:', editedUser.email);

        const updatedUser = { ...editedUser, name: newName, email: newEmail };

        const updatedUsersArray = [...usersArray];
        updatedUsersArray[index] = updatedUser;
        setUsersArray(updatedUsersArray);
    };

    return (
        <div className="ReactTask3">
            <ul>
                {usersArray.map((item, index) => (
                    <div key={index}>
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                        <button onClick={() => handleEditUser(index)}>Edit</button>
                        <button onClick={() => handleDeleteUser(index)}>Delete</button>
                    </div>
                ))}
            </ul>

            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={handleInputChange}
                />
                <button type="button" onClick={handleAddUser}>
                    Add User
                </button>
            </form>
        </div>
    );
}

export default ReactTask3;