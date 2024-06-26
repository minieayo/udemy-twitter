"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Article } from "../news-types";
import News from "./News";
import { UserResult } from "../random-users-types";
import RandomUser from "./RandomUser";

const Widgets = ({
  newsResults,
  randomUsersResults,
}: {
  newsResults: Article[];
  randomUsersResults: UserResult[];
}) => {
  const [articleNum, setArticleNum] = useState<number>(3);
  const [randomUserNum, setRandomUserNum] = useState<number>(3);

  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
        {/* Search bar */}
        <div className="flex items-center p-3 rounded-full bg-red-300 relative">
          <MagnifyingGlassIcon className="h-5 z-50 text-gray-500" />
          <input
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>
      {/* What's happening - news */}
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">What's happening</h4>
        {newsResults.slice(0, articleNum).map((article: Article) => (
          <News key={article.title} article={article} />
        ))}
        <button
          onClick={() => setArticleNum(articleNum + 3)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400 hover:underline"
        >
          Show More
        </button>
      </div>

      {/* Who to follow */}
      <div className="sticky top-16 text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        {randomUsersResults
          .slice(0, randomUserNum)
          .map((randomUser: UserResult) => (
            <RandomUser key={randomUser.login.username} user={randomUser} />
          ))}
        <button
          onClick={() => setRandomUserNum(randomUserNum + 3)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400 hover:underline"
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Widgets;
