// "use client"
// import React, { useEffect, useState } from 'react'

// interface Idata {
//     id: number;
//     slug: string;
//     name: string;
//     artist: string;
//     cover: string;
//     audio: string;
// }
// const Page = (params:{params:{slug:string}}) => {
   


//     const [musicData, setMusicData] = useState<Idata[]>([]);
//     const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch('http://localhost:3000/api/data');
//             const data = await response.json();
//             setMusicData(data);
//         };
//         fetchData();
//     }, []);
   

//     const handlePlay = (audioElement: HTMLAudioElement) => {
//         if (currentAudio && currentAudio !== audioElement) {
//             currentAudio.pause();
//         }
//         setCurrentAudio(audioElement);
//     };
//     const dattaa:Idata[] = musicData.filter((d)=> d.slug === params.params.slug)
    
//   return (
//     <>
//             {dattaa.map((music) => (
           
//                     <div key={music.id}>
//                         <h1>{music.name}</h1>
//                         <audio
//                             controls
//                             onPlay={(e) => handlePlay(e.currentTarget)}
//                         >
//                             <source src={music.audio} type="audio/mpeg" />
//                         </audio>
//                     </div>
               
//             ))}
//         </>
    
//   )
// }

// export default Page



"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

interface Idata {
    id: number;
    slug: string;
    name: string;
    artist: string;
    cover: string;
    audio: string;
}

const Page = (params: { params: { slug: string } }) => {
    const [musicData, setMusicData] = useState<Idata[]>([]);
    const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/data');
            const data = await response.json();
            setMusicData(data);
        };
        fetchData();
    }, []);

    const handlePlay = (audioElement: HTMLAudioElement) => {
        if (currentAudio && currentAudio !== audioElement) {
            currentAudio.pause();
        }
        setCurrentAudio(audioElement);
    };

    const dattaa: Idata[] = musicData.filter((d) => d.slug === params.params.slug);

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-purple-600 p-6 flex flex-col items-center">
            {/* Music Player Card */}
            {dattaa.map((music) => (
                <div key={music.id} className="bg-white rounded-lg shadow-xl max-w-lg w-full overflow-hidden">
                    {/* Album Cover */}
                    <div className="relative w-full h-72">
                        <Image
                            src={music.cover}
                            alt={music.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg"
                        />
                    </div>

                    <div className="p-6 text-center">
                        {/* Song Name & Artist */}
                        <h2 className="text-3xl font-bold text-gray-800">{music.name}</h2>
                        <p className="text-lg text-gray-600 mt-2">{music.artist}</p>

                        {/* Audio Player */}
                        <div className="mt-4">
                            <audio controls className="w-full rounded-lg shadow-md">
                                <source src={music.audio} type="audio/mpeg" />
                            </audio>
                        </div>
                    </div>
                </div>
            ))}

            {/* Back Button */}
            <div className="mt-6">
                <button
                    onClick={() => window.history.back()}
                    className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-300"
                >
                    Back to Playlist
                </button>
            </div>
        </div>
    );
}

export default Page;
