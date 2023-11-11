import NewsDetails from 'components/NewsDetails';
import NewsList from 'components/NewsList';
import Social from 'components/Social';

const News = () => {
  return (
    <div className="w-full h-full flex p-9 gap-5 flex-col lg:flex-row">
      <div className="w-full flex-1 overflow-hidden">
        {/* <NewsDetails /> */}
        <NewsList />
      </div>
      <Social />
    </div>
  );
};

export default News;
