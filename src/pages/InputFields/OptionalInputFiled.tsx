import { useForm, FieldValues, Path } from "react-hook-form";

//<T extends FieldValues>: Makes the component generic, allowing it to accept any form data structure.
//defaultValue?: T[keyof T]: Allows passing in any type of default value for the input, such as string, number, boolean, or array
interface InputFieldProps<T extends FieldValues> {
  name: Path<T>; //Path<T> ensures that the name corresponds to a valid key in the form's type (TBike). It prevents errors by ensuring that the field names passed to register are valid according to the form's schema (T).
  label: string;
  placeholder: string;
  register: ReturnType<typeof useForm<T>>["register"];
  type?: string;
  defaultValue?: T[keyof T]; // Update the type to allow any type
}

const OptionalInputField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  register,
  type = "text",
  defaultValue,
}: InputFieldProps<T>) => {
  if (Array.isArray(defaultValue)) {
    // Handle array of strings (image) Array.isArray(defaultValue): Checks if defaultValue is an array.
    return (
      <div className="pb-6 relative">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          {label}
        </label>
        {defaultValue.map((image: string, index: number) => (
          <input
            key={index}
            type="text"
            defaultValue={image}
            placeholder={placeholder}
            {...register(`${name}.${index}` as Path<T>)} // Use as Path<T> type assertion. register(${name}.${index}): Ensures each input is registered with a unique name (like images.0, images.1, etc.), allowing the form to track each input separately. If you pass defaultValue = ["image1.jpg", "image2.jpg"], it will render two input fields:
            className="border border-[#ff950a] focus:outline-none w-full h-12 px-3"
          />
        ))}
      </div>
    );
  } else if (typeof defaultValue === "boolean") {
    // Handle boolean value (isAvailable)
    return (
      <div className="pb-6 relative">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          {label}
        </label>

        <select
          defaultValue={defaultValue ? "true" : "false"}
          {...register(name as Path<T>)}
          className="border border-[#ff950a] focus:outline-none w-full h-12 px-3"
        >
          <option value="true">True</option>

          <option value="false">False</option>
        </select>
      </div>
    );
  } else {
    // Handle string and number types
    return (
      <div className="pb-6 relative">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          {label}
        </label>
        <input
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...register(name as Path<T>)}
          className="border border-[#ff950a] focus:outline-none w-full h-12 px-3"
        />
      </div>
    );
  }
};

export default OptionalInputField;
