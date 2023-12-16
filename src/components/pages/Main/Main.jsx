import React, { useEffect, useState } from "react";
import NewsBanner from "../../NewsBanner/NewsBanner";
import { getNews } from "../../../api/apiNews";
import NewsList from "../../NewsList/NewsList";
import Skeleton from "../../Skeleton/Skeleton";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const featchNews = async () => {
    try {
      setIsLoading(true);
      const response = await getNews();
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    featchNews();
  }, []);

  return (
    <main className="flex flex-col w-full">
      {news.length != 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={"banner"} count={1} />
      )}
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={"item"} count={10} />
      )}
    </main>
  );
};

export default Main;
