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
                label="Name"
                placeholder="Your name"
                name="name"
                withAsterisk
            />
            <TextComponent
                label="Nic"
                placeholder="Your nicname"
                name="nic"
                withAsterisk
            />
            <TextComponent
                label="Email"
                placeholder="Your email"
                name="email"
                type="email"
                icon={<IconAt size="0.8rem" />}
                withAsterisk
            />
            <TextComponent
                label="Password"
                placeholder="Your password"
                name="password"
                type="password"
                withAsterisk
            />
            <TextComponent
                label="Retry password"
                placeholder="Your password again"
                name="retry_password"
                type="password"
                withAsterisk
            />
            <div>
                <label>
                    Male <input name="sex" type="radio" value="Male" />
                </label>
                <label>
                    Female <input name="sex" type="radio" value="Female" />
                </label>
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Signup;
