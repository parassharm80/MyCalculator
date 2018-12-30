import React from "react";
import "./Screen.css";
import PropTypes from "prop-types";
class Screen extends React.Component{
    render(){
        return(
            <div className="screen">
            <div>{this.props.value}</div>
            </div>
        )
    }
}
Screen.propTypes={
    value:PropTypes.string
};
export default Screen;