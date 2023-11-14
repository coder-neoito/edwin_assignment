import { BookMark, BookMarked, Delete } from 'assets/Images';
import { format } from 'date-fns';
import useNewsContext from 'hooks/UseNewsContext';
import { useNavigate } from 'react-router-dom';

interface NewsType {
  id: string;
  title: string;
  banner: string;
  user: string;
  avatar: string;
  date: Date;
  content: string;
  isBookMarked: false;
}

const NewsList = () => {
  const { newsList, updateNews, deleteNews, createNews } = useNewsContext();
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex items-center justify-between mb-4">
        <div className="text-[#b7b7d4] font-bold">Most recent POGR news</div>
        <button
          className="bg-white text-[#292936] border-none outline-none px-3 py-2 font-semibold rounded-md hover:bg-[#4A4A5F] hover:text-white hover:shadow-md"
          onClick={() => createNews()}
        >
          Add News
        </button>
      </div>
      {newsList.map((news: NewsType) => (
        <div
          key={news.id}
          className="w-full overflow-hidden my-[2px] flex bg-[#4A4A5F]"
        >
          <div className="min-w-[9.5rem] w-[9.5rem] h-[162px] sm:h-[7.5rem]">
            <img
              src={news.banner}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex w-full flex-col sm:flex-row">
            <div className="flex-1 p-4">
              <h3
                onClick={() => navigate(`/news/${news.id}`)}
                className="font-bold truncate text-xl lg:text-2xl text-white hover:text-[#0DD] transition-colors duration-100 ease-in-out capitalize cursor-pointer"
              >
                {news.title}
              </h3>
              <div className="flex gap-2 mt-3 items-center">
                <img
                  src={news.avatar}
                  alt=""
                  className="rounded-[40px] w-10 h-10"
                />
                <div className="flex flex-col justify-center">
                  <span className="text-white">{news.user}</span>
                  <span className="text-[#9d9dbb]">
                    {format(news.date, 'dd MMM yyyy')}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex mr-12 gap-6 pb-3 pl-4 sm:pb-0">
              <div
                className="h-fit self-center cursor-pointer shrink-0"
                onClick={() => updateNews(news.id)}
              >
                {news.isBookMarked ? (
                  <img src={BookMarked} alt="bookmark" width={25} height={30} />
                ) : (
                  <img src={BookMark} alt="bookmark" width={25} height={30} />
                )}
              </div>
              <div
                className="h-fit self-center cursor-pointer shrink-0"
                onClick={() => deleteNews(news.id)}
              >
                <img src={Delete} alt="remove" width={28} height={28} />
              </div>
            </div>
          </div>
          {/* <div className="flex mr-16 gap-6">
            <div
              className="h-fit self-center cursor-pointer shrink-0"
              onClick={() => updateNews(news.id)}
            >
              {news.isBookMarked ? (
                <img src={BookMarked} alt="bookmark" width={25} height={30} />
              ) : (
                <img src={BookMark} alt="bookmark" width={25} height={30} />
              )}
            </div>
            <div
              className="h-fit self-center cursor-pointer shrink-0"
              onClick={() => deleteNews(news.id)}
            >
              <img src={Delete} alt="remove" width={28} height={28} />
            </div>
          </div> */}
        </div>
      ))}
    </>
  );
};

export default NewsList;
