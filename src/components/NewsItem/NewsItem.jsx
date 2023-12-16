import React from "react";
import { formatTimAgo } from "../utils/formatTimeAgo";
import clases from './NewsItem.module.css'

const NewsItem = ({item}) => {
  return (
    <div>
      <li className="flex gap-4">
        <div
            className={clases.image}
            style={ {backgroundImage: `url(${item.image}) `} }
        >

        </div>
        <div>
          <h3 className="text-gray-700 font-semibold">{item.title}</h3>
          <p className="font-semibold">
            {formatTimAgo(item.published)} by {item.author}
          </p>
        </div>
      </li>
    </div>
  );
};

export default NewsItem;
