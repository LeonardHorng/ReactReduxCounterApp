import React, {Component} from 'react'
import Button from '../components/Button'
import {connect} from 'react-redux'
import {incrementCount, decrementCount, refreshCount} from '../actions/index';
import './CounterComponent.css';
import mainLogo from'../img/clapping.gif';
import { Grid, Image, Rail, Segment } from 'semantic-ui-react';

class CounterComponent extends Component{

    handleBtnActionIncrement = () => {
        this.props.onIncrementClick(this.props.count)
    }

    handleBtnActionDecrement = () => {
        this.props.onDecrementClick(this.props.count)
    }

    handleBtnActionRefresh = () => {
        this.props.onRefreshClick(this.props.count)
    }


    render() {
        const {count}=this.props;
        const arr = [3,6,9,13,16,19,23,26,29,30,33,36,39,43,46,49,53,56,59,60,63,66,69,73,76,79,83,86,89,90,93,96,99,103,106,109];
        if(arr.includes(count)) {
            return (
                <div className="text-center">
                    <Button className="text-center" action={this.handleBtnActionRefresh} buttonTitle = "Refresh" style="margin-bottom:30px"/>
                    <div className="container">
                        <div className="ui centered three column grid">
                            <div className="column">
                                <div className="ui segment">
                                    <div className="ui left rail">
                                        <div className="ui segment">
                                            <Button action={this.handleBtnActionIncrement} buttonTitle="+"/>
                                        </div>
                                    </div>
                                    <h1><img src={mainLogo} alt=""/></h1>
                                    <div className="ui right rail">
                                        <div className="ui segment">
                                            <Button action={this.handleBtnActionDecrement} buttonTitle="-"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return(
            <div className="text-center">
                <Button className="text-center" action={this.handleBtnActionRefresh} buttonTitle = "Refresh" />
                <div className="container">
                    <div className="ui centered three column grid">
                        <div className="column">
                            <div className="ui segment">
                                <div className="ui left rail">
                                    <div className="ui segment">
                                        <Button action={this.handleBtnActionIncrement} buttonTitle = "+" />
                                    </div>
                                </div>
                                <h1>{count}</h1>
                                <div className="ui right rail">
                                    <div className="ui segment">
                                        <Button action={this.handleBtnActionDecrement} buttonTitle = "-" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
        },
        onRefreshClick: (count) => {
            dispatch(refreshCount(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)