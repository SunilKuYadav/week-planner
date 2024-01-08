import React, { useState } from "react";

import styled from "styled-components";
import BG_IMG from "./bg.png";
import { InputField } from "../../components";
import { useAppSelector } from "../../store";

const Month = () => {
  const { subTitle, title, data } = useAppSelector(
    (state) => state.monthReducer
  );

  const [state, setState] = useState({
    type: "text",
    title: "1.",
    value: "Ram Ram",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        border: "3px solid red",
      }}
    >
      <ContainerMonth>
        <Title>{title}</Title>
        <Divider />
        <SubTitle>{subTitle}</SubTitle>
        <Container>
          {data.map((item) => {
            return (
              <Section key={item.order}>
                <SubHeading>{item.description}</SubHeading>
                {item.data.map((_item) => {
                  return <InputField data={_item} handleSaveValue={setState} />;
                })}
              </Section>
            );
          })}
        </Container>
      </ContainerMonth>
    </div>
  );
};

export default Month;
const s = [2560, 1600];

const SubTitle = styled.p`
  border: 1px solid red;
  padding: 20px;
`;
const ContainerMonth = styled.div`
  /* display: flex; */
  width: 650px;
  height: 900px;
  background-image: url(${BG_IMG});
  border: 1px solid red;
  padding: 10px;
`;
const Divider = styled.hr``;
const Title = styled.h1`
  text-align: center;
  width: 100%;
  margin: 10px 0;
`;
const Container = styled.div``;
const Section = styled.div``;
const Wrapper = styled.div``;
const SubHeading = styled.h3``;
