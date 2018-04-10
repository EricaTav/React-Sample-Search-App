import React from 'react'
import Footer from './Footer';

class App extends React.Component {


  constructor(props) {
    super(props)
  }

    render() {
    return (
      <div id='main' className={this.props.theme}>
          <img id="dummy_logo" src='../../src/images/dummy-logo.png' />
          <img id="finCompare_logo" src='../../src/images/finCompare_Logo.png'/>
          <hr/>

          <main className="main-content">
              {this.props.children}
          </main>

          <Footer/>
      </div>
    )
  }
}

export default App
