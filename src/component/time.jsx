import React, { useState} from 'react';

export default function Time() {
   const [date, setDate] = useState(new Date());
   setInterval(()=> {
      setDate(new Date())
   },1000)
   return (
      <div>
         <h6> Информация обновлена : <br />{date.toLocaleString()}</h6>
      </div>
   )
}
