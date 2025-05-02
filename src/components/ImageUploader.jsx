import { useState } from 'react';
import imageCompression from 'browser-image-compression';

export default function ImageUploader() {
  const [compressedFile, setCompressedFile] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const options = {
      maxSizeMB: 0.1, 
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      setCompressedFile(compressedFile);
      console.log("Compressed file:", compressedFile);
      // Now you can upload compressedFile to your backend
    } catch (error) {
      console.error("Error compressing image:", error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {compressedFile && <p>Image compressed successfully!</p>}
    </div>
  );
}