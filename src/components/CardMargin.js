import React,{useEffect} from "react";
import NativeMargin from "../js/NativeMargin";

function CardMargin(props) {

    let {children, targetMargin, id} = props;

    useEffect(()=>{
        if (targetMargin) {
            NativeMargin("#"+id);
        }
    });

    return(
        <div id={id} data-negative-margin={targetMargin}>
            {children}
        </div>
    )
}

export default CardMargin