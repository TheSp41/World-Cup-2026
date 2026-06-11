import React, { useState } from 'react';
import { toPng } from 'html-to-image';

const SavePageButton = ({ targetId, fileName = 'my-saved-page.png' }) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleDownload = async () => {
    const element = document.getElementById(targetId);
    
    if (!element) {
      console.error(`Could not find element with id: ${targetId}`);
      return;
    }

    try {
      setIsSaving(true);
      const dataUrl = await toPng(element, {
        backgroundColor: '#111827', 
        pixelRatio: 2,
      });

      // Create a fake link, click it automatically, and remove it
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error("Failed to save image:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isSaving}
      className={`px-4 py-2 rounded-lg font-bold text-sm shadow-md transition-all ${
        isSaving 
          ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
          : 'bg-blue-600 hover:bg-blue-500 text-white border border-blue-500'
      }`}
    >
      {isSaving ? 'Saving...' : 'Save Page'}
    </button>
  );
};

export default SavePageButton;