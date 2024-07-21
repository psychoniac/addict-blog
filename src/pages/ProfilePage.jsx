import { useEffect, useState } from "react";
import  { auth, db} from '../firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";

const ProfilePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const q = query(collection(db, "posts"), where("userId", "==", auth.currentUser.uid));
            const querySnapshot = await getDocs(q);
            const postsArray = querySnapshot.docs.map(doc => doc.data());
            setPosts(postsArray);
        };

        fetchPosts();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Mon profil</h1>
            <div className="mt-4">
                {posts.map((post, index) => (
                    <div key={index} className="mb-4 p-4 border rounded">
                        <h2 className="text-xl">{post.title}</h2>
                        <p>{post.content}</p>
                        {post.imageUrl && <img src={post.imageUrl} alt="Post" className="mt-2" />}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ProfilePage;