import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/User Api/userApi";
import { useAppSelector } from "@/redux/hook";
import usericon from "@/assets/icon/user.jpg";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { Tuser } from "@/types/Types";
import Lottie from "lottie-react";
import spinner from "@/assets/lottie/spinner.json";

const UserProfile = () => {
  const [updateProduct, { isLoading }] = useUpdateUserMutation();
  const { user } = useAppSelector((store) => store.auth);
  const id = user?._id;
  const { data: existingUser } = useGetSingleUserQuery(id);

  const { register, handleSubmit, reset } = useForm<Tuser>();

  const onSubmit: SubmitHandler<Tuser> = async (formData) => {
    const payload: Partial<Tuser> = {
      ...(formData.name && { name: formData.name }),
      ...(formData.email && { email: formData.email }),
      ...(formData.phone && { phone: formData.phone }),
      ...(formData.address && { address: formData.address }),
    };
    //The spread syntax (...) is used in your onSubmit function to conditionally include specific fields in the payload object  (i.e., only the fields the user filled in the form) are included in the update request. his method prevents such issues For example, if a user only wants to update their name and leaves the other fields blank, you don't want to accidentally clear the email, phone, or address fields in the database.
    try {
      const result = await updateProduct(payload).unwrap();
      console.log(result);

      if (result) {
        toast.success("Profile Info update is successfull");
      }
    } catch (err) {
      toast.error("Failed to update profile info");
      console.log(err);
    } finally {
      reset();
    }
  };

  // Form field configuration
  const fields = [
    { name: "name", placeholder: "Name", type: "text" },
    { name: "email", placeholder: "Your Email", type: "email" },
    { name: "phone", placeholder: "Phone Number", type: "tel" },
    { name: "address", placeholder: "Type your full address", type: "text" },
  ];

  return (
    <div className="mt-12 bg-white shadow-2xl xl:w-[800px] xl:h-[500px] lg:w-[650px] lg:h-[400px] md:w-[700px] sm:w-[380px] w-full  mx-auto flex md:flex-row flex-col items-center justify-center gap-12 p-8 overflow-auto">
      <div className="flex gap-12">
        <div>
          <img
            src={usericon}
            className="rounded-full w-32 h-32 object-cover object-center mb-8"
            alt=""
          />
          <p className="xl:text-lg text-base text-start pb-3 text-gray-600">
            Name: {existingUser?.data?.name}
          </p>
          <p className="xl:text-lg text-base text-start pb-3 text-gray-600">
            Email: {existingUser?.data?.email}
          </p>
          <p className="xl:text-lg text-base text-start pb-3 text-gray-600">
            Phone: {existingUser?.data?.phone}
          </p>
          <p className="xl:text-lg text-base text-start pb-3 text-gray-600">
            Address: {existingUser?.data?.address}
          </p>
        </div>
        <div className="w-[1px] bg-[#374462] h-[320px] md:block hidden"></div>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map(({ name, placeholder, type }) => (
            <div className="pb-6 " key={name}>
              <input
                placeholder={placeholder}
                type={type}
                defaultValue={existingUser ? existingUser[name] : ""} // Prepopulate with existing data
                className="border border-[#103690] focus:outline-none w-full h-12 px-3"
                {...register(name as "name" | "email" | "phone" | "address")}
              />
            </div>
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
              Update
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
