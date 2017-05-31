import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => { return { selectedItem: state.selectedItem }; };

const ItemDetail = (props) => {
    if (!props.selectedItem) { return null; }
    return (
        <div>
            <h1>{ props.selectedItem.name }</h1>
            <p>{ props.selectedItem.description }</p>
        </div>
    );
}

export default connect(mapStateToProps, null)(ItemDetail);