import React from "react";
import { UserResult } from "../random-users-types";

const RandomUser = ({ key, user }: { key: string; user: UserResult }) => {
  return (
    <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
      <img
        className="rounded-full"
        src={user.picture.thumbnail}
        alt="random-use-thumbnail"
      />
      <div className="truncate ml-4 leading-5">
        <h4 className="font-bold hover:underline text-[14px] truncate">
          {user.login.username}
        </h4>
        <h5 className="text-[13px] text-gray-500 truncate">
          {user.name.first + " " + user.name.last}
        </h5>
      </div>
      <button className="ml-auto bg-block text-white bg-black rounded-full text-sm px-3.5 py-1.5 font-bold">
        Follow
      </button>
    </div>
  );
};

export default RandomUser;
