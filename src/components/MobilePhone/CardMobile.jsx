import React from "react";
import Home from "../../assets/Home.png"

const CardMobile=(props)=>{
    const { valueNumber, usage,header,caption } = props;
    return(
        <div style={{paddingBottom:10}}>
            <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <div>
                        <p className="text-sm font-bold text-neutral-700" style={{fontFamily: 'Goldman'}}>{usage}</p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-neutral-700" style={{fontFamily: 'Goldman'}}>{valueNumber}</p>
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"row",alignItems:"center",borderBottomWidth:3, paddingBottom:5}}>
                    <div >
                        <img src={Home} width={80}/>
                    </div>
                    <div>
                        <div>
                            <h3 className="text-sm font-bold text-neutral-700" style={{fontFamily: 'Goldman'}}>{header}</h3>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-neutral-700" style={{fontFamily: 'Goldman'}}>{caption}</h3>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CardMobile;