import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ScrollDown from "../Scroll/ScrollDown";
import ScrollingDivs from "../Scroll/ScrollDown";

const Container = styled.div`
  position: relative;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.bg_color};
  background-image: ${props =>
    `linear-gradient(${props.overlay_color}, ${props.overlay_color}), url(${
      props.bg_photo
    })`};
  padding: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
`;

const TagContainer = styled.div`
  background-color: ${props => props.bg_color};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 3px;
  min-width: 60px;
  border-radius: 3px;
  text-align: center;
  color: ${props => props.tagColor};
`;

const TagText = styled.span`
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CTA = styled.span`
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 25px;
  z-index: 9;
  background: ${props => props.bg_color};
  color: ${props => props.color};
`;

const CTAText = styled.span`
  font-weight: 500;
`;

const Title = styled.span`
  display: block;
  font-size: 48px;
  font-weight: 700;
  margin-top: 8px;
  color: ${props => props.color};
`;
const Description = styled.h6`
    display:block;
    padding:5px;
    font-size:18px;
    font-weight: 500;
    color: ${props => props.color};
`
const PreTitle = styled.span`
  font-size: 16px;
  color: ${props => props.color};
`;

const WarpDetails = styled.span`
  background-color: rgba(0,0,0,0.2);
  background:linear-gradient(45deg, black , transparent);
  padding: 42px;
  width: 45%;
  border-radius: 8px;
  
`
const CreditPhoto = styled.div`
position: absolute;
bottom: 0;
right: 0;
font-size:14px;
background-color:white;
`

const Card08 = ({
  preTitle,
  description,
  creditPhoto,
  scrolldown,
  preTitleColor = "white",
  title,
  titleColor = "white",
  overlay_color = "rgba(0, 31, 154, 0.3)",
  cta,
  ctaColor = "white",
  ctaBg = "#006EFE",
  tag,
  tagColor = "#1F2126",
  tagBg = "white",
  bg_photo,
  bg_color = "#DBE0E6"
}) => (
  <Container bg_photo={bg_photo} bg_color={bg_color} overlay_color={overlay_color}>
    {tag && (
      <TagContainer bg_color={tagBg} color={tagColor}>
        <TagText>{tag}</TagText>
      </TagContainer>
    )}
    {(preTitle || title) && (
      <Content>
        <WarpDetails>
          {preTitle && <PreTitle color={preTitleColor}>{preTitle}</PreTitle>}
          {title && <Title color={titleColor}>{title}</Title>}
          {description && <Description color={titleColor}>{description}</Description>}
        </WarpDetails>
        {cta && (
          <CTA bg_color={ctaBg} color={ctaColor}>
            <CTAText>{cta}</CTAText>
          </CTA>
        )}
      </Content>
    )}
    {
            scrolldown && <ScrollingDivs></ScrollingDivs>

    }
    {
      <CreditPhoto>
        Photo by <a target="_blank"
        href={`https://unsplash.com/@${creditPhoto.name?.username}`}
        >
          {creditPhoto.name?.username}
        </a>
         | 
         <a href='https://unsplash.com/'
         >
          unsplash
          </a>
      </CreditPhoto>     
    }
    {

    }
  </Container>
);

Card08.propTypes = {
  preTitle: PropTypes.string,
  preTitleColor: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  overlay_color: PropTypes.string,
  cta: PropTypes.string,
  ctaColor: PropTypes.string,
  ctaBg: PropTypes.string,
  tag: PropTypes.string,
  tagColor: PropTypes.string,
  tagBg: PropTypes.string,
  bg_photo: PropTypes.string,
  bg_color: PropTypes.string
};

export default Card08;
