import { useState } from "react";
import TextComponent from "./TextComponent/TextComponent";
import IconAt from "../icons/Email";

const Signin = function ({ onSubmit }) {
    const [state, setState] = useState({
        email: "",
        password: "",
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(state);
    };

    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <TextComponent
                label="Почта"
                placeholder="Ваш email"
                name="email"
                type="email"
                icon={<IconAt size="0.8rem" />}
                withAsterisk
            />
            <TextComponent
                label="Пароль"
                placeholder="Ваш пароль"
                name="password"
                type="password"
                withAsterisk
            />
            <div>
                <button type="submit">Войти</button>
            </div>
        </form>
    );
};

export default Signin;
