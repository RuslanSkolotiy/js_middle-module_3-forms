import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import TextComponent from "./components/TextComponent/TextComponent";
import IconAt from "./icons/Email";

function App() {
    const handleSigninSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="App">
            <h2>Signin form</h2>
            <Signin onSubmit={handleSigninSubmit} />
            <h2>Signup form</h2>
            <Signup onSubmit={handleSigninSubmit} />
            <h2>Example TextComponent</h2>
            <TextComponent
                label="Your email"
                placeholder="Your email"
                description="description"
                error="Some error"
                disabled={false}
                withAsterisk
                variant="filled"
                radius="xs"
                size="xs"
                icon={<IconAt size="0.8rem" />}
            />
        </div>
    );
}

export default App;
