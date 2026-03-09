import { useRouter } from 'next/router';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { onIdTokenChanged } from 'firebase/auth';
import {auth} from '@/backend/Firebase'

const Context = createContext();

export const StateContext = ({ children }) => {

  // Variables to Carry Across Multiple Pages
  const [user, setUser] = useState(undefined);
  const [weekOffset, setWeekOffset] = useState(0);

  function generateDates() {
    // Fucntion to get the array of dates for the current week
    // Each date is represented as an integer

    let days = [];
    const dateMills = Date.now();
    const currentDate = new Date(dateMills);
    const dayOfWeek = currentDate.getDay();

    for (let i = weekOffset * 7; i < weekOffset * 7 + 7; i++) {
      // Get the current date we are working with
      const ithDate = new Date(dateMills - (dayOfWeek - i - 1) * 86400000);

      // Add one to accout for th Date API offset
      days.push(ithDate.getDate() + " " + ithDate.toString().slice(4, 7));
    }  

    return days;
  }

  const [dates, setDates] = useState(generateDates());

  const router = useRouter()
  const { asPath } = useRouter()

  // AUTHENTICATION REMEMBER ME USEEFFECT
  // useEffect(() => {
  //   const unsubscribe = onIdTokenChanged(auth, (user) => {
  //     if(user){
  //       console.log('Token or user state changed:', user)
  //       user.getIdToken().then((token) => {
  //         console.log('New ID token:', token)
  //       })
  //       setUser(user)
  //     } else {
  //       setUser(null) //there is no user signed in
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);




return(
    <Context.Provider
    value={{
        user,
        setUser,
        dates,
        setDates,
        weekOffset,
        setWeekOffset
    }}
    >
      {children}
    </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
