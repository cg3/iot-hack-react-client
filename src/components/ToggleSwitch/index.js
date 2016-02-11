import React, {Component} from 'react';

export default class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
  }

  render() {
    const active = this.state.active ? 'active' : 'inactive';

    return (<span onClick={this._handleClick.bind(this)} className={`toggle ${active}`}></span>);
  }

  _handleClick() {
    this.setState({
      active: !this.state.active
    });
  }
}
