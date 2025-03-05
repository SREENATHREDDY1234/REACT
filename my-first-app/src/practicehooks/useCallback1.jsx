import React from "react";

const Button = ({ children, functionHandle }) => {
    console.log(children);
    return (<button onClick={functionHandle}>{children}</button>);
};

export default React.memo(Button);