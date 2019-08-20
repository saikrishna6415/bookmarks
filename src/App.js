import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'



class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal:true
    }
  }

  render () {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

export default App