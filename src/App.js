import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'



class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal:true,
      bookmarks:[]
    }
  }

  addbookmark = (bookmark) => {
    this.setState(state => ({
      bookmarks: [...state.bookmarks, bookmark]
    }))
  }

  render () {
    return (
      <div>
        <Header />
        <Main bookmarks={this.state.bookmarks}/>
      </div>
    )
  }
}

export default App