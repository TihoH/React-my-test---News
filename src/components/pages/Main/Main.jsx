import React, { useEffect, useState } from "react";
import NewsBanner from "../../NewsBanner/NewsBanner";
import { getNews } from "../../../api/apiNews";
import NewsList from "../../NewsList/NewsList";
import Skeleton from "../../Skeleton/Skeleton";
import Pagination from "../../Pgination/Pagination";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const featchNews = async () => {
    try {
      setIsLoading(true);
      const response = await getNews(currentPage, pageSize);
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const hendleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const hendlePreviusPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const hendlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    featchNews();
  }, [currentPage]);

  return (
    <main className="flex flex-col w-full">
      {news.length != 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={"banner"} count={1} />
      )}
      {/* <Pagination
        hendleNextPage={hendleNextPage}
        hendlePreviusPage={hendlePreviusPage}
        hendlePageClick={hendlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      /> */}
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={"item"} count={10} />
      )}
            <Pagination
        hendleNextPage={hendleNextPage}
        hendlePreviusPage={hendlePreviusPage}
        hendlePageClick={hendlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
};

export default Main;
