import React, { useState } from 'react';
import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [ages, setAges] = useState('');

    const usernameChangeHandler = (event) => {
        setUsernames(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAges(event.target.value);
    }
    
    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return (
        <Card className={styles.input}>        
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler}></input>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;