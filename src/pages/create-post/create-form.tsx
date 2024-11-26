import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";


interface FormData {
    title: string;
    description: string;
}

export const CreateForm = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("The title of the post is required"),
        description: yup.string().required("The description of the post is required").min(20).max(200),
    });

    const { register, handleSubmit, formState: {errors} } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const postsRef = collection(db, "posts");

    const onCreatePost = async (data: FormData) => {
        await addDoc(postsRef, {
        //    title: data.title,
        //    description: data.description, can be written as ...data
            ...data,
            username: user?.displayName,
            userId: user?.uid,
        });

        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <div className="space-y-2">
            <input type="text" placeholder="Title..." {...register("title")} className="border-2 border-black"/>
            <p className="text-red-600">{errors.title?.message}</p>
            <textarea placeholder="Description..." {...register("description")} className="border-2 border-black"/>
            <p className="text-red-600">{errors.description?.message}</p>
            <input type="submit" value="Create Post" className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer px-4 py-2 rounded"/>
            </div>
        </form>
    );
};
