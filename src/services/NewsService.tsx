import NEWS from 'constants/News';

const newsList = NEWS;

const getNewsList = () => newsList;

const getNews = (id: string) => {
  const news = newsList.find((news) => news.id === id);
  return news;
};

export { getNewsList, getNews };
