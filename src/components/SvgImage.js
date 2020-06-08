import React,{useEffect} from "react";
import $ from "jquery";
import SvgInjector from "../js/SvgInjector";


function SvgImage(props) {
    props = typeof props == "object" && props instanceof Object ? props : {};
    let {image, alt, id} = props;
    id = typeof id == "string" && id.trim().length ? id : null;
    alt = typeof alt == "string" && alt.trim().length ? alt : "alt";
    image = typeof image == "string" && image.trim().length ? image : null;
    if (!image) return null;

    useEffect(()=>{
        $(window).on("load", function () {
            SvgInjector("#"+id);
        })
    });

    return(<img id={id} src={image} alt={alt} />)
}

export default SvgImage;