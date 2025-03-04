/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from './reusable/Wrappers';

export const Intro = () => {
  const IntroSection = styled.section`
    display: flex;
    justify-content: center;  
    background: white;
  `;
  const IntroText = styled.div`
    text-align: center;
    width: 900px;
    padding: 110px 80px 120px 80px;
    color: grey;
    font-size: 17px;
    font-weight: 500;
    @media (max-width: 760px) {
      padding: 120px 30px 50px 30px;
      font-size: 14px;
    }
  `;
  const Line = styled.span`
    display: inline-block;
    width: 30px;
    margin-bottom: 4px;
    border: 1px solid var(---primary);
  `;

  const Dot = styled.span`
    display: inline-block;
    height: 10px;
    width: 10px;
    background-color: var(---primary);
    border-radius: 50%;
  `;

  return (
    <OuterWrapper>
      <InnerWrapper>
        <IntroSection>
          <IntroText>
            <p><Line /><Dot />
              <em> Previous Ops leader turned Frontend Developer,
              who made a career leap to explore how technology
              can be used to solve meaningful problems for people.
               I have a special interest in UI and how to
                translate customer insights into technical delivery.
               Excited to grow my skills in building memorable
                user experiences together with great people.
              </em>
            </p>
          </IntroText>
        </IntroSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}