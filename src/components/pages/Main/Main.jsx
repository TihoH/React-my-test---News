import React, { useEffect, useState } from 'react';
import NewsBanner from '../../NewsBanner/NewsBanner';
import { getNews } from '../../../api/apiNews';
import NewsList from '../../NewsList/NewsList';

const Main = () => {

    const [news , setNews] = useState([])
    
    const featchNews = async() => {
        try {
            const response = await getNews()
            setNews(response.news)
            console.log(news)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        featchNews()
    } , [] )

    return (
        <main className='flex flex-col w-full'>
            { news.length > 0 ? <NewsBanner item={news[0]} /> : null}
            <NewsList news={news} />
        </main>
    );
};

export default Main;