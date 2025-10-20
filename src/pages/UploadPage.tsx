// src/pages/UploadPage.tsx
import { useState } from "react";

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] || null;
    setFile(selected);
    if (selected) {
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleUpload = () => {
    alert("File uploaded (mock)");
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upload Video</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      {preview && (
        <video src={preview} controls className="w-full my-4 rounded" />
      )}
      <button
        onClick={handleUpload}
        className="bg-green-500 px-4 py-2 rounded text-white"
        disabled={!file}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadPage;
