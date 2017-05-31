import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { selectItem } from "../action-creators/select-item";

const mapStateToProps = (state) => {
    return { items: state.items };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectItem }, dispatch);
};

class List extends Component {
    render() {
        return (
            <ul className="list-group">
                { this.getList() }
            </ul>
        );
    }

    getList() {
        return this.props.items.map(item => <li key={ item.id } className="list-group-item" onClick={() => this.props.selectItem(item)}>{ item.name }</li>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);