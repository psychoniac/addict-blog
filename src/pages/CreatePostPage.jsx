import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { db, storage, auth } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const CreatePostPage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    const handleCreatePost = async (e) => {
        e.preventDefault();
        let imageUrl = "";

        if (image) {
            const imageRef = ref(storage, `images/${image.name}`);
            await uploadBytes(imageRef, image);
            imageUrl = await getDownloadURL(imageRef);
        }

        await addDoc(collection(db, "posts"), {
            title,
            content,
            imageUrl,
            userId: auth.currentUser.uid,
            createdAt: new Date(),
        });
        setTitle("");
        setContent("");
        setImage(null);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Création dun article.</h1>
            <form onSubmit={handleCreatePost} className="mt-4">
                <div className="mb-4">
                    <label>Titre de votre article :</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <label>Contenu de votre article : </label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-2 border rounded"></textarea>
                </div>
                <div className="mb-4">
                    <label>Image (option)</label>
                    <input type="file" accept="image/png, image/jpeg" onChange={(e) => setImage(e.target.value)} />
                </div>
                <div className="mb-4">
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Publier</button>
                </div>
            </form>
        </div>
    );
};

export default CreatePostPage;