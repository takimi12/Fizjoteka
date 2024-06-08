"use client";
import { useState } from "react";

const UploadForm = () => {
  const [imageFile, setImageFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handlePdfFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile || !pdfFile) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("pdf", pdfFile);

    try {
      const response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data, 'success');
      setUploading(false);
    } catch (error) {
      console.log(error, 'error');
      setUploading(false);
    }
  }

  return (
    <>
      <h1>Upload Image and PDF to S3 Bucket</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageFileChange} />
        <input type="file" accept="application/pdf" onChange={handlePdfFileChange} />
        <button type="submit" disabled={!imageFile || !pdfFile || uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </>
  );
};

export default UploadForm;
