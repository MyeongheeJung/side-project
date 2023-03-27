import styled from "@emotion/styled";

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
  justify-content: center;
  gap: 5px;
`;

export const FlexRowStart = styled(FlexRow)`
  justify-content: flex-start;
`;

export const FlexRowBetween = styled(FlexRow)`
  justify-content: space-between;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FlexColumnStart = styled(FlexColumn)`
  align-items: flex-start;
`;

export const Section = styled.div`
  margin-top: 60px;
`;
