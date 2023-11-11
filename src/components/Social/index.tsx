import { Instagram, Linkedin, Right, Twitter } from 'assets/Images';

const Social = () => {
  return (
    <div className="bg-[#3E3E50] h-fit py-3 px-4 rounded-lg lg:mt-5">
      <div className="mb-2 text-sm text-[#B7B7D4]">
        Follow us on social media
      </div>
      <div className="flex items-center w-full lg:w-[310px] bg-[#4A4A5F] justify-between p-2 rounded-md mb-2 hover:bg-[#3C4556] cursor-pointer">
        <div className="flex items-center gap-1">
          <img src={Instagram} alt="" />
          <span>Instagram</span>
        </div>
        <img src={Right} alt="" width={24} height={24} />
      </div>
      <div className="flex items-center w-full lg:w-[310px] bg-[#4A4A5F] justify-between p-2 rounded-md mb-2 hover:bg-[#3C4556] cursor-pointer">
        <div className="flex items-center gap-1">
          <img src={Twitter} alt="" />
          <span>Twitter</span>
        </div>
        <img src={Right} alt="" width={24} height={24} />
      </div>
      <div className="flex items-center w-full lg:w-[310px] bg-[#4A4A5F] justify-between p-2 rounded-md mb-2 hover:bg-[#3C4556] cursor-pointer">
        <div className="flex items-center gap-1">
          <img src={Linkedin} alt="" />
          <span>LinkedIn</span>
        </div>
        <img src={Right} alt="" width={24} height={24} />
      </div>
    </div>
  );
};

export default Social;
