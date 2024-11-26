import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    };

    return (
        <div className="bg-blue-100">
            <div className="flex items-center justify-between py-4 px-6">
                {/* Left side: Navbar links */}
                <div className="flex space-x-5">
                    <Link to="/" className="underline">Home</Link>
                    {!user && <Link to="/login" className="underline">Login</Link>}
                    {user && <Link to="/createpost" className="underline">Create Post</Link>}
                </div>

                {/* Right side: User info */}
                {user && (
                    <div className="flex items-center space-x-5">
                        <p className="font-medium">{user?.displayName}</p>
                        <img
                            src={user?.photoURL || ""}
                            alt="Profile"
                            className="w-10 h-10 rounded-full"
                        />
                        <button
                            onClick={signUserOut}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
