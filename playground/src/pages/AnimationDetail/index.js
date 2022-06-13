import CurveList from 'components/CurveList';
import React from 'react';

import sample1 from 'assets/images/background/art_sample_1.png';
import sample2 from 'assets/images/background/art_sample_2.png';
import sample3 from 'assets/images/background/art_sample_3.png';
import sample4 from 'assets/images/background/art_sample_4.png';
import sample5 from 'assets/images/background/art_sample_5.png';
import sample6 from 'assets/images/background/art_sample_6.png';
import sample7 from 'assets/images/background/art_sample_7.png';
import sample8 from 'assets/images/background/art_sample_8.png';

import Carousel from './Carousel';

const temporalArray = [sample1, sample2, sample3, sample4, sample5, sample6, sample7, sample8];

function AnimationDetail() {
  return (
    <div className="animation-detail-page centered">
      {/* <CurveList /> */}
      <Carousel>
        {temporalArray.map((img, idx) => (
          <img className="carousel-img max-width max-height object-fit-cover" src={img} alt={`Carousel-sample-img-${idx}`} />
        ))}
      </Carousel>
    </div>
  );
}

export default AnimationDetail;
