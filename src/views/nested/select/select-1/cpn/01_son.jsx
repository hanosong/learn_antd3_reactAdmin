import React, { PureComponent } from "react";

export class Son extends PureComponent {
  componentDidMount() {
    this.props.getCostListItem(this);
  }
  render() {
    return (
      <div>
        <h2>aaaa</h2>
      </div>
    );
  }
}

export default Son;
