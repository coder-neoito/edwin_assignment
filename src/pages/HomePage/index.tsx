import { Cards, DB, Esports, LandFooter } from 'assets/Images';

const HomePage = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url("/src/assets/Images/footer.webp")',
    width: '100%',
    backgroundSize: 'cover',
  };
  return (
    <div className="h-full flex flex-col items-center">
      <div className="flex items-center px-32 lg:px-48 xl:px-64 gap-8 py-10 flex-col-reverse xl:flex-row">
        <div>
          <h1 className="text-white text-[45px]">
            It's all about bringing gamers together. <br />
            Really.
          </h1>
          <p className="text-[#B7B7D4] text-lg py-2">
            We are an enthusiastic team of gamers who share the same vision for
            building the statistical foundation for gaming and the metaverse. We
            are looking to connect the next generation of both players and
            developers by providing accurate and in depth statistics.
          </p>
        </div>
        <img src={Cards} alt="" width={401} height={342} />
      </div>

      <div className="flex items-center px-32 lg:px-48 xl:px-64 gap-8 py-10 flex-col xl:flex-row">
        <img src={Esports} alt="" width={401} height={342} />
        <div>
          <h1 className="text-white text-[45px]">
            Did we say we love video games and the esport scene?
          </h1>
          <p className="text-[#B7B7D4] text-lg py-2">
            Showcase your achievements and skillset with POGR. Our unique
            profile system allows you to build and customize your personal
            landing page linking your socials and displaying statistics
            Participate in local and national communities.
          </p>
          <p className="text-[#B7B7D4] text-lg py-2">
            Use our wide range of listening tools to analyze your gaming data.
            Conquer your weaknesses and take the next step to integrate yourself
            into the world of gaming.
          </p>
        </div>
      </div>

      <div className="flex items-center px-32 lg:px-48 xl:px-64 gap-8 py-10 flex-col-reverse xl:flex-row">
        <div>
          <h1 className="text-white text-[45px]">
            Huge database – massive opportunities
          </h1>
          <p className="text-[#B7B7D4] text-lg py-2">
            For the first time, scroll through the gaming industry. Never before
            has information all been gathered in one place. For players looking
            to improve their play and build out their team POGR is the hub to
            start looking.
          </p>
          <p className="text-[#B7B7D4] text-lg py-2">
            Aggregate and visualize data from our extensive database to find
            weaknesses in your play and improve.
          </p>
        </div>
        <img src={DB} alt="" width={401} height={342} />
      </div>
      <div className="relative min-h-[400px] w-full flex flex-col justify-center items-center overflow-hidden">
        <img
          src={LandFooter}
          alt=""
          className="w-full h-auto absolute top-0 left-0 object-cover object-center"
        />
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center text-center w-full">
          <div className="text-[#00DDDD] text-xl my-6 p-3 font-semibold">
            FEEDBACK PLZ
          </div>
          <div className="text-[45px] p-3 mb-6">
            We'd like to hear what you think!
          </div>
          <div className="text-[#B7B7D4] text-lg">
            We highly value and appreciate any input that can make POGR the best
            possible community for gamers.
          </div>
        </div>
      </div>
      {/* <div
        style={backgroundImageStyle}
        className="p-48 text-white flex flex-col justify-center items-center"
      >
        <div className="text-[#00DDDD] text-xl my-6 p-3 font-semibold">
          FEEDBACK PLZ
        </div>
        <div className="text-[45px] p-3 mb-6">
          We'd like to hear what you think!
        </div>
        <div className="text-[#B7B7D4] text-lg">
          We highly value and appreciate any input that can make POGR the best
          possible community for gamers.
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
