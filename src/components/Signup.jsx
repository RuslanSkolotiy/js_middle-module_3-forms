import { useState } from "react";
import TextComponent from "./TextComponent/TextComponent";
import IconAt from "../icons/Email";

const Signup = function ({ onSubmit }) {
    const [state, setState] = useState({
        name: "",
        nic: "",
        email: "",
        password: "",
        sex: "",
        retry_password: "",
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
                label="Имя"
                placeholder="Ваше имя"
                name="name"
                withAsterisk
            />
            <TextComponent
                label="Ник"
                placeholder="Ваш никнейм"
                name="nic"
                withAsterisk
            />
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
            <TextComponent
                label="Повторить пароль"
                placeholder="Ваш пароль еще раз"
                name="retry_password"
                type="password"
                withAsterisk
            />
            <div>
                <div>Пол</div>
                <label>
                    Male <input name="sex" type="radio" value="Male" />
                </label>
                <label>
                    Female <input name="sex" type="radio" value="Female" />
                </label>
            </div>

            <div>
                <button type="submit">Зарегестрироваться</button>
            </div>
        </form>
    );
};

export default Signup;
