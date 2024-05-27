'use client';

import { useState } from "react";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/inputs/input";
import Button from "../../components/Button/Button";
import {FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

const RegisterForm = () => {    
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            name: "",
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
        <Heading title="Rejestracja do fizjoteki"/>
        <hr className="bg-slate-300 w-full h-px my-4"/>
        <Button
      outline
      label="Continue with Google"
        onClick={() => {}}
        />
   <hr className="bg-slate-300 w-full h-px" />
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
        label={isLoading ? "Loading..." : "Sing Up"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Already have an account?{" "}
        <Link className="underline" href="/login">
          Log in
        </Link>
      </p>
        </>
    )
}
export default RegisterForm;