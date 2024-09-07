import React, { useState } from 'react';
import axios from 'axios';
import towTruck from '/src/assets/tow-truck.png';

const login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setSuccessMessage('');
        setError('');

        try {
            const response = await axios.post('http://localhost:3000/login', formData);

            if (response.status === 201) {
                setSuccessMessage(`Welcome, ${response.data.naming}!`);
                // Redirect to home page or perform other actions on successful login
            }
        } catch (error) {
            setError('Login failed. Please check your username and password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-blue-700 p-8 rounded-lg shadow-lg w-full md:w-1/3">
                <h1 className="text-3xl font-bold text-white mb-6 text-center font-JejuHallasan underline tracking-wide">LOGIN</h1>

                {/* Success message */}
                {successMessage && (
                    <div className="bg-green-200 text-green-800 p-3 rounded-md mb-4 text-center">
                        {successMessage}
                    </div>
                )}

                {/* Error message */}
                {error && (
                    <div className="bg-red-200 text-red-800 p-3 rounded-md mb-4 text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col items-center space-y-4">
                        <input
                            placeholder="UserName"
                            name="username"
                            type="text"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="w-80 p-3 rounded-full border border-black focus:outline-none focus:border-blue-500"
                        />

                        <input
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-80 p-3 rounded-full border border-black focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Submit button with loading state */}
                    <div className='flex justify-center'>
                        <input
                            type="submit"
                            value={loading ? "Logging In..." : "LOGIN"}
                            disabled={loading}
                            className={`w-40 py-3 ${loading ? "bg-gray-400" : "bg-yellow-400"} text-black font-bold rounded-lg hover:bg-yellow-500 transition duration-300`}
                        />
                    </div>
                </form>

                <a className="block text-center text-white underline mt-6 font-jeju" href="/signup">Don't have an account? Sign Up here</a>
            </div>

            <div className="hidden md:block md:w-1/3">
                <img src={towTruck} alt="Tow Truck" className="w-full object-contain" />
            </div>
        </div>
    );
};

export default login;