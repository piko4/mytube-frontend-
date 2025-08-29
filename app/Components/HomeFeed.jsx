"use client";
import Image from "next/image";
import Link from "next/link";

// Mock video data (later replace with API response)
const videos = [
    {
        id: 1,
        title: "Learn Next.js in 10 Minutes",
        thumbnail: "https://images.unsplash.com/photo-1676380364777-d53c900178fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlkZW8lMjB0aHVtYm5haWx8ZW58MHx8MHx8fDA%3D",
        channel: "CodeWithSweet",
        views: "1.2M views",
        profileImage:"https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfDJ8MHx8fDA%3D",
        uploaded: "2 days ago",
    },
    {
        id: 2,
        title: "MyTube Clone with React & Spring Boot",
        thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW91dHViZSUyMHRodW1ibmFpbHxlbnwwfDB8MHx8fDA%3D",
        channel: "DevJourney",
        views: "450K views",
         profileImage:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8MnwwfHx8MA%3D%3D",
        uploaded: "1 week ago",
    },
    {
        id: 3,
        title: "Deploy on AWS for FREE",
        thumbnail: "https://images.unsplash.com/photo-1649734926695-1b1664e98842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1hem9uJTIwd2ViJTIwc2VydmljZXxlbnwwfDB8MHx8fDA%3D",
        channel: "CloudMaster",
        views: "300K views",
        profileImage:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8MnwwfHx8MA%3D%3D",
        uploaded: "3 weeks ago",
    },
];

export default function HomeFeed() {
    return (
        <main className="px-6 py-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Video Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {videos.map((video) => (
                    <Link
                        key={video.id}
                        href={`/watch/${video.id}`}
                        className="group flex flex-col"
                    >
                        {/* Thumbnail */}
                        <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-44 xl:h-48 overflow-hidden rounded-xl shadow-md">
                            <Image
                                src={video.thumbnail}
                                alt={video.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Video Info */}
                        <div className="flex gap-3 mt-3">
                            {/* Channel Avatar */}
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <Image
                                    src={video.profileImage}
                                    alt={video.channel}
                                    width={40}
                                    height={40}
                                    className="object-cover"
                                />
                            </div>


                            {/* Details */}
                            <div className="flex flex-col">
                                <h3 className="text-sm font-semibold line-clamp-2 text-gray-900 dark:text-gray-100 group-hover:text-red-600 transition-colors">
                                    {video.title}
                                </h3>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                    {video.channel}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-500">
                                    {video.views} • {video.uploaded}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
