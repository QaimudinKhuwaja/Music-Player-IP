// import { NextRequest,NextResponse } from "next/server";

// const data = {
//     name: "FVT Music",
//     artist: "FVT",
//     cover: "/musicimg.png",
//     audio: "/fvtMusic.mpeg",
// }

// export async function GET(){
//     return NextResponse.json(data);
// }

import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        slug:"aud",
        name: "Arabic Music ",
        artist: "Ahmed",
        cover: "/fourth.jpg",
        audio: "/naa1.mpeg",

    },
    {
        id: 2,
        slug:"audd",
        name: "Ya Noori Nasheed ",
        artist: "Khuwaja",
        cover: "/third.jpg",
        audio: "/naa2.mpeg",
    },
    {
        id: 3,
        slug:"auud",
        name: "Aata Qabal hu Arabic",
        artist: "Qaim",
        cover: "/fifth.jpg",
        audio: "/naa5.mpeg",
    },
    {
        id: 4,
        slug:"auuud",
        name: "Ya li li LILI Music ",
        artist: "Faraz",
        cover: "/yaLiLi.jpg",
        audio: "/naa4.mpeg",
    },
    {
        id: 5,
        slug:"auuuud",
        name: "Arsh per dhoon he Naat",
        artist: "Khuwaja",
        cover: "/second.jpg",
        audio: "/naa3.mpeg ",
    },
  
   

];

export async function GET() {
    return NextResponse.json(data);
}