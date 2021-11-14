import React, { useState } from 'react'
import Loading from '../Loading';
import NewsItem from '../newsItem/NewsItem'
import useFetch from '../useFetch';

function News(props) {
    const cap = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    const [dataUrl, setDataUrl] = useState(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=94d35e76305941b996d3e962fc24ccb0&page=1&pageSize=10`)
    const { articles, isLoaded, error } = useFetch(dataUrl)
    const [page, setPage] = useState(1)
    const handleNextClick = () => {
        setDataUrl(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=94d35e76305941b996d3e962fc24ccb0&page=${page + 1}&pageSize=10`)
        setPage(page + 1);

    }
    const handlePreviousClick = () => {

        setDataUrl(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=94d35e76305941b996d3e962fc24ccb0&page=${page - 1}&pageSize=10`)
        setPage(page - 1)
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="d-flex justify-content-center align-items-center"><Loading /></div>;
    } else {
        return (
            articles && <div className="container my-3">
                <h2 className="d-flex justify-content-center">NewsApp -  <span class="badge rounded-pill bg-danger">   {cap(props.category)}</span></h2>
                <div className="row my-3">
                    {articles.map(article => (
                        <div className="col-md-4 my-3" key={article.url}>
                            <NewsItem newsUrl={article.url} title={article.title ? article.title.slice(0, 44) : ""} description={article.description ? article.description.slice(0, 88) : ""} imageUrl={article.urlToImage ? article.urlToImage : "https://motoroctane.com/wp-content/uploads/2021/10/20-Lakh.jpg"} author ={article.author} date={article.publishedAt}/>
                        </div>
                    ))}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} onClick={handlePreviousClick} type="button" class="btn btn-dark">&#8592; Previous</button>
                    <button disabled={page >= 4} onClick={handleNextClick} type="button" class="btn btn-dark">Next &#8594;</button>
                </div>
            </div>
        )
    }
}

export default News
