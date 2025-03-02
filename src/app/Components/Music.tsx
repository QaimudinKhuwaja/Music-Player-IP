"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Idata {
    id: number;
    slug: string;
    name: string;
    artist: string;
    cover: string;
    audio: string;
}

const Music = () => {
    const [musicData, setMusicData] = useState<Idata[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Loading state

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/data');
            const data = await response.json();
            setMusicData(data);
            setLoading(false); // Set loading to false when data is fetched
        };
        fetchData();
    }, []);

    // Loading Spinner
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black">
                {/* Loading Spinner */}
                <div role="status" className="flex justify-center items-center min-h-screen bg-black">
    <svg
        aria-hidden="true"
        className="inline w-20 h-20 animate-spin"
        viewBox="0 0 150 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="url(#grad1)" // Apply the gradient here
        />
        <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
        />
        {/* Define gradient for half red and half indigo */}
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'red', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'indigo', stopOpacity: 1 }} />
            </linearGradient>
        </defs>
    </svg>
    <span className="sr-only">Loading...</span>
</div>

    </div>
        );
    } // Loading Spinner end

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Navbar */}
            <nav className="sticky top-0 bg-black text-white shadow-lg py-4 z-50">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-2xl md:text-4xl font-extrabold">Music</h1>
                    <h2 className="text-lg md:text-2xl font-medium text-gray-400">Playlist</h2>
                </div>
            </nav>

            {/* Music Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {musicData.map((music, index) => (
                    <Link href={`/audio/${music.slug}`} key={music.id}>
                        <div
                            className={`bg-gray-800 rounded-lg shadow-xl overflow-hidden group transition-all ease-in-out duration-700 transform hover:scale-105 hover:shadow-2xl`}
                            style={{
                                animation: `slideInFromDirection(${(index % 4) + 1}) 1s ease-out`
                            }}
                        >
                            <div className="relative w-full h-36 md:h-48">
                                {/* Image */}
                                <Image
                                    src={music.cover}
                                    alt={music.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-lg"
                                />
                            </div>
                            <div className="p-4">
                                {/* Song Name */}
                                <h2 className="text-base md:text-lg font-semibold text-white group-hover:text-indigo-600 transition-colors ease-in-out duration-300 truncate">{music.name}</h2>
                                {/* Artist */}
                                <p className="text-sm md:text-base text-gray-400 group-hover:text-indigo-400 transition-colors ease-in-out duration-300">{music.artist}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Music;
