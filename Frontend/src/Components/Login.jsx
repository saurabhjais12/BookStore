import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:4001/user/login", {
                email: data.email,
                password: data.password,
            });
            if (response.data) {
                alert("Login successful!");
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Login to Your Account
                </h2>
                <p className="text-sm text-center text-gray-600 mt-2">
                    Welcome back! Please enter your details.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    {/* Email Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className={`w-full px-4 py-2 mt-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none ${
                                errors.email ? "border-red-500" : ""
                            }`}
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className={`w-full px-4 py-2 mt-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none ${
                                errors.password ? "border-red-500" : ""
                            }`}
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Forgot Password */}
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <input
                                type="checkbox"
                                id="remember"
                                className="text-blue-500 focus:ring-blue-500 rounded"
                            />
                            <label
                                htmlFor="remember"
                                className="ml-2 text-sm text-gray-600"
                            >
                                Remember me
                            </label>
                        </div>
                        <a
                            href="#"
                            className="text-sm text-blue-500 hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>

                {/* Sign Up Link */}
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link to="/SignupForm" className="text-blue-500 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
