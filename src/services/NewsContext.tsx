import NEWS, { avatars, banners } from 'constants/News';
import { faker } from '@faker-js/faker';
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

  const updateNews = (id: string) => {
    const updated = newsList.map((news) =>
      news.id === id ? { ...news, isBookMarked: !news.isBookMarked } : news
    );
    setNewsList(updated);
  };

  const deleteNews = (id: string) => {
    const updated = newsList.filter((news) => news.id !== id);
    setNewsList(updated);
  };

  const createNews = () => {
    const newNews = {
      id: faker.string.uuid(),
      title: faker.lorem.words({ min: 1, max: 4 }),
      banner: banners[faker.number.int({ min: 0, max: banners.length - 1 })],
      avatar: avatars[faker.number.int({ min: 0, max: avatars.length - 1 })],
      content: faker.lorem.sentences({ min: 7, max: 12 }),
      date: faker.date.past(),
      isBookMarked: false,
      user: `${faker.lorem.word({
        length: { min: 4, max: 6 },
        strategy: 'closest',
      })}_${faker.lorem.word({
        length: { min: 3, max: 5 },
        strategy: 'closest',
      })}`,
    };
    setNewsList((list) => [newNews, ...list]);
  };

  const values = {
    newsList,
    getNews,
    updateNews,
    deleteNews,
    createNews,
  };
  return <NewsContext.Provider value={values}>{children}</NewsContext.Provider>;
};

export default NewsContextProvider;
