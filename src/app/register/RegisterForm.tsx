"use client";

import { useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/inputs/input";
import Button from "../../components/Button/Button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import { signIn } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {    
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const router = useRouter();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios
            .post("/api/register", data)
            .then(() => {
                toast.success("Account created");

                signIn("credentials", {
                    email: data.email,
                    password: data.password,
                    redirect: false,
                }).then((callback) => {
                    setIsLoading(false);

                    if (callback?.ok) {
                        router.push("/login");
                        router.refresh();
                        toast.success("Logged in");
                    }

                    if (callback?.error) {
                        console.log(callback.error);
                        toast.error(callback.error);
                    }
                });
            })
            .catch((error) => {
                setIsLoading(false);
                if (error.response && error.response.data && error.response.data.message) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("Something went wrong");
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <>
            <ToastContainer />
            <Heading title="Rejestracja do fizjoteki" />
            <hr className="bg-slate-300 w-full h-px my-4" />
            <Button
                outline
                label="Continue with Google"
                onClick={() => {}}
            />
            <hr className="bg-slate-300 w-full h-px" />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="password"
            />
            <Button
                label={isLoading ? "Loading..." : "Sign Up"}
                onClick={handleSubmit(onSubmit)}
            />
            <p className="text-sm">
                Already have an account?{" "}
                <Link className="underline" href="/login">
                    Log in
                </Link>
            </p>
        </>
    );
}

export default RegisterForm;
