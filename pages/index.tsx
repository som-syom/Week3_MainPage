import type { NextPage } from 'next';
import Navigation from 'components/common/Navigation';
import Main from 'components/Main';
import About from 'components/About';
import DownloadButton from 'components/common/DownloadButton';
import LiveVideo from 'components/LiveVideo';
import ReadingBooks from 'components/ReadingBooks';
import ReadingDiary from 'components/ReadingDiary';
import BestSeller from 'components/BestSeller';
import useMedia from 'utils/hooks/useMedia';

const Home: NextPage = () => {
  const { isTablet, isPc } = useMedia();

  return (
    <div>
      <Navigation />
      <Main />
      <About />
      <DownloadButton />
      <LiveVideo isPc={isPc} />
      <ReadingBooks isTablet={isTablet} />
      <ReadingDiary isPc={isPc} isTablet={isTablet} />
      <BestSeller isTablet={isTablet} />
    </div>
  );
};

export default Home;
