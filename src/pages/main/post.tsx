import { Post as IPost } from "./main";

interface Props {
    post: IPost;
}

export const Post = (props: Props) => {
    const { post } = props;
    return (
        <div className="space-y-2 border border-black">
            <div>
                <h1 className="font-bold text-xl"> { post.title } </h1>
            </div>
            <div>
                <h1> { post.description } </h1>
            </div>
            <div>
                <h1 className="text-xs"> @{ post.username } </h1>
            </div>
        </div>
    );
};
