import React, { useState } from 'react';
import './ResultCarousel.css';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import Period from './Period';
import { ReactComponent as RightChevron } from '../../../media/CommonAccess/MainCarousel/right-chevron.svg';
import { ReactComponent as LeftChevron } from '../../../media/CommonAccess/MainCarousel/left-chevron.svg';

const ResultCarouselDesktop = () => {
  const summary = useSelector((state) => state.histograms.histogramInfo);
  const newWidth = useSelector((state) => state.app.width);
  const [resultsLoaded, setResultsLoaded] = useState(false);

  const maxSlideNumber = summary?.length > 8 ? 8 : summary?.length;
  const slidesToShow = newWidth < 700 ? 1 : maxSlideNumber;

  const Arrow = ({ direction, ...props }) => {
    const Chevron = direction === 'left' ? LeftChevron : RightChevron;
    return <Chevron {...props} />;
  };

  const shouldShowArrows = resultsLoaded && summary && summary.length > 0;

  const settings = {
    slidesToScroll: 1,
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: slidesToShow,
    swipeToSlide: true,
    nextArrow: shouldShowArrows ? <Arrow direction="right" /> : null,
    prevArrow: shouldShowArrows ? <Arrow direction="left" /> : null,
  };

  return (
    <div className='greenBlock'>
      <div className='sections'>
        <section>Период</section>
        <section>Всего</section>
        <section>Риски</section>
      </div>
      <div className='slider-wrapper'>
        <Slider
          {...settings}
          afterChange={() => {
            setResultsLoaded(true);
          }}
        >
          {summary &&
            summary.map((period, ind) => (
              <Period key={ind} className='periodItemCss' date={period.date} total={period.total} risk={period.risk} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ResultCarouselDesktop;
