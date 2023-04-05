import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const FlexRowStart = styled(FlexRow)`
  justify-content: flex-start;
`;

export const FlexRowBetween = styled(FlexRow)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FlexColumnStart = styled(FlexColumn)`
  align-items: flex-start;
  height: 6rem;
`;

export const Section = styled.div`
  margin-top: 60px;
`;
