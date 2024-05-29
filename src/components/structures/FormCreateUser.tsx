import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../elements/FormField";
import { userFormSchema, UserFormType } from "@/libs/form-schema";
import { useForm } from "react-hook-form";
import ErrorMessage from "../elements/ErrorMessage";
import { Button } from "../elements/Button";
import { DATA_GENDER, DATA_STATUS } from "@/constants";
import { createUser } from "@/redux/slices/usersSlice";
import { useAppDispatch } from "@/hooks/useRedux";

const FormCreateUser = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<UserFormType>({
    resolver: zodResolver(userFormSchema),
  });

  const onSubmit = async (data: UserFormType) => {
    try {
      await dispatch(createUser(data)).unwrap();
      console.log("User created successfully:", data);
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <div>
          <FormField
            htmlFor="name"
            type="text"
            classNameLabel="font-medium"
            classNameInput="border-2 py-1 px-2"
            {...register("name")}
            name="name"
          >
            Name
          </FormField>
          {errors?.name && (
            <ErrorMessage title={errors?.name?.message || "Name is required"} />
          )}
        </div>
        <div>
          <FormField
            htmlFor="email"
            type="email"
            classNameLabel="font-medium"
            classNameInput="border-2 py-1 px-2"
            {...register("email")}
            name="email"
          >
            Email
          </FormField>
          {errors?.email && (
            <ErrorMessage
              title={errors?.email?.message || "Email is required"}
            />
          )}
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <label htmlFor="gender" className="font-medium">
              Gender
            </label>
            <select
              id="gender"
              className="border-2 py-1 px-2"
              {...register("gender")}
            >
              {DATA_GENDER.map((item) => (
                <option key={item} value={item}>
                  {item.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {errors?.gender && (
            <ErrorMessage
              title={errors?.gender?.message || "Gender is required"}
            />
          )}
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <label htmlFor="status" className="font-medium">
              Status
            </label>
            <select
              id="status"
              className="border-2 py-1 px-2"
              {...register("status")}
            >
              {/* <option value="">Select status</option> */}
              {DATA_STATUS.map((item) => (
                <option key={item} value={item}>
                  {item.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {errors?.status && (
            <ErrorMessage
              title={errors?.status?.message || "Status is required"}
            />
          )}
        </div>
        <div className="flex items-center justify-end gap-2 mt-4">
          <Button variant="danger">Cancel</Button>
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default FormCreateUser;
