import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Day from '@/components/Calendar/Day';
import { useStateContext } from '@/context/StateContext'

const Calendar = () => {
  const { dates, setDates, weekOffset } = useStateContext();

  return (
    <DatesWrapper>
      <Day dateLabel={dates[0]} weekday={"Mon"}></Day>
      <Day dateLabel={dates[1]} weekday={"Tue"}></Day>
      <Day dateLabel={dates[2]} weekday={"Wed"}></Day>
      <Day dateLabel={dates[3]} weekday={"Thu"}></Day>
      <Day dateLabel={dates[4]} weekday={"Fri"}></Day>
      <Day dateLabel={dates[5]} weekday={"Sat"}></Day>
      <Day dateLabel={dates[6]} weekday={"Sun"}></Day>
      <Day dateLabel={dates[6]} weekday={"Some"}></Day>
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
