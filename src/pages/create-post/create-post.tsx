import { CreateForm } from "./create-form";

export const CreatePost = () => {
    return (
        <div className="py-5">
            Create a Post!
            <div className="py-5">
                { <CreateForm /> }
            </div>
        </div>
    );
};
