import styled from 'styled-components';
import background from '../photos/earth-1756274_1280.jpg';
import img1 from '../photos/spaceship-5570682_1280.jpg';
import img2 from '../photos/robot-2256814_1280.jpg';

import img9 from '../photos/video-97053_1280.jpg';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  

  background-image: url(${background});
 
  }
  opacity: 0.8;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

// export const Logo = styled.p`
//   font-weight: 700;
//   margin: 0;
// `;
