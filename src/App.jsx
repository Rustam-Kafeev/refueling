import React from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import Counter from './component/Counter';
import "./styles/style.css"

class App extends React.Component {
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
      
      return (
         <div className='conteiner'>
            <Header />
          <div className='flex'>
               <Main />
               <Counter handleChange={this.handleChange} 
               input={this.state.input} 
               clearInput={this.clearInput} 
               submitClick={this.submitClick} 
               sum={this.state.sum}/> 
          </div>        
            <Footer/>
         </div>
      )
   }
}
export default App