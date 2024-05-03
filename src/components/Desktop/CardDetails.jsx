import React from "react";
import Home from "../../assets/Home.png"

const CardDetails=(props)=>{
    const { valueNumber, usage,header,caption } = props;
    return(
        <div style={{borderBottomWidth:3, paddingBottom:10}}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", gap:110}}>
                <div style={{display:"flex", flexDirection:"row",alignItems:"center"}}>
                    <div >
                        <img src={Home} width={80}/>
                    </div>
                    <div>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-700" style={{fontFamily: 'Goldman'}}>{header}</h3>
                        </div>
                        <div style={{ width:"50vw"}}>
                            <h3 className="text-xl font-bold text-neutral-700" style={{fontFamily: 'Goldman'}}>{caption}</h3>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <div>
                        <p className="text-xl font-bold text-neutral-700" style={{fontFamily: 'Goldman'}}>{usage}</p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-neutral-700" style={{fontFamily: 'Goldman'}}>{valueNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails;