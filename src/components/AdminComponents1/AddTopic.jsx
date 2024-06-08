'use client'
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import styles from "./add.module.scss";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [uploading, setUploading] = useState(false);

  const router = useRouter();

  const handleImageFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handlePdfFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !imageFile || !pdfFile) {
      alert("Title, description, image, and pdf are required.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("pdf", pdfFile);

    try {
      // Upload to S3
      const s3Response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      });

      if (!s3Response.ok) {
        throw new Error("Failed to upload files to S3");
      }
      // Get S3 response data
      const s3Data = await s3Response.json();
      console.log("s3Data", s3Data)
      const imageFileUrl = s3Data.imageUrl;
      const pdfFileUrl = s3Data.pdfUrl;

      // Submit data to MongoDB
      const mongoResponse = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, imageFileUrl, pdfFileUrl }),
      });

      if (mongoResponse.ok) {
        setTitle(""); // Clear input fields
        setDescription(""); // Clear input fields
        setImageFile(null); // Clear input fields
        setPdfFile(null); // Clear input fields
        setShowPopup(false); // Close popup
        setUploading(false);
        router.refresh(); // Refresh router
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log("ERROR",error);
    }finally{
      setUploading(false);
    }
  };

  return (
    <>
      <button onClick={() => setShowPopup(true)}>Add Topic</button>
      {showPopup && (
        <div className={styles.popupBackground}>
          <div className={styles.popup}>
            <button onClick={() => setShowPopup(false)}>Close</button>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Title"
              />

              <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Description"
              />

              <input
                type="file"
                accept="image/*"
                onChange={handleImageFileChange}
              />
              <input
                type="file"
                accept="application/pdf"
                onChange={handlePdfFileChange}
              />

              <button
                type="submit"
                className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Add Topic"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTopic;
