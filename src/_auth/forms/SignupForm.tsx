import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { SignupValidation } from "@/lib/validation";
import { z } from "zod";
import {Link} from "react-router-dom"
import { createUserAccount } from "@/lib/appwrite/api";

const SignupForm = () => {
  const isLoading = false
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = await createUserAccount(values)
    console.log(newUser);
  }

  return (
    <Form {...form}>
      <div className="flex-center flex-col">
        <img src="/assets/images/logo.svg" alt="logo" />

        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Create a New Account
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2 mb-4">
          Please enter your details to use Snapgram!
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (            
            <FormItem className="flex flex-col">
              <div className="flex items-center">
                <FormLabel className="shad-form_label mr-4 w-20">
                  Fullname
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="text-black font-bold py-2 px-4 rounded"
                    placeholder="Enter Name here"
                    {...field}
                  />
                </FormControl>

                
              </div>
              <FormMessage className="text-red mt-2 ml-24" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <div className="flex items-center">
                <FormLabel className="shad-form_label mr-4 w-20">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="text-black font-bold py-2 px-4 rounded"
                    placeholder="Enter Username here"
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage className="text-red mt-2 ml-24" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <div className="flex items-center">
                <FormLabel className="shad-form_label mr-4 w-20">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="text-black font-bold py-2 px-4 rounded"
                    placeholder="Enter Email here"
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage className="text-red mt-2 ml-24" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <div className="flex items-center">
                <FormLabel className="shad-form_label mr-4 w-20">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="text-black font-bold py-2 px-4 rounded"
                    placeholder="Enter Password here"
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage className="text-red mt-2 ml-24" />
            </FormItem>
          )}
        />

        <div className="flex justify-center items-center">
          <Button
            // className="bg-white hover:bg-blue-300  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            className="shad-button_primary text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded"
            type="submit"
          >
            {isLoading ? (
              <div className="flex-center gap-2">Loading...</div>
            ) : "Sign up"}
          </Button>


        </div>

        <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?
            <Link
              to="/sign-in"
              className="text-primary-500 font-bold  ml-3">
              Log in
            </Link>
          </p>
      </form>
    </Form>
  );
};

export default SignupForm;
