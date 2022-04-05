import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import MclarenCarImg from '../../Assets/Images/mclaren-orange-big.png'
import BlobImg from '../../Assets/Images/blob.svg'
import { SCREENS } from '../components/Responsive'

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `};
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `};
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `};
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `};
`;

const BlobContainer = styled.div`
    width: 20em;
    height: 10em;
    position: absolute;
    right: -5em;
    top: -9em;
    z-index: -1;
    transform: rotate(-30deg);

    img {
        width: 100%;
        height: auto;
        max-height: max-content;
    }

    @media (min-width: ${SCREENS.sm}) {
        width: 40em;
        max-height: 10em;
        right: -9em;
        top: -16em;
        transform: rotate(-25deg);
    }

    @media (min-width: ${SCREENS.lg}) {
        width: 50em;
        max-height: 30em;
        right: -9em;
        top: -16em;
        transform: rotate(-25deg);
    }
    @media (min-width: ${SCREENS.xl}) {
        width: 70em;
        max-height: 10em;
        right: -15em;
        top: -25em;
        transform: rotate(-20deg);
    }
`
const StandAloneCar = styled.div`
    width: auto;
    height: 10em;
    right: -9em;
    top: -5em;
    position: absolute;


    img {
         width: auto;
         height: 100%;
         max-width: max-content;
    }
`

function TopSection() {
  return (
    <TopSectionContainer>
        <LeftContainer>
            <Slogan>
                Rent the best exotic cars with us.
            </Slogan>
            <Description>Always choose the best car from our local stores or order it remotely
          at the best price for you and get the best quality cars for as long as
          you like</Description>
        </LeftContainer>
        <RightContainer>
            <BlobContainer>
                <img src={BlobImg} />
            </BlobContainer>
            <StandAloneCar>
                <img src={MclarenCarImg} />
            </StandAloneCar>
        </RightContainer>
    </TopSectionContainer>
  )
}

export default TopSection