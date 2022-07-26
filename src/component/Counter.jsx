import React from 'react'
import Time from './Time'

export default function Counter(props) {
   let h2Style = {
      fontSize: 16,
      color: "blue"
   }

   if (props.input < 1) {
      h2Style = {
         fontSize: 16,
         color: "red"
      }
   } else if (props.input > 500) {
      h2Style = {
         fontSize: 16,
         color: "green"
      }
   }
   return (
      <div>
         <h2 style={{
            fontSize: 20
         }}>Расчет стоимости заправки </h2>
         <input
            tabIndex={2}
            className='input'
            type="number"
            value={props.input}
            onChange={props.handleChange}
            placeholder="Впишите объем фреона в граммах" />
         <button
            tabIndex={3}
            onClick={props.clearInput} style={{ padding: 4, marginLeft: 5 }}>
            обнулить
         </button>
         <br />
         <button
            tabIndex={4}
            className='btn'
            style={{
               padding: 5,
               color: "#fff",
               fontSize: 20,
               marginBottom: 10
            }}
            onClick={props.submitClick}>
            Посчитать
         </button>

         <br />
         <h2 style={h2Style}>
            {props.sum}
         </h2>
         <Time />
      </div>
   )
}
