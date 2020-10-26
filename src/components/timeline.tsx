import styled from "styled-components";

export const TimeLine = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimelineItem = styled.div`
  display: flex;
  position: relative;
  margin-left: 3rem;
  padding: 1rem 0;

  :before {
    content: "";
    display: block;
    width: 2px;
    position: absolute;
    left: -1.5rem;
    top: 0;
    bottom: 0;
    background: #ddd;
  }
`;

export const TimelineIcon = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  position: absolute;
  width: 1rem;
  height: 1rem;
  left: -2.3rem;
  margin-top: 0.25rem;
  padding: 0.35rem;
  border-radius: 50%;
  font-size: 0.625rem;
  font-weight: 500;
  background: ${(props: { bgColor?: string }) => props.bgColor ?? "#ddd"};
  color: ${(props: { color?: string }) => props.color ?? "#333"};

  > * {
    width: 100%;
    height: 100%;
  }
`;
