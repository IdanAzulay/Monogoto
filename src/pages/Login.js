import React , {Component}  from 'react';
// import { useHistory } from "react-router-dom";
import axios from 'axios'
import { withRouter } from 'react-router-dom'    




// Use Hooks in Class based component
export const Comp = withRouter(({ history, location }) =>{

})

export default class Login extends Component {
    
    


    constructor(props){
        super(props)

        this.state = {
            symbols: [],
            isAuth: false,
            errorMsg: "",
            top: [],
            refreshed: ""
        }

    }
    // Initial / Set popular symbols
    componentDidMount() {

        axios.get('http://localhost:1880/getMostHigh')
        .then(response => {
            console.log(response);
            this.setState({top: response.data})
            console.log(this.state.top);
    })
}

    // Refresh Database

    refreshSymbols = e => {
        e.preventDefault();
        axios.get("http://localhost:1880/newSymbols")
        .then(response => {
            this.setState({refreshed: "Symbols refreshed"})
            console.log("Symbols refreshed");
    })
    }

    // Login function , Validate for positive symbol and redirect to the Data page.
     handleClick = e => {
            e.preventDefault();

            const data = {
                passkey : this.passkey
            };

            axios.get("http://localhost:1880/login?passkey="+this.passkey+"")
        .then(response => {
            this.setState({symbols: response.data})

            if(response.data.length > 3){
                this.setState({isAuth: true})
                this.props.history.push("/symbols");}
                else{
                    this.setState({errorMsg: "Wrong passkey"})
                }

        })
        .catch(error =>{
            console.log(error);

        })
      }



      render(){
        const { location, history } = this.props
        const { top } = this.state

        
    return (

        <div>
            <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form onSubmit={this.handleClick} >
        <h3>Login Here</h3>

        <label for="passkey">passkey</label>
        <input type="text" placeholder="passkey" onChange={ e => this.passkey = e.target.value }  />

        <button > Log In </button>
        <a href="/" onClick={this.refreshSymbols} > Refresh Symbols  </a><br></br><br></br>
        <span style={{color:"green"}} >{this.state.refreshed} <a href="/" >Refresh </a>
 </span><br></br>


       <span style={{color:"red", fontSize:"24px"}} >{this.state.errorMsg}</span><br></br>
       <span style={{color:"lightblue" , fontSize:"24px"}}>5 popular Symbols</span><br></br><br></br>

       {top.map((val) => (
             
        <div style={{color:"lightgray" , textAlign:"left"}} > {val.symbol} - {val.priceChange}</div>
                      
           ))}


    </form>
        
        </div>
        
    )
}
}
