'use client';

import { useState } from "react";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/inputs/input";
import Button from "../../components/Button/Button";
import {FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

const   LoginForm = () => {    
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        },
});

const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
}

    return (
        <>
        <Heading title="Logowanie do fizjoteki"/>
        <hr className="bg-slate-300 w-full h-px my-4"/>
        <Button
      outline
      label="Continue with Google"
        onClick={() => {}}
        />
   <hr className="bg-slate-300 w-full h-px" />
      <hr className="bg-slate-300 w-full h-px" />
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
        label={isLoading ? "Loading..." : "Sing Up"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Don not have an account?{" "}
        <Link className="underline" href="/register">
        Sign Up
        </Link>
      </p>
        </>
    )
}
export default LoginForm;