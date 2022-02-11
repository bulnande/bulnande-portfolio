import styled from "styled-components";
import SinglePortfolio from "../components/singlePortfolio";
import SinglePortfolioShort from "../components/singlePortfolioShort";
import { dummydata } from "../data/dummydata";
import { dummydataShort } from "../data/dummydataShort";
import Layout from "./layout";
import { boxFade, MediaQuery } from "../GlobalStyle";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MainDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 20px;
  animation: 0.7s ease-in-out ${boxFade};

  ${MediaQuery.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  color: #2f2f2f;
  width: 1150px;
  padding: 15px 30px 15px 20px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
  border: 1px solid #f6f6f6;
  border-radius: 10px;
  font-size: 23px;
  font-weight: bold;
  animation: 0.7s ease-in-out ${boxFade};

  img {
    width: 35px;
    margin-right: 1px;
  }

  div {
    font-style: normal;
    margin-top: 10px;
    font-size: 15px;
    color: #a29797;
  }

  ${MediaQuery.mobile} {
    width: 370px;
    font-size: 18px;
    padding: 15px 30px 15px 25px;

    img {
      width: 25px;
    }
  }
`;

function Project() {
  return (
    <Layout>
      <MainContainer>
        <TextWrapper>
          <img
            src="https://cdn.discordapp.com/attachments/938684956916449330/938685685307686932/bulbu_symbol.jpeg"
            alt=""
          />
          장기프로젝트
        </TextWrapper>
        <MainDiv className="mount">
          {dummydata.map((el, idx) => {
            return <SinglePortfolio key={idx} data={el} />;
          })}
        </MainDiv>
        <TextWrapper>
          <img
            src="https://cdn.discordapp.com/attachments/938684956916449330/938685685307686932/bulbu_symbol.jpeg"
            alt=""
          />
          단기프로젝트
        </TextWrapper>
        <MainDiv className="mount">
          {dummydataShort.map((el, idx) => {
            return <SinglePortfolioShort key={idx} data={el} />;
          })}
        </MainDiv>
      </MainContainer>
    </Layout>
  );
}

export default Project;
