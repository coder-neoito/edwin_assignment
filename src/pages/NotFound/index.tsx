import { NotFound as Error } from 'assets/Images';
const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
      <img src={Error} alt="" width={200} height={400} />
      <span className="text-2xl md:text-3xl font-bold">Page Not Found</span>
    </div>
  );
};

export default NotFound;
