import React,{useState,useEffect} from 'react'

function useFetch(URL) {
  const [articles, setArticles] = useState(null)
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const abortCont = new AbortController();
  
  useEffect(() => {
   fetch(URL,{signal: abortCont.signal})
     .then(res => res.json())
     .then(
       (results) => {
         const articles = results.articles
         setIsLoaded(true);
         console.log(results)
         setArticles(articles);
         console.log(articles)
       })
       .catch(err=>{
           if(err.name ==="AbortError" ){
             console.log("Fetch Aborted")
           }
        else{
           setIsLoaded(false)
           setError(err.message)
        }
       })
       return ()=> abortCont.abort();
 }, [URL])
 return {articles,isLoaded,error}
}

export default useFetch
