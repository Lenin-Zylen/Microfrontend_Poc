import React, { useEffect, useState } from "react";
import "./Separator.css"

const MediSeparator = ({align="horizontal",thick="2px",color="#e8242b",length="20px",top="0px"}) => {
    const [custStyle,setCustStyle] = useState({});
    useEffect(()=>{
        if(align!=="horizontal"){
            setCustStyle({
                borderLeft: `${thick} solid ${color}`,
                height: length,
                width: "1px",
                borderBottom: "none",
                marginTop:top
            })
        }else{
            setCustStyle({
                borderBottom: `${thick} solid ${color}`,
                marginTop:top
            })
        }
    },[])
    return <>
     <div style={custStyle}>
     </div>
    </>
}

export default MediSeparator;