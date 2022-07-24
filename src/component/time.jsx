import React, { useState, useEffect,useRef} from 'react';

export default function Time() {
   const [date, setDate] = useState(new Date()); 

   useEffect(() => {
      const timerId = setInterval(() => setDate(new Date()),1000)      
      return () => {
         clearInterval(timerId)
      };
   });

   return (
      <div>         
         <h6> Информация обновлена : <br />{date.toLocaleString()}</h6>             
      </div>
   )
}
