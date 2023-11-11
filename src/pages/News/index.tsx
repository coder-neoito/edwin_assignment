import NewsDetails from 'components/NewsDetails';
import Social from 'components/Social';

const News = () => {
  return (
    <div className="w-full h-full flex p-9 gap-5 flex-col lg:flex-row">
      <NewsDetails />
      <Social />
    </div>
  );
};

export default News;
