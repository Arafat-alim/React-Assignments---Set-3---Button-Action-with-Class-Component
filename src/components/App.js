import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClick: false,
      //   message: "",
    };
  }
	
onChange() {
    this.setState({
      isClick: !this.state.isClick,
      message:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy",
    });
    // this.setState({
    //   message:
    //     "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy",
    // });
  }

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
  	<p id="para">{this.state.message}</p>
        ) : (
          <p id="para">Change Me</p>
        )}

        <button onClick={() => this.onChange()}>Click Me</button>
	
	
    		</div>
    	);
    }
}


export default App;

