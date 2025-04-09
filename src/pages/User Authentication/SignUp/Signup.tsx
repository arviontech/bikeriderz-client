import loginBG from "@/assets/hero-bg/vectorBg.jpg";
import logo from "@/assets/logo/bikeLogo3.png";
import { Tuser } from "@/types/Types";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../InputFields/InputField";
import { useSignUPMutation } from "@/redux/api/AuthApi/authApi";
import { toast } from "sonner";
import Lottie from "lottie-react";
import spinner from "@/assets/lottie/spinner.json";
const Signup = () => {
  const [signUP, { isLoading }] = useSignUPMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Tuser>();

  const onSubmit: SubmitHandler<Tuser> = async (data) => {
    const { name, email, password, phone, address, nidCardNo } = data;
    const newUser = {
      name,
      email,
      password,
      phone,
      address,
      nidCardNo,
      role: "user",
    };
    try {
      const result = await signUP(newUser).unwrap();
      console.log(result);

      if (result) {
        toast.success("SignUP is successfull");
      }
      navigate("/login");
    } catch (err) {
      toast.error("Failed to signUP");
      console.log(err);
    } finally {
      reset();
    }
  };

  // Form field configuration
  const fields = [
    { name: "name", placeholder: "Name" },
    { name: "password", placeholder: "Password", type: "password" },
    { name: "email", placeholder: "Your Email" },
    { name: "phone", placeholder: "Phone Number" },
    { name: "address", placeholder: "Type your full address" },
    { name: "nidCardNo", placeholder: "NID Card Number" },
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
      <div className="grid grid-cols-2 overflow-hidden lg:w-[900px] md:h-[660px] max-h-full md:w-[85%] w-[90%]  bg-white shadow-xl mx-auto mb-12">
        <div className="bg-[#ff950a]   p-8  md:col-span-1 col-span-full text-center flex flex-col items-center justify-center md:order-1 order-2">
          <h2 className="text-white font-semibold text-2xl pb-4">
            Welcome to BIKERIDERZ
          </h2>
          <p className="text-white  pb-8">
            your go-to platform for seamless bike rentals. Choose from a wide
            selection of top-quality bikes, book with ease, and get ready to
            embark on your next adventure. Whether you're exploring the city or
            hitting the trails, we've got the perfect ride for you!
          </p>
          <p className="border border-slate-50 w-full h-3[1px]"></p>
          <p className="text-white pt-9">Already have an account?</p>
          <Link to={"/login"}>
            <p className="text-white pt-2 underline">Login</p>
          </Link>
        </div>
        <div className="p-8 w-full md:col-span-1 col-span-full md:order-2 order-1">
          <h2 className="text-2xl font-bold pb-8">SIGN UP</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map(({ name, placeholder, type }) => (
              <InputField<Tuser>
                key={name}
                name={name as keyof Tuser}
                placeholder={placeholder}
                register={register}
                errorMessage={errors[name as keyof Tuser]?.message} //Bracket notation (errors[name as keyof Tuser]) is used to dynamically access an object's properties.
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
                Sign Up
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
