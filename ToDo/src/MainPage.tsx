import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";

interface MainPageProps {
    isAuthorized: boolean;
    setIsAuthorized: Dispatch<SetStateAction<boolean>>
}

export const MainPage = ({ isAuthorized, setIsAuthorized }: MainPageProps) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setIsAuthorized(true);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    if (!isAuthorized) {
        return (
            <form onSubmit={handleSubmit}>
                <label>
                    Login:
                    <input type="text" onChange={handleChange} />
                </label>
                <label>
                    Password:
                    <input type="password" />
                </label>
                <button type="submit">Log In</button>
            </form>
        )
    }

    return <h1>Hello {username}</h1>;
}