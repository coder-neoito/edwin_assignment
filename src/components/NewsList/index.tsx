import NEWS from 'constants/News';
import {format} from 'date-fns';

const NewsList = () => {
  return (
    <>
      <div className="text-[#b7b7d4] text-sm font-bold mb-4">
        Most recent POGR news
      </div>
      {NEWS.map((news) => (
        <div
          key={news.id}
          className="w-full overflow-hidden my-[2px] flex bg-[#4A4A5F]"
        >
          <div className="min-w-[9.5rem] w-[9.5rem] h-[7.5rem]">
            <img
              src={news.banner}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-full p-4">
            <h3 className="font-bold truncate text-xl lg:text-2xl text-white hover:text-[#0DD] transition-colors duration-100 ease-in-out capitalize cursor-pointer">
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
                <span className="text-[#9d9dbb]">{format(news.date, 'dd MMM yyyy')}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsList;
