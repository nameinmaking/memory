import React from 'react';
import { Button } from 'reactstrap';

export default class ClickMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { side: props.side };
  }

  setSide(side) {
    this.setState({side: side});
  }

  render() {
    if (this.state.side == 0) {
      return (
        <div className="row">
          <div id="side-0" className="side col" onMouseOver={ () => this.setSide(1) }>
            <Button onClick={ () => alert("cheater") }>Click Me</Button>
          </div>
          <div id="side-1" className="side col">
            &nbsp;
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="row">
          <div id="side-0" className="side col">
            &nbsp;
          </div>
          <div id="side-1" className="side col" onMouseOver={ () => this.setSide(0) }>
            <Button onClick={ () => alert("cheater") }>Click Me</Button>
          </div>
        </div>
      );
    }
  }
}
