import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  userSchema,
  UserSchemaType,
} from "~/modules/user/validation/userschema";
import { api } from "~/utils/api";

const register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserSchemaType>({ resolver: zodResolver(userSchema) });

  const createUserMutation = api.user.create.useMutation();

  const onSubmit = handleSubmit(async (values) => {
    await createUserMutation.mutateAsync(values);
  });

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={onSubmit}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("name")} />
      {errors.name && <span>This field is required</span>}
      <input
        defaultValue="test@mco.com"
        {...register("email", { required: true })}
      />
      {errors.email && <span>{errors.email.message}</span>}
      {
        <input
          type="password"
          {...register("password", { required: true, min: 5, max: 10 })}
        />
      }
      {errors.password && <span>{errors.password.message}</span>}

      <input type="submit" />
    </form>
  );
};

register.isPublic = "asd";
export default register;
