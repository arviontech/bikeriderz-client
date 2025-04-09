import bg from "@/assets/hero-bg/vectorBg.jpg";
import contactbg2 from "@/assets/contact/contactbg2.jpg";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
type QusInput = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<QusInput>();
  const onSubmit: SubmitHandler<QusInput> = async (data) => {
    try {
      console.log(data);

      if (data) {
        toast.success("Your message is submitted successfully");
      }
    } catch (err) {
      toast.error("Failed to send message");
      console.log(err);
    } finally {
      reset();
    }
  };
  return (
    <div className="relative mb-32">
      <div className="grid grid-cols-2 w-full relative">
        <div className="relative w-full md:col-span-1 col-span-2">
          <img
            className="w-full lg:h-[660px] h-[670px] object-cover object-center"
            src={bg}
            alt=""
          />
          <div className="absolute inset-0 flex justify-center  pt-20 xl:pr-12 lg:pr-20 pr-10 lg:pl-0 pl-1">
            <div className="space-y-4 xl:pl-0 md:pl-4 lg:w-[410px] w-full md:px-0 px-3">
              <div className="flex gap-3 items-center">
                <span className="bg-[#ff950a] w-2 xl:h-6 h-5"></span>
                <p className="xl:text-xl text-lg font-bold">GET IN TOUCH</p>
              </div>
              <p className="xl:text-4xl lg:text-3xl text-2xl font-bold leading-none">
                Contact us anytime
              </p>
              <p className="lg:text-base text-sm">
                We're here to assist you with any inquiries or support you need
                for your BikeRiderz experience. Feel free to reach out anytime!
              </p>
            </div>
          </div>
          <div className="absolute inset-0 lg:flex lg:justify-center  lg:pt-72 pt-64 px-5 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-7 py-4">
                <div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-0">
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true })}
                    className="w-full lg:mb-0 mb-7 h-12 pl-4 border border-[#fa8e00]"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("email", { required: true })}
                    className="w-full h-12 pl-4 border border-[#fa8e00]"
                  />
                </div>

                <textarea
                  placeholder="Type Your Message Here"
                  {...register("message", { required: true })}
                  className="w-full h-32 pl-4 border border-[#fa8e00] pt-2 "
                />
              </div>
              <button
                type="submit"
                className="flex text-lg items-center justify-center bg-[#ffa633] text-white w-[180px] h-14  p-3  mt-4 md:ml-0  relative group overflow-hidden "
              >
                <span className="relative z-10">Submit Now</span>
                <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
              </button>
            </form>
          </div>
        </div>
        <div className="col-span-1 md:block hidden">
          <img
            src={contactbg2}
            className="w-full lg:h-[660px] h-[670px] object-cover object-center"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
