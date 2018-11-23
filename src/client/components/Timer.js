import React, { Component } from 'react';
import moment from 'moment';
import { Button } from 'reactstrap';
import parseMs from 'parse-ms';

import Layout from '../common/Layout';

function parseTimer(time) {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
}


export default function withTimer(WrappedComponent) {

  return class Timer extends Component {

    constructor(props) {
      super(props)
      this.state = {
        startTime: null,
        endTime: null,
        time: 0,
        isOn: false,
      }
      this.startTimer = this.startTimer.bind(this);
      this.stopTimer = this.stopTimer.bind(this);
      this.resetTimer = this.resetTimer.bind(this);
    }

    startTimer() {
      this.setState({
        isOn: true,
        time: this.state.time,
        startTime: Date.now() - this.state.time,
      })
      this.timer = setInterval(() => this.setState({
        time: Date.now() - this.state.startTime
      }), 1);
    }

    stopTimer() {
      this.setState({
        isOn: false,
        endTime: Date.now(),
      })
      clearInterval(this.timer);
    }

    resetTimer() {
      this.setState({
        time: 0,
        startTime: 0,
        endTime: 0,
        isOn: false
      });
    }

    render() {

      const {startTime, endTime, isOn, time} = this.state

      const startTimeFormatted = startTime ? moment(startTime).format('LTS') : null;
      const endTimeFormatted = endTime ? moment(endTime).format('LTS') : null;

      const isDisabled = time !== 0 && isOn == true
      const start = <Button onClick={this.startTimer} color="success"
                            disabled={isDisabled}>{time === 0 ? 'Start' : 'Resume'}</Button>
      const stop = (time === 0 || !isOn)
        ? <Button onClick={this.resetTimer} color="danger">Reset</Button>
        : <Button onClick={this.stopTimer} color="danger">Stop</Button>

      const { hours, minutes, seconds } = parseMs(time);

      return (
        <Layout>
          <div className="timer">
            <div>
              {startTimeFormatted} <br/>
              {start}
            </div>
            <div className="countdown">
              {parseTimer(hours)}:
              {parseTimer(minutes)}:
              {parseTimer(seconds)}
            </div>
            <div>
              {endTimeFormatted} <br/>
              {stop}
            </div>
          </div>
          <WrappedComponent {...this.props}/>
        </Layout>
      )
    }
  }
}


