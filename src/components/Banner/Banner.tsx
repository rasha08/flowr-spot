import React from 'react';

import {
  BannerSearchBox,
  BannerSearchBoxIcon,
  BannerSearchBoxWrapper,
  BannerSubTitle,
  BannerTitle,
  BannerWrapper,
} from './styled';

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerTitle>Discover flowers around you</BannerTitle>
      <BannerSubTitle>Explore between more than 8.427 sightings</BannerSubTitle>
      <BannerSearchBoxWrapper>
        <BannerSearchBox placeholder={'Looking for something specific?'} />
        <BannerSearchBoxIcon src={'/static/images/pl-icon-search.png'} alt={'search'} />
      </BannerSearchBoxWrapper>
    </BannerWrapper>
  );
};

export default Banner;
