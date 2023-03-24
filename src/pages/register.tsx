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

  const comboClass = `h-[56px] w-full pl-[.9rem] outline-none my-[.5rem] rounded-[12px]`

  return (
    <section className="flex justify-center items-center h-screen w-full sunset z-10">
        <div className="md:my-5 md:w-[35%] items-center pt-[1rem] w-[60%] relative">
          <div>
            <h2 className="text-center text-white text-4xl">Sign Up</h2>
          </div>
            <form 
                onSubmit={onSubmit} 
                className="flex flex-col z-40"
              >
              {/* register your input into the hook by invoking the "register" function */}

              {/* ======> Name <====== */}
              <label
                className="text-white pl-[.4rem] text-base mb-[.2rem]"
              >
                Name</label>
              <input 
                className={comboClass}
                placeholder="Enter Name"
                {...register("name")} 
              />
              {errors.name && <span>This field is required</span>}

              {/* ======> Email <====== */}
              <label
                className="text-white pl-[.4rem] text-base mb-[.2rem]"
              >
                Email</label>
              <input
                className={comboClass}
                placeholder="Enter Email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-[#ff0000]">{errors.email.message}</span>}

              {/* ======> Password <====== */}
              <label
                className="text-white pl-[.4rem] text-base mb-[.2rem]"
              >
                Password</label>
              {
                <input
                  className={comboClass}
                  placeholder="Enter Password"
                  type="password"
                  {...register("password", { required: true, min: 5, max: 10 })}
                />
              }
              {errors.password && <span>{errors.password.message}</span>}

              <button 
                className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white transition hover:bg-white/20 mt-[.9rem]"
                type="submit"
              >
                Submit
              </button>
            </form>
            <a
              className="absolute mt-[1.1rem] left-[1rem] text-white hover:bg-white/20 transition-all duration-[300ms] px-[.3rem] py-[.2rem] hover:rounded-[12px]"
              href="http://localhost:3000/"
            >
              Home
            </a>
      </div>
    </section>
  );
};

register.isPublic = "asd";
export default register;
