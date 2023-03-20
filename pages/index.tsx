import type { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

export const MainBody = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

export const Container = styled.div`
  width: 80vw;
  height: 100vh;
  background-color: black;
  margin:auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  @media (min-width: 769px) {
    width: 100vw;
    height: 100vh;

`;

export const Title = styled.h1`
  order:1;
  color: white;
  font-family: "Roc-Grotesk-Variable";
  // font-style: normal;
  font-variation-settings: "wdth" 125, "wght" 700;
  font-size:100px;
  padding:0;
  padding-top: 30px;
  padding-bottom:5px;
  margin:0;
  line-height:50%;
  @media (min-width: 769px) {
    padding:unset;
    margin: unset;
    font-size: 9.255vw;
    // font-size: 160px;
    // line-height: 127%;
    position: absolute;
    // width: 537px;
    width: 50vw;
    height: 203px;
    // left: 290px;
    left: 24.8vw;
    // top: 211px;
    top: 19.6vh;
    line-height: 127%;
`;

export const GreenSpan = styled.span`
  color: #3eae93;
`;

export const GreenUnderSpan = styled.span`
  color: #3eae93;
  // text-decoration: underline;
`;

export const Subtitle = styled.h2`
  color: white;
  font-family: "Roc-Grotesk-Variable";
  // font-style: normal;
  font-variation-settings: "wdth" 125, "wght" 700;
  order: 2;
  font-size: 27px;
  padding-bottom: 22px;
  @media (min-width: 769px) {
    font-size: 30px;
    font-size: 1.735vw;
    position: absolute;
    width: 548.19px;
    height: 38.83px;
    left: 297.85px;
    left: 25.2vw;
    top: 372.13px;
    top: 36.7vh;
    padding-bottom: unset;
  }
`;

export const Tagline = styled.p`
  order: 4;
  font-family: "Roc-Grotesk-Variable";
  font-variation-settings: "wdth" 125, "wght" 500;
  color: white;
  width: 85%;
  font-size: 38px;
  line-height: 120%;
  position: relative;
  left: 8vw;
  padding-bottom: 60px;
  @media (min-width: 769px) {
    position: absolute;
    left: 682px;
    left: 47.45vw;
    // right: 400.59px;
    top: 377px;
    top: 37.5vh;
    bottom: 194.98px;
    width: 357.41px;
    width: 22vw;
    font-size: 50px;
    font-size: 2.899vw;
    line-height: 96%;
  }
`;

export const InputWrapper = styled.div`
  background: hsla(0, 100%, 100%, 0.2);
  border-radius: 1.5vw;
  color: white;
  order:5;
  width:61vw;
  height:40px;
  height: 9.6vw;


  @media (min-width: 769px) {
    display:flex;
    flex-direction:column;
    position: absolute;
    width: 311px;
    width: 18vw;
    height: 53px;
    height: 3.05vw;
    left: 933px;
    left: 62vw;
    top: 680px;
    top: 69.7vh;
    border-radius: 0.5vw;
`;

export const JoinUs = styled.button`
  background: hsla(0, 100%, 100%, 0.2);
  border-radius: 1.5vw;
  font-family: "Roc-Grotesk-Variable";
  font-variation-settings: "wdth" 125, "wght" 500;
  color: white;
  order: 6;
  height: 40px;
  height: 9.6vw;
  width: 61vw;
  margin-top: 20px;
  font-size: 18px;
  font-size: 4.6vw;
  @media (min-width: 769px) {
    position: absolute;
    width: 18vw;
    height: 53px;
    height: 3.05vw;
    left: 933px;
    left: 62vw;
    top: 761px;
    top: 78.25vh;
    padding-top: 0.2vw;
    font-size: 24px;
    font-size: 1.39vw;
    line-height: 127%;
    border-radius: 0.5vw;
    margin-top: unset;
  }
`;

export const InputTest = styled.input`
  width: 100%;
  height: 40px;
  height: 9.6vw;
  padding: 8px;
  padding: 0.2vh;
  padding-top: 10px;
  padding-top: 0.6vw;
  padding-left: 10vw;
  background: hsla(0, 100%, 100%, 0);
  border-radius: 1.5vw;
  font-family: "Roc-Grotesk-Variable";
  font-variation-settings: "wdth" 125, "wght" 500;
  font-size: 18px;
  font-size: 4.6vw;
  ::placeholder {
    color: white;
  }
  @media (min-width: 769px) {
    font-size: 1.39vw;
    width: 100%;
    padding: 8px;
    padding: 0.2vh;
    padding-top: 10px;
    padding-top: 0.6vw;
    padding-left: 55px;
    padding-left: 3.15vw;
    background: hsla(0, 100%, 100%, 0);
    border-radius: 0.5vw;
    height: unset;
  }
`;

export const LabelTest = styled.label`
  display: flex;
  position: relative;
`;

export const IconTest = styled.img`
  position: absolute;
  left: 10px;
  left: 2vw;
  top: 10px;
  top: 2vw;
  width: 25px;
  width: 6vw;
  height: 25px;
  height: 6vw;
  @media (min-width: 769px) {
    position: absolute;
    left: 10px;
    left: 0.58vw;
    top: 10px;
    top: 0.6vw;
    width: 33px;
    height: 33px;
    width: 1.9vw;
    height: 1.9vw;
  }
`;

export const LogoIcon = styled.img`
  height: 75px;
  width: 75px;
  order: 3;
  position: relative;
  left: -30vw;
  top: 20px;
  @media (min-width: 769px) {
    position: absolute;
    width: 116.29px;
    width: 6.75vw;
    height: 116.29px;
    height: 6.75vw;
    left: 198px;
    left: 19.45vw;
    top: 175px;
    top: 15.9vh;
  }
`;

export const SuccessIcon = styled.img`
order:5;
width: 9.6vw;
height:40px;
height: 9.6vw;


@media (min-width: 769px) {
  position: absolute;
  width: 311px;
  width: 3.05vw;
  height: 53px;
  height: 3.05vw;
  left: 933px;
  left: 62vw;
  top: 680px;
  top: 69.7vh;
`;

function sendDigits(userDigits: string) {
  return fetch(`/api/digits?userDigits=${userDigits}`, {
    method: "POST",
  }).then((response) => response.json());
}

const Landing: NextPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [userPhone, setUserPhone] = useState("");

  async function submitHandler() {
    setUserPhone(userInput);
    if (userPhone) {
      await sendDigits(userPhone);
      setSubmitted(true);
    }
  }

  const inputHandler = (e: any) => {
    setUserInput(e.target.value);
  };

  return (
    <MainBody>
      <Container>
        {/* <LabelTest htmlFor="copy-button">
        <InputTest
          name="copy-button"
          aria-label="copy-button"
          value="123456789"
        />
        <IconTest
          id="icon"
          src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/copy-duplicate-multiply-clone-512.png"
          alt="icon"
        />
      </LabelTest> */}
        <LogoIcon src="/logo-icon.png" />
        <Title>natta</Title>
        <Subtitle>
          the <GreenUnderSpan>first</GreenUnderSpan> dating app
        </Subtitle>
        <Tagline>
          We’re still getting dressed, but{" "}
          <GreenSpan> we’ll text you</GreenSpan> when we’re ready...
        </Tagline>
        {submitted ? (
          <SuccessIcon id="success" src="/success-icon.png" alt="success" />
        ) : (
          <>
            <InputWrapper>
              <LabelTest htmlFor="copy-button">
                <IconTest id="icon" src="/call.png" alt="icon" />
                <InputTest
                  name="copy-button"
                  aria-label="copy-button"
                  placeholder="Drop Your Digits"
                  type="tel"
                  autoComplete="off"
                  onChange={(e) => {
                    inputHandler(e);
                  }}
                />
              </LabelTest>
            </InputWrapper>
          </>
        )}
        <JoinUs onClick={submitHandler}>
          {submitted ? (
            <> You&apos;re on the list! </>
          ) : (
            <>
              Join the <GreenSpan>DateList</GreenSpan>
            </>
          )}
        </JoinUs>
      </Container>
    </MainBody>
  );
};

export default Landing;
