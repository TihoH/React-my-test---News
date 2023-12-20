import React, { useEffect, useState } from "react";
import NewsBanner from "../../NewsBanner/NewsBanner";
import { getCategories, getNews } from "../../../api/apiNews";
import NewsList from "../../NewsList/NewsList";
import Skeleton from "../../Skeleton/Skeleton";
import Pagination from "../../Pgination/Pagination";
import Categories from "../../Categories/Categories";
import Search from "../../Search/Search";
import { useDebounce } from "../../Hooks/useDebounse";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;
  const [categories , setCategories] = useState([])
  const [ selectedCategory , setSelectedCategory] = useState('All')
  const [keywords , setKeywords] = useState('')

  const debouncedInput = useDebounce(keywords , 1500)
  
  const featchNews = async () => {
    try {
      setIsLoading(true);
      const response = await getNews({
        page_number: currentPage ,
        page_size: pageSize , 
        category: selectedCategory === 'All' ? null : selectedCategory ,
        keywords: debouncedInput
      });
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  const featchCategories = async () => {

    try {
      const response = await getCategories();
      setCategories(['All' , ...response.categories])
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
    featchCategories()
  }, []);

  useEffect(() => {
    featchNews();
  }, [currentPage , selectedCategory , debouncedInput]);

  return (
    <main className="flex flex-col w-full">
      <Categories 
        categories={categories} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      <Search 
        keywords={keywords}
        setKeywords={setKeywords} 
      />
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
