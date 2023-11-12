import NewsDetails from 'components/NewsDetails';
import NewsList from 'components/NewsList';
import Social from 'components/Social';
import { useParams } from 'react-router-dom';

const News = () => {
  const { id } = useParams();
  return (
    <div className="w-full h-full flex p-9 gap-5 flex-col lg:flex-row">
      <div className="w-full flex-1 overflow-hidden">
        {id ? <NewsDetails id={id} /> : <NewsList />}
      </div>
      <Social />
    </div>
  );
};

export default News;
