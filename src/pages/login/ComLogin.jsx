import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const ComLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Updated to useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/company/login', {
                email,
                password
            });
            const { token } = response.data;
            // Store the token in cookies
            Cookies.set('auth_token', token, { expires: 7 });

            // Redirect to the company info page or dashboard
            navigate('/'); // Updated to use navigate
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <div className="bg-[#EFAE8D]">
            <div className="login-container container mx-auto py-32">
                <div className="flex justify-around">
                    <div className="form-container w-full">
                        <form
                            onSubmit={handleLogin}
                            className="space-y-4 bg-white rounded-xl p-10 w-11/12"
                        >
                            <div className="login-title text-center">
                                <h1 className="text-4xl font-bold">Sign In</h1>
                                <p className="text-2xl py-5">
                                    Hey, Enter Your Company Credential <br />for Sign in
                                </p>
                            </div>

                            <div className="pb-2 pt-1">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                                    placeholder="Enter Email Address"
                                    required
                                />
                            </div>

                            <div className="mb-5">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-2 py-4 px-6 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl border-2"
                                    placeholder="Enter Password"
                                    required
                                />
                            </div>

                            {error && <div className="text-red-500">{error}</div>}

                            <div className="text-lg py-5 flex justify-between">
                                <div className="register">
                                    <span>Don&apos;t have an account yet? </span>
                                    <Link className="text-blue-600 font-bold" to="/comRegistration">Register Now!</Link>
                                </div>
                                <div className="forget">
                                    <p className="font-bold text-blue-600">Forget password?</p>
                                </div>
                            </div>

                            <div className="submit-button mx-auto text-center">
                                <button className="btn btn-wide btn-btn-outline btn-primary text-2xl" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="image-container w-full justify-items-center">
                        <div className="w-11/12">
                            <img
                                src="/src/assets/loginLogo/image.png"
                                alt="NO Image Found..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComLogin;
