"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./EditTopi.module.scss";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [showPopup, setShowPopup] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (res.ok) {
        setNewTitle(""); // Clear input fields
        setNewDescription(""); // Clear input fields
        setShowPopup(false); // Close popup
        router.refresh(); // Refresh router
      } else {
        throw new Error("Failed to create a topic");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showPopup && (

<div className={styles.popupBackground}>
<div className={styles.popup}>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button  className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
      <button onClick={() => setShowPopup(false)}>Close</button>
    </form>
    </div>
    </div>
   )}
    <button onClick={() => setShowPopup(true)} className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </>
  );
}
