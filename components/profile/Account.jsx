import React from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { profileSchema } from "../../schema/profileSchema";

const Account = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert(values.password);
        actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            address: "",
            job: "",
            bio: "",
        },

        onSubmit,
        validationSchema: profileSchema,
    });

    const inputs = [
        {
            name: "fullName",
            type: "text",
            placeholder: "Your Full Name",
        },
        {
            name: "email",
            type: "email",
            placeholder: "Your Email Address",
        },
        {
            name: "phoneNumber",
            type: "number",
            placeholder: "Your Phone Number",
        },
        {
            name: "address",
            type: "text",
            placeholder: "Your Address",
        },
        {
            name: "job",
            type: "text",
            placeholder: "Your Job",
        },
        {
            name: "bio",
            type: "text",
            placeholder: "Your Bio",
        },
    ];
    return (
        <>
            <Title addClass={"text-[40px]"}>Account Settings</Title>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 mt-[30px]" onSubmit={handleSubmit}>
                {inputs.map((input, index) => (
                    <Input
                        key={index}
                        {...input}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[input.name]}
                        errorMessage={errors[input.name]}
                        touched={touched[input.name]}
                    />
                ))}
                <button className="btn-primary w-fit !px-8 my-5 md:my-0" type="submit">
                    Update
                </button>
            </form>
        </>
    );
};

export default Account;