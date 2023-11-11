import { faker } from '@faker-js/faker';
import { News1, User1, User2, User3, News2, News3, News4 } from 'assets/Images';

const avatars = [User1, User2, User3];
const banners = [News1, News2, News3, News4];

const getMockData = () => {
  const ids = Array.from({ length: 9 }).map(() => faker.string.uuid());
  const data = ids.map((id) => ({
    id,
    title: faker.lorem.words({ min: 1, max: 4 }),
    banner: banners[faker.number.int({ min: 0, max: banners.length - 1 })],
    avatar: avatars[faker.number.int({ min: 0, max: avatars.length - 1 })],
    content: faker.lorem.sentence({ min: 5, max: 10 }),
    date: faker.date.past(),
    user: `${faker.lorem.word({
      length: { min: 4, max: 6 },
      strategy: 'closest',
    })}_${faker.lorem.word({
      length: { min: 3, max: 5 },
      strategy: 'closest',
    })}`,
  }));
  return data;
};

const NEWS = [
  {
    id: faker.string.uuid(),
    title: 'Highly Anticipitated GTA-6 Game',
    banner: News1,
    user: 'rafath_pograa',
    avatar: User1,
    date: new Date(2023, 9, 31, 18, 30, 0),
    content:
      'According to the leaked information, GTA 6 will transport players to a sprawling metropolis inspired by a combination of iconic real-world cities like Los Angeles, Miami, and Tokyo. This dynamic and immersive open-world environment promises an unprecedented level of detail, realism, and interactivity, captivating players with its breathtaking visuals and immersive gameplay. Moreover, GTA 6 is set to introduce an innovative new multiplayer mode that will revolutionize the way gamers experience the franchise. Players will have the opportunity to collaborate or compete with friends and rivals in a vast online world, offering endless possibilities for cooperative missions, intense PvP battles, and immersive social interactions. The game is also expected to feature a rich and engaging single-player campaign, filled with intricate storylines, memorable characters, and a range of thrilling missions that will push players skills and decision-making abilities to the limit. GTA 6 is poised to redefine the open-world gaming genre, raising the bar for immersive experiences and pushing the boundaries of what is possible in virtual worlds. The combination of its meticulously crafted world, captivating gameplay, and revolutionary multiplayer features has already generated tremendous buzz and anticipation among gamers. While the official release date for GTA 6 remains unknown, gaming enthusiasts and fans of the franchise are eagerly counting down the days until they can embark on a thrilling new adventure in the vibrant and ever-evolving world of Grand Theft Auto.',
  },
  ...getMockData(),
];

export default NEWS;
