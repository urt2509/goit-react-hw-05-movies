import { Wrapper, MainCircle, GreenCircle, BrownCircle } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <MainCircle>
        <GreenCircle>
          <BrownCircle></BrownCircle>
        </GreenCircle>
      </MainCircle>
    </Wrapper>
  );
};
