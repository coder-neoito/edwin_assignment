import NEWS from 'constants/News';
import React, { createContext, ReactNode, useState } from 'react';

interface NewsContextProviderProps {
  children: ReactNode;
}

export const NewsContext = createContext<any>(null);

const NewsContextProvider: React.FC<NewsContextProviderProps> = ({
  children,
}) => {
  const [newsList, setNewsList] = useState(NEWS);

  const getNews = (id: string) => {
    const news = newsList.find((news) => news.id === id);
    return news;
  };

  const values = {
    newsList, getNews
  };
  return <NewsContext.Provider value={values}>{children}</NewsContext.Provider>;
};

export default NewsContextProvider;
