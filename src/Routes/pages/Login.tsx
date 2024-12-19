import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import data from "@/data/data";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import validate from "@/validation/validate";
import z from "zod";
import Axios from "@/config/Axios";
import toast from "react-hot-toast";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof validate.loginValidation>>({
    resolver: zodResolver(validate.loginValidation),
  });
  const date = new Date();
  async function SubmitIt(values: z.infer<typeof validate.loginValidation>) {
    try {
      date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * 2);
      const response = await Axios.post("/auth/student", values);
      console.log(response);
      localStorage.setItem("userInfo", JSON.stringify(response.data.userInfo));
      document.cookie =
        "lms-student" +
        "=" +
        response.data?.jwt +
        ";" +
        "expires=" +
        date.toUTCString() +
        ";" +
        "path=/;";
      console.log(
        document.cookie
          .split(";")
          .find((value) => value.includes("lms-student"))
      );
      window.location.reload();
    } catch (err: any) {
      toast.error(`${err.response.data.message}`);
    }
  }
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <form
        className="border p-5 space-y-3 min-w-72 sm:min-w-96"
        onSubmit={handleSubmit(SubmitIt)}
      >
        <h2 className="relative bg-sky-600 text-white font-bold text-center teacher">
          Students
        </h2>
        <div className="font-bold text-xl text-sky-600 flex flex-col items-center">
          <Logo />
          Login
        </div>
        {data.LoginInputs.map((input, index) => (
          <div key={index}>
            <Input
              type={input.type}
              placeholder={input.placeholder}
              {...register(input.name)}
            />
            {errors[input.name] ? (
              <span className="text-red-700 ml-2 mt-2">
                {errors[input.name]?.message}
              </span>
            ) : (
              ""
            )}
          </div>
        ))}
        <div>
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? "loading" : "login"}
          </Button>
        </div>
        <p>
          have no account{" "}
          <Link
            to="/Authentaction/signup"
            className="text-sky-800 font-medium hover:underline"
          >
            Sign Up ?
          </Link>
        </p>
      </form>
    </div>
  );
}
export default Login;
