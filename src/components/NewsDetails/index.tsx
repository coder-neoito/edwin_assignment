import React, { useEffect, useState } from 'react';
import { Triangle } from 'assets/Images';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import InvalidNews from 'components/InvalidNews';
import useNewsContext from 'hooks/UseNewsContext';

const NewsDetails: React.FC<{ id: string }> = ({ id }) => {
  const navigate = useNavigate();
  const { getNews } = useNewsContext();
  const [news, setNews] = useState<
    | {
        id: string;
        title: string;
        banner: string;
        user: string;
        avatar: string;
        date: Date;
        content: string;
      }
    | undefined
  >();
  useEffect(() => {
    if (id) {
      const data = getNews(id);
      setNews(data);
    }
  }, [id]);

  return news ? (
    <>
      <div className="flex text-sm gap-2 items-center mb-2">
        <span
          className="text-[#8484A5] cursor-pointer"
          onClick={() => navigate('/news')}
        >
          News
        </span>
        <img src={Triangle} alt="" width={10} height={10} />
        <span className="text-white font-medium capitalize">{news.title}</span>
      </div>
      <div className="bg-[#3E3E50] p-6 w-full rounded-lg h-fit">
        <div className="relative w-full min-h-[264px] lg:min-h-[536px] overflow-hidden rounded">
          <img
            src={news.banner}
            alt=""
            className="w-full h-full absolute inset-0 object-cover object-center text-transparent brightness-75"
          />
          <div className="bottom-0 absolute m-6 lg:m-12">
            <h1 className="text-[1.5rem] lg:text-[3rem] text-white font-bold capitalize">
              {news.title}
            </h1>
            <div className="w-20 bg-[#0DD] border-[#0DD] my-4 rounded-lg h-2" />
            <div className="text-[#9D9DBB] text-base lg:text-lg">
              {format(news.date, 'MMMM dd, yyyy h:mm aa')}
            </div>
          </div>
        </div>
        <p className="text-[#b7b7d4] text-sm my-6">{news.content}</p>
        <div className="border-t-2 border-[#646480] pt-6">
          <div className="flex gap-3">
            <img
              src={news.avatar}
              alt=""
              className="rounded-[40px] w-10 h-10"
            />
            <div className="flex flex-col justify-center">
              <span className="text-white">{news.user}</span>
              <span className="text-[#9d9dbb]">
                {format(news.date, 'MMMM dd, yyyy')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <InvalidNews />
  );
};

export default NewsDetails;
