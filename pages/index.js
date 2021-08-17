import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Blurhash } from 'react-blurhash';
import useViewportSizes from 'use-viewport-sizes';
import { useTransition, animated } from '@react-spring/web';
import { GoMarkGithub } from 'react-icons/go';

import { createApi } from 'unsplash-js';

import background from '../public/andrew-welch-RDo6d2fveCc-unsplash.jpg';
import { useHasEntered } from '../components/hooks';

const serverApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

const Index = props => {
  console.log(props);
  const [ref, entered] = useHasEntered();
  const [vW, vH] = useViewportSizes();

  const transition = useTransition(entered, {
    from: {
      position: 'absolute',
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });

  return (
    <HomeComponent className="home" ref={ref}>
      <h1 className="site-title">Will Hawks</h1>
      <BgImage className="background-image">
        <Hash hash={props.photo.blur_hash} />
        {transition(
          (styles, item) =>
            item && (
              <animated.img
                style={styles}
                className="full-image"
                src={`${props.photo.urls.full}?w=${vW}&h=${vH}fit=crop`}
                alt=""
              />
            )
        )}
      </BgImage>
      <Nav>
        <span>Portfolio</span>
        <span>CV</span>
        <span>Contact</span>
        <GoMarkGithub />
      </Nav>
    </HomeComponent>
  );
};

export async function getStaticProps(context) {
  const photo = await serverApi.photos.get({ photoId: 'RDo6d2fveCc' });

  return {
    props: { photo: photo.response }, // will be passed to the page component as props
  };
}

const Nav = styled.nav`
  position: absolute;
  bottom: 0;
  /* bottom: 20%; */
  left: 2rem;
  color: white;
  font-family: ${({ theme }) => theme.font.heading};
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0;
  font-size: 2rem;
  span {
    margin: 3rem 0;
  }
`;

const BgImage = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  .full-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const Hash = styled(Blurhash)`
  &[style] {
    height: 100vh !important;
    width: 100% !important;
  }
`;

const HomeComponent = styled.div`
  position: relative;
  height: 100vh;
  .site-title {
    position: absolute;
    right: 20px;
    bottom: 0;
    z-index: 1;
    color: white;
    font-size: 4.2rem;
    text-transform: uppercase;
  }
`;

export default Index;
