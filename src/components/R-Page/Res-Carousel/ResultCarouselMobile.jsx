import React from 'react';
import './ResultCarousel.css';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { ReactComponent as RightChevron } from '../../../media/CommonAccess/MainCarousel/right-chevron.svg';
import { ReactComponent as LeftChevron } from '../../../media/CommonAccess/MainCarousel/left-chevron.svg';
import Period from './Period';

const ResultCarouselMobile = () => {
  const summary = useSelector((state) => state.histograms.histogramInfo);

  const Arrow = ({ direction, ...props }) => {
    const Chevron = direction === 'left' ? LeftChevron : RightChevron;
    return <Chevron {...props} />;
  };

  const settings = {
    slidesToScroll: 1,
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    swipeToSlide: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
  };

  return (
    <div className='blockMobile'>
      <div className='sectionsMobile'>
        {['Период', 'Всего', 'Риски'].map((label, index) => (
          <section key={index} className='sectionsMobile__item'>
            {label}
          </section>
        ))}
      </div>
      <div className='slider-wrapperMobile'>
        <Slider {...settings}>
          {summary &&
            summary.map((period, index) => (
              <Period
                key={index}
                className='periodItemCssMobile'
                date={period.date}
                total={period.total}
                risk={period.risk}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ResultCarouselMobile;
