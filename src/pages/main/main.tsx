import {getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Post } from "./post";

export interface Post {
    id: string;
    description: string;
    title: string;
    userId: string;
    username: string;
}

export const Main = () => {
    const [postsList, setPostsList] = useState<Post[] | null>(null);
    const postsRef = collection(db, "posts");

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]);
    }

    useEffect(() => {
        getPosts();
    }, []);


    return (
        <div className="py-5 space-y-5"> 
            {postsList?.map((post: Post) => (
                <Post post={post}/>
            ))}
        </div>
    );
};