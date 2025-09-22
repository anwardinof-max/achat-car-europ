
import React from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity"
      onClick={onClose}
    >
      <div 
        className="bg-black p-2 rounded-lg shadow-2xl relative w-full max-w-4xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 h-10 w-10 bg-white rounded-full text-black flex items-center justify-center text-2xl font-bold z-10 leading-none"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
