const Login = () => {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold text-center">Login</h1>

            <form className="mt-8 space-y-6 max-w-sm mx-auto">
                <input type="email" name="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" required />
                <input type="password" name="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded" required />
                <input type="submit" value="Login" className="w-full p-2 bg-blue-500 text-white rounded cursor-pointer" />
            </form>
        </div>
    )
}

export default Login;