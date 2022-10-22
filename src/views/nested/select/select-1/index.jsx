import React, { PureComponent } from "react";
import Son from "./cpn/01_son";
export class Select1 extends PureComponent {
  getCostListItem = (ref) => {
    this.CostListItem = ref;
    console.log(this.CostListItem, "2222");
  };
  render() {
    return (
      <div>
        <Son getCostListItem={this.getCostListItem} />
        <button onClick={this.getCostListItem}>ref</button>
      </div>
    );
  }
}

export default Select1;
