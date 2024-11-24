import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
    title: string;
    description: string;
}

export const CreateForm = () => {
    const schema = yup.object().shape({
        title: yup.string().required("The title of the post is required"),
        description: yup.string().required("The description of the post is required"),
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}> 
            <input type="text" placeholder="Title" {...register("title")}/>
            <p>{errors.title?.message}</p>
            <input type="text" placeholder="Description" {...register("description")}/>
            <p>{errors.description?.message}</p>
            <input type="submit"/>
        </form>
    );
};
