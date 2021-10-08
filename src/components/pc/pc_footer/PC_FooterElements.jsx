import styled from "styled-components";
import { Link } from "react-router-dom";

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
`;
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  
`;
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin-left:10px
`;
export const Tittle = styled.h1`
  font-size: 24px;
  line-height: 1.1;
  text-align: left;
  font-weight: 700;
  color: #e3e3e9; 
  margin-top: 15px;

  @media screen and (max-width: 700px) {
    font-size: 25px;
  }
`;
export const TopLine = styled.p`
  color: white;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  padding-top: 10px;
  letter-spacing: 1.4px;
  ${"" /* text-transform: uppercase; */}
`;
