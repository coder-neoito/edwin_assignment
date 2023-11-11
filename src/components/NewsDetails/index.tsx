import { News1, Triangle, User1 } from 'assets/Images';

const NewsDetails = () => {
  return (
    <>
      <div className="flex text-sm gap-2 items-center mb-2">
        <span className="text-[#8484A5] cursor-pointer">News</span>
        <img src={Triangle} alt="" width={10} height={10} />
        <span className="text-white font-medium">
          Highly Anticipitated GTA-6 Game
        </span>
      </div>
      <div className="bg-[#3E3E50] p-6 w-full rounded-lg h-fit">
        <div className="relative w-full min-h-[264px] lg:min-h-[536px] overflow-hidden rounded">
          <img
            src={News1}
            alt=""
            className="w-full h-full absolute inset-0 object-cover object-center text-transparent brightness-75"
          />
          <div className="bottom-0 absolute m-6 lg:m-12">
            <h1 className="text-[1.5rem] lg:text-[3rem] text-white font-bold">
              Highly Anticipitated GTA-6 Game
            </h1>
            <div className="w-20 bg-[#0DD] border-[#0DD] my-4 rounded-lg h-2" />
            <div className="text-[#9D9DBB] text-base lg:text-lg">
              October 31, 2023 6:07 PM
            </div>
          </div>
        </div>
        <p className="text-[#b7b7d4] text-sm my-6">
          According to the leaked information, GTA 6 will transport players to a
          sprawling metropolis inspired by a combination of iconic real-world
          cities like Los Angeles, Miami, and Tokyo. This dynamic and immersive
          open-world environment promises an unprecedented level of detail,
          realism, and interactivity, captivating players with its breathtaking
          visuals and immersive gameplay. Moreover, GTA 6 is set to introduce an
          innovative new multiplayer mode that will revolutionize the way gamers
          experience the franchise. Players will have the opportunity to
          collaborate or compete with friends and rivals in a vast online world,
          offering endless possibilities for cooperative missions, intense PvP
          battles, and immersive social interactions. The game is also expected
          to feature a rich and engaging single-player campaign, filled with
          intricate storylines, memorable characters, and a range of thrilling
          missions that will push players skills and decision-making abilities
          to the limit. GTA 6 is poised to redefine the open-world gaming genre,
          raising the bar for immersive experiences and pushing the boundaries
          of what is possible in virtual worlds. The combination of its
          meticulously crafted world, captivating gameplay, and revolutionary
          multiplayer features has already generated tremendous buzz and
          anticipation among gamers. While the official release date for GTA 6
          remains unknown, gaming enthusiasts and fans of the franchise are
          eagerly counting down the days until they can embark on a thrilling
          new adventure in the vibrant and ever-evolving world of Grand Theft
          Auto.
        </p>
        <div className="border-t-2 border-[#646480] pt-6">
          <div className="flex gap-3">
            <img src={User1} alt="" className="rounded-[40px] w-10 h-10" />
            <div className="flex flex-col justify-center">
              <span className="text-white">Rafath_pograa</span>
              <span className="text-[#9d9dbb]">October 31, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
