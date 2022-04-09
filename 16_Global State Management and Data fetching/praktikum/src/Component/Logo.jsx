import React from "react";
import styled from "styled-components";

const MyStyled = styled.nav`
  font-size: 20px;
  color: black;
  padding-top: 15px;
`;

const DivStyle = styled.nav`
    display : flex;
    justify-content: space-around;
    background:linear-gradient(90deg, rgb(148, 148, 224), rgb(143, 75, 191),violet);
    color: black;
    font-weight: bold;
    text-align: center;
`;

const UlStyle = styled.ul`
    display : flex;
    list-style: none;
    
`;

const LiStyle = styled.ul`
    display : flex;
    padding: 0px 50px;
    list-style: none;
    
`;
export const Logo = () => {
  return (
    <>
      <DivStyle>
        <div>
          <MyStyled>TODOLIST</MyStyled>
        </div>
        <div>
          <span>
            <UlStyle>
              <LiStyle>Home</LiStyle>
              <LiStyle>About</LiStyle>
              <LiStyle>Contac</LiStyle>
            </UlStyle>
          </span>
        </div>
      </DivStyle>
    </>
  );
};
