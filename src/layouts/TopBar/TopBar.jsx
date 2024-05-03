import React from "react";
import CurveLayout from "../CurveLayout/CurveLayout";

const TopBar=({children})=>{
    return(
        <CurveLayout>
            {children}
        </CurveLayout>
    )
}

export default TopBar;