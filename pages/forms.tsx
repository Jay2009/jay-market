import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

// less code , better validation better errors (set, clear, display), have control over inputs, dont deal with events , easier inputs.

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
  });
  const onVaild = (data: LoginForm) => {
    console.log("its valid");
    reset();
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onVaild, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: " The username should be longer than 5 chars.",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
        minLength={5}
      />

      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
        className={`${
          Boolean(errors.email) ? "border-red-500 focus:border-red-500" : ""
        }`}
      />
      {errors.email?.message}

      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />

      <input type="submit" value="Create Account" />
    </form>
  );
}
