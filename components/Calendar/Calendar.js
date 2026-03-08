import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Day from '@/components/Calendar/Day';

const Calendar = () => {
  return (
    <DatesWrapper>
      <Day weekday={"Mon"}></Day>
      <Day weekday={"Tue"}></Day>
      <Day weekday={"Wed"}></Day>
      <Day weekday={"Thu"}></Day>
      <Day weekday={"Fri"}></Day>
      <Day weekday={"Sat"}></Day>
      <Day weekday={"Sun"}></Day>
      <Day weekday={"Some"}></Day>
    </DatesWrapper>
  );
};

const DatesWrapper = styled.section`
  min-height: calc(100vh - 8vh - 4rem - 1.6rem);
  display: grid;
  grid-template-areas:
    "Mon   Tue   Wed   Thu   Fri   Sat"
    "Mon   Tue   Wed   Thu   Fri   Sun"
    "Some  Some  Some  Some  Some  Some";
  grid-template-columns: repeat(6, auto);
  grid-template-rows: 3fr 3fr 2fr;
  gap: 4.5rem 1.5rem;
`;

export default Calendar;
