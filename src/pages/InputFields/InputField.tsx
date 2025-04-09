import { useForm, FieldValues, Path } from "react-hook-form";

//T: This is a placeholder for a type that will be provided when the InputField component is used. FieldValues is a type that represents the shape of the form data. It allows T to be any object type that react-hook-form can handle. By using <T extends FieldValues>, the InputField component can be used with forms of different structures, making it more flexible and reusable.
interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  placeholder: string;
  register: ReturnType<typeof useForm<T>>["register"]; //This gets the type of the register function from useForm. register is used to register the input field in the form and apply validation rules.
  errorMessage?: string;
  type?: string;
}

const InputField = <T extends FieldValues>({
  name,
  placeholder,
  register,
  errorMessage,
  type = "text",
}: InputFieldProps<T>) => {
  return (
    <div className="pb-6">
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { required: `${name} is required` })}
        className="border border-[#ff950a] focus:outline-none w-full h-12 px-3"
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
