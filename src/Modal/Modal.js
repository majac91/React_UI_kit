import React, { useState } from "react";
import { X } from "react-feather";
import styled from "styled-components";
import style from "./style.css";
import Form from "./Form";

//TODO - make accessible https://courses.joshwcomeau.com/css-for-js/05-responsive-css/05-exercises

export default function Modal({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button class="openModalBtn" onClick={toggleModal}>
        Open modal
      </button>
      ;
      {isOpen && (
        <Overlay>
          <Content>
            <Header>
              <Title>{title}</Title>
              <CloseButton>
                <X onClick={toggleModal}></X>
                <VisuallyHidden>Dismiss modal</VisuallyHidden>
              </CloseButton>
            </Header>
            <ChildWrapper>{children}</ChildWrapper>
          </Content>
        </Overlay>
      )}
    </>
  );
}

const MOBILE_BREAKPOINT = 550;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  background: white;
  width: 100%;
  height: 100%;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    width: 65%;
    height: auto;
    border-radius: 8px;
  }
`;

const Header = styled.header`
  padding: 16px;
  padding-bottom: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -48px;
  right: 0;
  background: transparent;
  border: none;
  width: 48px;
  height: 48px;
  cursor: pointer;
  color: white;
`;

const Title = styled.h2`
  font-size: 1.5rem;
`;

const VisuallyHidden = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

const ChildWrapper = styled.div`
  padding: 16px;
`;
