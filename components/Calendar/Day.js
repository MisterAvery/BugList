import Reeact from "react";
import styled from "styled-components";
import Link from "next/link";

const Day = ({dateLabel, weekday}) => {
  return (
    <div css={{ gridArea: weekday }}>  
      <DayHeader>
        <h2>{dateLabel}</h2>
        <h2><span>{weekday}
      </span></h2>
      </DayHeader>
      <DayBody>
        <Input><span>Enter Text</span></Input>
      </DayBody>
    </div>
  )
}

const DayHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.75rem;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid black;

  h2 {
    font-size: 1.25rem;
  }
  
  span {
    color: #c2c2c2;
    font-weight: 400;
  }
`;

const DayBody = styled.div`
  height: 100%;
  background: repeating-linear-gradient(to bottom, transparent 0 calc(2.6rem - 1px), #e5e5e5 calc(2.6rem - 1px) 2.6rem);
  padding-bottom: 1rem;
`;

const Input = styled.button`
  line-height: 2.6rem;
  padding: 0 0.2rem;
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;

  &:hover {
    box-shadow: inset 0 -1px #b9c2fb;
  }
`;

export default Day;
