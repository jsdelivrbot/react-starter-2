import React, { Component } from "react";

import List from "./list";
import ItemDetail from "./item-detail";

export default class App extends Component {
    render() {
        return <div className="row">
            <div className="col-sm-4"><List/></div>
            <div className="col-sm-8"><ItemDetail/></div>
        </div>
    }
}