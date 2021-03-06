import React from "react";
import styled from "styled-components";
import { Divider } from "@mui/material";
import { ContentContainer, SubContainer, SubText, TitleContainer, TitleText, Us } from "./AboutElements";
const MainContainer = styled.div`
  width: 90%;
  height: 100%
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const UsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const ListFont = styled.div`
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: 600;
`;
const DescFont = styled.div`
  margin: 15px;
  font-size: 18px;
  font-weight: 600;
  color: #2c2c2c;
`;

export default function AboutFifth() {
  return (
    <Container>
      <MainContainer>
        <TitleContainer>
          <TitleText>About Us</TitleText>
        </TitleContainer>
        <Divider />
        <SubContainer>
          <SubText>Blockchain</SubText>
        </SubContainer>
        <SubContainer>
          <UsContainer>
            <Us
              name="μ΅νΈμ² "
              role="Blockchain"
              imgAddr={"https://avatars.githubusercontent.com/u/60258527?v=4"}
              blogAddr="https://velog.io/@choihocheol"
              stack={["Solidity", "Caver.js"]}
              githubAddr="https://github.com/choihocheol"
            />{" "}
            <ContentContainer>
              <ListFont>π¨π»βπ» κ΅¬ν ν­λͺ©</ListFont>
              <DescFont>β KIP-7 Smart Contract</DescFont>
              <DescFont>β KIP-37 Smart Contract</DescFont>
              <DescFont>β Address, Private Key Pair Generation Function</DescFont>
              <DescFont>β Token Mint Function</DescFont>
              <DescFont>β Token Burn Function</DescFont>
              <DescFont>β File Pinning to IPFS Function</DescFont>
              <DescFont>β JSON Pinning to IPFS Function</DescFont>
              <DescFont>β NFT Create Function</DescFont>
              <DescFont>β NFT Mint Function</DescFont>
            </ContentContainer>
          </UsContainer>
        </SubContainer>
        <SubContainer>
          <SubText>Front-End</SubText>
        </SubContainer>
        <SubContainer>
          <UsContainer>
            <Us
              name="μ΄λ―ΌκΈ°"
              role="Frontend"
              imgAddr={"https://media.vlpt.us/images/moment_log/profile/83a77fd2-8e45-4f9b-a149-4ebbcde279bf/IMG_4131.PNG?w=240"}
              blogAddr="https://velog.io/@moment_log"
              stack={["JavaScript", "React", "MUI", "StyledComponent", "Redux"]}
              githubAddr="https://github.com/mingi3442"
            />
            <ContentContainer>
              <ListFont>π¨π»βπ» κ΅¬ν ν­λͺ©</ListFont>
              <DescFont>β Main Page UI, UX</DescFont>
              <DescFont>β About Page UI, UX</DescFont>
              <DescFont>β MyPage UI, UX</DescFont>
              <DescFont>β SignUpPage UI, UX</DescFont>
              <DescFont>β NFT Componet</DescFont>
              <DescFont>β Loginμνμ λ°λ₯Έ Navbarμ Button UI κ΄λ¦¬</DescFont>
              <DescFont>β React Redux Presistλ₯Ό μ΄μ©ν SessionStorage μ¬μ© (λ‘κ·ΈμΈκ΄λ¦¬)</DescFont>
              <DescFont>β AOSλ₯Ό μ΄μ©ν μ€ν¬λ‘€μ λ°μνλ Animate μ μ© </DescFont>
              <DescFont>β Experience Web λ°°ν¬ </DescFont>
            </ContentContainer>
          </UsContainer>
        </SubContainer>
        <SubContainer>
          <UsContainer>
            <Us
              name="μ λμ£Ό"
              role="Frontend"
              imgAddr={"https://avatars.githubusercontent.com/u/93483541?v=4"}
              blogAddr="https://velog.io/@tls980824"
              stack={["JavaScript", "React", "MUI", "StyledComponent", "Redux"]}
              githubAddr="https://github.com/djshinnn"
            />{" "}
            <ContentContainer>
              <ListFont>π¨π»βπ» κ΅¬ν ν­λͺ©</ListFont>
              <DescFont>β Navbar, Sidebar, Footer Page</DescFont>
              <DescFont>β App routing Function</DescFont>
              <DescFont>β List Page UI, UX</DescFont>
              <DescFont>β Posting Page UI, UX</DescFont>
              <DescFont>β View Page UI, UX</DescFont>
              <DescFont>β Posting page (NftImg, title, label, type, etc..) register function</DescFont>
              <DescFont>βView page data donation Function</DescFont>
              <DescFont>β List Page pagination Function</DescFont>
            </ContentContainer>
          </UsContainer>
        </SubContainer>

        <SubContainer>
          <SubText>Back-End</SubText>
        </SubContainer>
        <SubContainer>
          <UsContainer>
            <Us
              name="κΉμ ν"
              role="Backend"
              imgAddr={"https://avatars.githubusercontent.com/u/37060250?v=4"}
              blogAddr="https://github.com/Colvet"
              stack={["Express", "MongoDB"]}
              githubAddr="https://github.com/Colvet"
            />{" "}
            <ContentContainer>
              <ListFont>π¨π»βπ» κ΅¬ν ν­λͺ©</ListFont>
              <DescFont>β Create Nodejs, MongoDB server</DescFont>
              <DescFont>β User API</DescFont>
              <DescFont>β Post API</DescFont>
              <DescFont>β Database modeling</DescFont>
              <DescFont>β Data upload, download</DescFont>
            </ContentContainer>
          </UsContainer>
        </SubContainer>
      </MainContainer>
    </Container>
  );
}
