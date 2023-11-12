import { Invalid } from 'assets/Images';

const InvalidNews = () => {
  return (
    <div className="bg-[#3E3E50] p-6 w-full rounded-lg h-full flex flex-col items-center justify-center gap-5 lg:mt-5">
      <img src={Invalid} alt="" width={200} height={400} />
      <span className="text-2xl md:text-3xl font-bold">News Not Found</span>
    </div>
  );
};

export default InvalidNews;
