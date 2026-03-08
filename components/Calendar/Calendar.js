import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
// import Day from '@/components/Calendar/Calendar'

const Calendar = () => {
  return (
    <DatesWrapper>
      <Day style={{ gridArea: "Mon" }}>
        <p>Monday</p>
      </Day>
      <Day style={{ gridArea: "Tues" }}>
         <p>Tuesday</p>
      </Day>
      <Day style={{ gridArea: "Wed" }}>
         <p>Wednesday</p>
      </Day>
      <Day style={{ gridArea: "Thurs" }}>
         <p>Thursday</p>
      </Day>
      <Day style={{ gridArea: "Fri" }}>
         <p>Friday</p>
      </Day>
      <Day style={{ gridArea: "Sat" }}>
         <p>Satuday</p>
      </Day>
      <Day style={{ gridArea: "Sun" }}>
         <p>Sunday</p>
      </Day>
      <Day style={{ gridArea: "Some" }}>
         <p>Someday</p>
      </Day>
    </DatesWrapper>
  );
};

const DatesWrapper = styled.section`
  min-height: 80vh;
  display: grid;
  grid-template-areas:
    "Mon   Tues   Wed   Thurs   Fri   Sat"
    "Mon   Tues   Wed   Thurs   Fri   Sun"
    "Some  Some   Some  Some    Some  Some";
  grid-template-columns: repeat(6, auto);
  grid-template-rows: 3fr 3fr 2fr;
  gap: 2rem 1rem;
`;

const Day = styled.div`
  background: #e3e3e3;
`;

export default Calendar;
