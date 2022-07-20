import React from 'react';

class ZapravkaValue extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         input: '',
         sum: 0
      }
      this.handleChange = this.handleChange.bind(this)
      this.submitClick = this.submitClick.bind(this)

   }
   handleChange(e) {
      this.setState({
         input: e.target.value
      })
   }


   submitClick() {
      this.setState(state => {
         if (this.state.input > 500) {
            return {
               sum: `Стоимость заправки составит ${this.state.input * 2 + 200} рублей!`
            }
         } else if (this.state.input < 1) {
            return {
               sum: "Введите число больше 0!"
            }
         } else {
            return {
               sum: "Минимальная стомость заправки 1200 рублей!"
            }
         }
      })
   }

   render() {
      let h2Style = {
         fontSize: 16,
         color: "blue"
      }
      if (this.state.input < 1) {
         h2Style = {
            fontSize: 16,
            color: "red"
         }
      } else if (this.state.input > 500) {
         h2Style = {
            fontSize: 16,
            color: "green"
         }
      }
      return (
         <div style={{ padding: 10 }}
         >
            <h2 style={{
               fontSize: 20
            }}>Расчет стоимости заправки </h2>
            <input
               style={{
                  width: 300,
                  marginBottom: 10,
                  padding: 5
               }}
               type="number"
               value={this.state.input}
               onChange={this.handleChange}
               placeholder="Впишите объем фреона в граммах" />
            <br />
            <button
               style={{
                  width: 300,
                  padding: 5,
                  background: "rgb(217 33 33)",
                  color: "#fff",
                  fontSize: 20,
                  marginBottom: 10
               }}
               onClick={this.submitClick}>
               Получить результат
            </button>
            <br />
            <h2 style={h2Style}>
               {this.state.sum}
            </h2>
         </div>
      )
   }
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<ZapravkaValue/>)