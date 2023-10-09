/** @format */
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const data = [
  {
    image: "https://i.pravatar.cc/150?img=1",
    title: "Sample Title 1",
    description:
      "Description for sample item 1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,  Beatae, molestiae omnis!"
  },
  {
    image: "https://i.pravatar.cc/150?img=2",
    title: "Sample Title 2",
    description:
      "Description for sample item 2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,  Beatae, molestiae omnis!"
  },
  {
    image: "https://i.pravatar.cc/150?img=3",
    title: "Sample Title 3",
    description:
      "Description for sample item 3. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Beatae, molestiae omnis!"
  }
  // Add more objects as needed
];

export default function Home() {
  const [animationParent] = useAutoAnimate();
  // const loading = true;
  // const loading = false;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main ref={animationParent} className="p-10 space-y-3">
      {loading
        ? Array(3)
            .fill(0)
            .map((d, i) => <SkeletonCard key={i} />)
        : data.map((d, i) => (
            <Card
              discription={d.description}
              image={d.image}
              title={d.title}
              key={i}
            />
          ))}
    </main>
  );
}

function SkeletonCard() {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className=" animate-pulse  flex space-x-4">
        {/* image */}
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          {/* title */}
          <div className="h-2 bg-slate-700 rounded"></div>
          {/* discription */}
          <div className="space-y-3">
            <div className="grid grid-cols-4 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
//
function Card({
  image,
  title,
  discription
}: {
  image: string;
  title: string;
  discription: string;
}) {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className=" flex space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10 overflow-hidden ">
          <Image width={40} height={40} src={image} alt="imag" />
        </div>
        <div className="flex-1 space-y-2 py-1 ">
          <div className=""> {title} </div>
          <div className="space-y-3">{discription}</div>
        </div>
      </div>
    </div>
  );
}
