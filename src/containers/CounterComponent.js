import React, {Component} from 'react'
import Button from '../components/Button'
import {connect} from 'react-redux'
import {incrementCount, decrementCount} from '../actions/index'
import './CounterComponent.css';
import mainLogo from'../img/clapping.gif';

class CounterComponent extends Component{

handleBtnActionIncrement = () => {
  this.props.onIncrementClick(this.props.count)
}

handleBtnActionDecrement = () => {
  this.props.onDecrementClick(this.props.count)
}


render() {
  const {count}=this.props;
  const arr = [3,6,9,13,16,19,23,26,29,30,33,36,39,43,46,49,53,56,59,60,63,66,69,73,76,79,83,86,89,90,93,96,99,103,106,109];
    if(arr.includes(count)) {
        return (
            <div>
                  <Button class="ui primary button" action={this.handleBtnActionIncrement} buttonTitle = "+" />
                  <Button class="ui secondary button" action={this.handleBtnActionDecrement} buttonTitle = "-" />
                <h1><img src={mainLogo} alt=""/></h1>
            </div>
        );
    }
  return(
    <div>
          <Button class="ui primary button" action={this.handleBtnActionIncrement} buttonTitle = "+" />
          <Button class="ui secondary button" action={this.handleBtnActionDecrement} buttonTitle = "-" />
        <h1 class="container">{count}</h1>
    </div>
  )
}
}


const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: (count) => {  
      dispatch(incrementCount(count))
    },
    onDecrementClick: (count) => {
      if(count !== 0) 
      dispatch(decrementCount(count))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)