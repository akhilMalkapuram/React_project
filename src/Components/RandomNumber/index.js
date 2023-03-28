import {Component} from "react"
import "./index.css"
class RandomNumber extends Component{
    state={number:0}
    onNumber=()=>{
        let randomNumber=Math.random()*100
        this.setState(prevNumber=>({
            number:(Math.ceil(randomNumber))
        }))
    }
    render(){
        const {number}=this.state
        return(
            <div className="bg-container">
                <div className="card-container">
                    <h1 className="heading">Random Number</h1>
                    <p className="text">Generate a random number in the range of 0 to 100</p>
                    <button className="btn" onClick={this.onNumber}>Generate</button>
                    <h1 className="number">{number}</h1>
                </div>
            </div>
        )
    }
}
export default RandomNumber