import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const SignupForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:4001/user/signup", {
                fullname: data.fullname,
                email: data.email,
                password: data.password,
            });
            if (response.data) {
                alert("Signup successful!");
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Create Your Account
                </h2>
                <p className="text-sm text-center text-gray-600 mt-2">
                    Sign up to start your journey!
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    {/* Full Name */}
                    <div className="mb-4">
                        <label
                            htmlFor="fullname"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                            {...register("fullname", { required: true })}
                        />
                    </div>

                    {/* Email */}
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
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                            {...register("email", { required: true })}
                        />
                    </div>

                    {/* Password */}
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
                            placeholder="Create a password"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                            {...register("password", { required: true })}
                        />
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="terms"
                            className="text-blue-500 focus:ring-blue-500 rounded"
                        />
                        <label
                            htmlFor="terms"
                            className="ml-2 text-sm text-gray-600"
                        >
                            I agree to the{" "}
                            <a href="#" className="text-blue-500 hover:underline">
                                Terms and Conditions
                            </a>
                        </label>
                    </div>

                    {/* Signup Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Already Have an Account */}
                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignupForm;
