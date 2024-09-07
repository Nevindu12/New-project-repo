import React, { useState } from 'react';
import axios from 'axios';
import googleIcon from '/src/assets/google-icon.png';
import appleIcon from '/src/assets/apple-icon.png';
import facebookIcon from '/src/assets/facebook-icon.png';
import towTruck from '/src/assets/tow-truck.png';

function SignUp() {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        phone_number: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            // Make a POST request to the backend to save the user data
            const response = await axios.post('http://localhost:3000/signup', formData);

            if (response.status === 201) {
                setSuccessMessage('Signup successful! Welcome to the app.');
                setFormData({
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    phone_number: ''
                });
            }
        } catch (error) {
            setError('Signup failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-blue-700 p-8 rounded-lg shadow-lg w-full md:w-1/3">
                <h1 className="text-3xl font-bold text-white mb-6 text-center font-JejuHallasan underline tracking-wide">SIGN UP</h1>

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
                            placeholder="Name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-80 p-3 rounded-full border border-black focus:outline-none focus:border-blue-500"
                        />

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
                            placeholder="Email"
                            name="email"
                            type="email"
                            value={formData.email}
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

                        <input
                            placeholder="Phone Number"
                            name="phone_number"
                            type="text"
                            value={formData.phone_number}
                            onChange={handleChange}
                            required
                            className="w-80 p-3 rounded-full border border-black focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Submit button with loading state */}
                    <div className='flex justify-center'>
                        <input
                            type="submit"
                            value={loading ? "Signing Up..." : "SIGN UP"}
                            disabled={loading}
                            className={`w-40 py-3 ${loading ? "bg-gray-400" : "bg-yellow-400"} text-black font-bold rounded-lg hover:bg-yellow-500 transition duration-300`}
                        />
                    </div>
                </form>

                {/* Social login */}
                <div className="text-center my-6">
                    <p className="text-white font-jeju">OR</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="#"><img src={googleIcon} alt="Google" className="w-8 h-8" /></a>
                        <a href="#"><img src={appleIcon} alt="Apple" className="w-8 h-8" /></a>
                        <a href="#"><img src={facebookIcon} alt="Facebook" className="w-8 h-8" /></a>
                    </div>
                </div>

                <a className="block text-center text-white underline mt-6 font-jeju" href="/login">Already have an account? Login here</a>
            </div>

            <div className="hidden md:block md:w-1/3">
                <img src={towTruck} alt="Tow Truck" className="w-full object-contain" />
            </div>
        </div>
    );
}

export default SignUp;