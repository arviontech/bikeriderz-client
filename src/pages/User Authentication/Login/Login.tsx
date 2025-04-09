import loginBG from "@/assets/hero-bg/vectorBg.jpg";
import logo from "@/assets/logo/bikeLogo3.png";
import { Tuser } from "@/types/Types";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../InputFields/InputField";
import { toast } from "sonner";
import { useLogINMutation } from "@/redux/api/AuthApi/authApi";
import Lottie from "lottie-react";
import spinner from "@/assets/lottie/spinner.json";
import { useAppDispatch } from "@/redux/hook";
import { verifyToken } from "@/Utils/verifyToken";
import { setUser, TUser } from "@/redux/features/Auth/authSlice";

const Login = () => {
  const [login, { isLoading }] = useLogINMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Tuser>();

  const onSubmit: SubmitHandler<Tuser> = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const result = await login(userInfo).unwrap();
      const user = verifyToken(result?.token) as TUser;
      dispatch(setUser({ user: user, token: result?.token }));

      if (result) {
        toast.success("Login is successfull");
      }
      navigate("/");
    } catch (err) {
      toast.error("Failed to login");
      console.log(err);
    } finally {
      reset();
    }
  };

  // Form field configuration
  const fields = [
    { name: "email", placeholder: "Your Email" },
    { name: "password", placeholder: "Password", type: "password" },
  ];
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${loginBG})`,
      }}
    >
      <Link to={"/"}>
        <div className="flex items-center justify-center gap-1 md:py-12 py-8 ">
          <img className=" xl:w-[60px] w-[40px] pt-1 " src={logo} alt="logo" />
          <span className=" xl:text-4xl text-2xl   font-bold">
            BIKE<span className="text-[#ff950a]">RIDERZ</span>
          </span>
        </div>
      </Link>
      <div className="grid grid-cols-2 lg:w-[900px] h-[700px] md:w-[92%] w-[90%]  bg-white shadow-xl mx-auto mb-12">
        <div className="bg-[#ff950a]   p-8  md:col-span-1 col-span-full text-center flex flex-col items-center justify-center md:order-1 order-2">
          <h2 className="text-white font-semibold text-2xl pb-4">
            Welcome to BIKERIDERZ
          </h2>
          <p className="text-white  pb-8">
            Bikeriderz Rental is a premium bike rental service offering a wide
            selection of high-performance bikes for short or long-term rentals.
            Whether you're looking for adventure, commuting, or a weekend ride,
            Bikeriderz provides flexible booking options, competitive pricing,
            and top-notch customer service. Rent your dream bike with ease and
            hit the road in style!
          </p>
          <p className="border border-slate-50 w-full h-3[1px]"></p>
          <p className="text-white pt-9">New to BikeRiderz?</p>
          <Link to={"/signup"}>
            <p className="text-white pt-2 underline">SignUp</p>
          </Link>
          <p className="text-white pt-8">Admin Email: admin@gmail.com</p>
          <p className="text-white pt-2">Admin Password: 1234</p>
        </div>
        <div className="px-8 py-24 w-full md:col-span-1 col-span-full md:order-2 order-1">
          <h2 className="text-2xl font-bold pb-8">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map(({ name, placeholder, type }) => (
              <InputField<Tuser>
                key={name}
                name={name as keyof Tuser}
                placeholder={placeholder}
                register={register}
                errorMessage={errors[name as keyof Tuser]?.message}
                type={type || "text"}
              />
            ))}
            {isLoading ? (
              <div className="w-full border border-[#ff950a] shadow-xl mt-4 flex items-center justify-center h-16">
                <Lottie animationData={spinner} loop={true} />
              </div>
            ) : (
              <button
                type="submit"
                className="w-full bg-[#ff950a] text-white h-12 mt-4 text-xl"
              >
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
