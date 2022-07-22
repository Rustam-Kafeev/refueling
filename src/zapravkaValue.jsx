import React from 'react';
import "./styles/style.css"

class ZapravkaValue extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         input: '',
         sum: 'Итого :'
      }
      this.handleChange = this.handleChange.bind(this)
      this.submitClick = this.submitClick.bind(this)
      this.clearInput = this.clearInput.bind(this)
      this.handleEnter = this.handleEnter.bind(this)
      this.handleKeyPress = this.handleKeyPress.bind(this)
   }
   handleChange(e) {
      this.setState({
         input: e.target.value
      })
   }

   clearInput() {
      this.setState({
         input: ""
      })
   }
   submitClick() {
      this.setState(state => {
         if (/\D+/.test(this.state.input)) {
            return {
               sum: "Только числа больше 0"
            }
         }
         if (this.state.input > 500) {
            return {
               sum: `Итого : ${this.state.input * 2 + 200} рублей!`
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

   componentDidMount() {
      const input = document.querySelector('input')
      input.addEventListener("keydown", this.handleKeyPress)
   }
   componentWillUnmount() {
      const input = document.querySelector('input')
      input.removeEventListener("keydown", this.handleKeyPress)
   }
   handleEnter() {
      this.submitClick()
   }
   handleKeyPress(event) {
      if (event.keyCode === 13) {
         this.handleEnter()
      } else if (event.keyCode === 27) {
         this.clearInput()
      }
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
         <div >
            <h2 style={{
               fontSize: 20
            }}>Расчет стоимости заправки </h2>
            <input
               tabIndex={2}
               className='input'
               type="number"
               value={this.state.input}
               onChange={this.handleChange}
               placeholder="Впишите объем фреона в граммах" />
            <button
               tabIndex={3}
               onClick={this.clearInput} style={{ padding: 4, marginLeft: 5 }}>
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
               onClick={this.submitClick}>
               Посчитать
            </button>

            <br />
            <h2 style={h2Style}>
               {this.state.sum}
            </h2>
         </div>
      )
   }
}
export default ZapravkaValue