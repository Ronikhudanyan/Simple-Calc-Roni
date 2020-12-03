import React, { Component } from 'react'

class Calculator extends Component {

    //the beginning value of the state and numbers is 0.
    state= {
        total: 0,
        num1:0,
        num2:0
      }



      setNum=(e, num)=>{
        console.log(e.target.value)
        //the num is being given the target value, which is set  by the user.
        this.setState({
            [num]:e.target.value
        })
      }



      //Addition
      getTotal=()=>{
        const sumTotal = parseInt(this.state.num1)+parseInt(this.state.num2)  
        this.setState({
            //num1:0 and num2:0 resets the values to 0 once button is pressed. In addition,its giving us the total.
            num1:0,
            num2:0,
            total: sumTotal
        })
      }

        //Subtraction
      minusTotal=()=>{
        const subTotal = parseInt(this.state.minusNum1)-parseInt(this.state.minusNum2)  
        this.setState({
            //num1:0 and num2:0 resets the values to 0 once button is pressed. In addition,its giving us the total.
            minusNum1:0,
            minusNum2:0,
            total2: subTotal
        })
      }

      //Multiply
      multiplyTotal=()=>{
        const multiTotal = parseInt(this.state.multiplyNum1)*parseInt(this.state.multiplyNum2)  
        this.setState({
            //num1:0 and num2:0 resets the values to 0 once button is pressed. In addition,its giving us the total.
            multiplyNum1:0,
            multiplyNum2:0,
            total3: multiTotal
        })
      }

     


    render() {
        return (
            <div className="container">

                {/* Addition */}
                 <div className="add">
                 <h1>Addition</h1>
                    <input type="number" name="num1" placeholder="enter first number" value={this.state.num1} onChange= {(e) => this.setNum (e, 'num1')} />
                    <span>+</span>
                     <input type="number" name="num2" placeholder="enter second number" value={this.state.num2} onChange= {(e) => this.setNum(e, 'num2')} />
                    <button onClick={this.getTotal}>=</button>
                    <h3>Addition results go here!</h3>
                    <p> {this.state.total}</p>
                </div>

                {/* subtract */}
                 <div className="subtract">
                 <h1>Subtraction</h1>
                    <input type="number" name="minusNum1" placeholder="enter digit" value={this.state.minusNum1} onChange= {(e) => this.setNum (e, 'minusNum1')} />
                    <span>-</span>
                     <input type="number" name="MinusNum2" placeholder="enter digit" value={this.state.minusNum2} onChange= {(e) => this.setNum(e, 'minusNum2')} />
                    <button onClick={this.minusTotal}>=</button>
                    <h3>subtraction results go here!</h3>
                    <p> {this.state.total2}</p>
                </div>

                 {/* multiply */}
                 <div className="multiply">
                 <h1>Multiply</h1>
                    <input type="number" name="multiplyNum1" placeholder="enter digit" value={this.state.multiplyNum1} onChange= {(e) => this.setNum (e, 'multiplyNum1')} />
                    <span>*</span>
                     <input type="number" name="multiplyNum2" placeholder="enter digit" value={this.state.multiplyNum2} onChange= {(e) => this.setNum(e, 'multiplyNum2')} />
                    <button onClick={this.multiplyTotal}>=</button>
                    <h3>Multiplication results go here!</h3>
                    <p> {this.state.total3}</p>
                </div>

                 


            </div>
        )
    }
}


export default Calculator