import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { addUSer } from "../services/user";
import { userSchema } from "../validation/userschema";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(userSchema)
    .mutation(({ input }) => {
      return addUSer(input);
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
