import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleRegister(e) {
        e.preventDefault();
        console.log('Registering user...');
        console.log(name, email, password);

        setTimeout(() => {
            alert("User registered successfully!");

            // clear the form
            setName("");
            setEmail("");
            setPassword("");

            // redirect to login page
            navigate("/login");
        }, 1000);
    }

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold text-center">Register</h1>

            <form className="mt-8 space-y-6 max-w-sm mx-auto"
                onSubmit={handleRegister}
            >
                <input type="text" name="name" placeholder="Name" className="w-full p-2 border border-gray-300 rounded"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input type="email" name="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input type="password" name="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <input type="submit" value="Register" className="w-full p-2 bg-blue-500 text-white rounded cursor-pointer" />
            </form>
        </div>
    )
}

export default Register;