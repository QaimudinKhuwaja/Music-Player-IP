// "use client";

// import { useState } from 'react';
// import Image from "next/image"

// export default function Home() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audio] = useState(new Audio('/fvtMusic.mpeg')); // Replace with your audio file

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       audio.pause();
//     } else {
//       audio.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {/* Image at the top */}
//       <div className="mb-6">
//         <Image 
//           src="/musicimg.png"  
//           alt="Music Cover"
//           width={600}
//           height={400}
//           className=" rounded-lg shadow-xl"
//         />
//       </div>

//       <h1 className="text-4xl font-bold text-blue-950 mb-6">Music Player</h1>

//       <div className="flex flex-col items-center justify-center">
//         <button
//           onClick={togglePlayPause}
//           className="px-6 py-3 bg-blue-950 text-white text-xl rounded-lg shadow-lg hover:bg-blue-900 focus:outline-none"
//         >
//           {isPlaying ? 'Pause' : 'Play'}
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const audioElement = new Audio('/fvtMusic.mpeg');
      setAudio(audioElement);
    }
  }, []);

  const togglePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Image at the top */}
      <div className="mb-6">
        <Image 
          src="/musicimg.png"  
          alt="Music Cover"
          width={600}
          height={400}
          className="rounded-lg shadow-xl"
        />
      </div>

      <h1 className="text-4xl font-bold text-blue-950 mb-6">Music Player</h1>

      <div className="flex flex-col items-center justify-center">
        <button
          onClick={togglePlayPause}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}