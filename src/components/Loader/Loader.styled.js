import styled, { keyframes } from 'styled-components';

const rotate = keyframes`

to {
    transform: rotate(360deg);
  }`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MainCircle = styled.div`
  width: 150px;
  height: 150px;
  border: 4px solid blue;
  border-top: 4px solid transparent;
  border-right: 4px solid transparent;
  position: relative;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 2s infinite;

  &:before {
    width: 100%;
    height: 100%;
    position: absolute;
    content: '';
    border: 4px solid transparent;
    border-right: 4px solid blue;
    transform: rotate(40deg);
    border-radius: 50%;
  }
`;

export const GreenCircle = styled.div`
  animation: rotate 2s infinite 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border: 4px solid blue;
  border-top: 4px solid transparent;
  border-right: 4px solid transparent;
  transform: rotate(-20deg);
  border-radius: 50%;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    border: 4px solid transparent;
    border-right: 4px solid blue;
    transform: rotate(60deg);
  }
`;

export const BrownCircle = styled.div`
  animation: ${rotate} 2s infinite 0.6s;
  width: 80px;
  height: 80px;
  border: 4px solid blue;
  border-top: 4px solid transparent;
  border-right: 4px solid transparent;
  transform: rotate(-20deg);
  border-radius: 50%;
`;

// @keyframes rotate {
//   from {}
//   to {
//     transform: rotate(360deg);
//   }
// }
