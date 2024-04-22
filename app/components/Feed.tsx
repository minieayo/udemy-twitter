import { SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";
import Input from "./Input";
import Post from "./Post";
import { PostProps } from "../types";

const Feed = () => {
  const posts: PostProps[] = [
    {
      id: "1",
      name: "Ayo Kim",
      username: "codewithayo.kim",
      userImg: "https://avatars.githubusercontent.com/u/71052435?v=4",
      img: "https://plus.unsplash.com/premium_photo-1669048777088-0e091701ac54?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "nice view!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Ayo Kim",
      username: "codewithayo.kim",
      userImg: "https://avatars.githubusercontent.com/u/71052435?v=4",
      img: "https://plus.unsplash.com/premium_photo-1669048778846-9524559b011c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "nice view!",
      timestamp: "2 days ago",
    },
  ];

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      {/* Home Title */}
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0  ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>

      {/* Profile and Textarea */}
      <Input />

      {/* Posts */}
      {posts.map((post: PostProps) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
