import React, {useState} from "react";
import { useEffect } from "react";
import "../css/Animation.css";
import axios from "axios";
import Video1 from "../Videos/Video-1.mp4";
import Video2 from "../Videos/Video-2.mp4";
import Video3 from "../Videos/Video - 3.mp4";
import { useStateContext } from "../ContextProvider/ContextProvider";
export default function Animation(){
    const [data, setData] = useState();
    const {scrollPos} = useStateContext();
    const [videoNum, setVideoNum] = useState(1);
    const [position, setPosition] = useState("static");

    useEffect(()=>{
        async function dataset(){
            const datatoSet = await axios({
                method: "get",
                url: "https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1"
            })
            const result = datatoSet.data;
            setData(result);
        }
        dataset();
    }, [])

    useEffect(()=>{
        if(scrollPos >=460 && scrollPos < 960){
            setVideoNum(1);
        }
        else if(scrollPos >= 960 && scrollPos < 1460){
            setVideoNum(2);
        }
        else{
            setVideoNum(3);
        }
    }, [scrollPos])

    useEffect(()=>{
        
        const time = setInterval(() => {
            if(scrollPos >= 460) 
                setPosition("fixed");
            else
                setPosition("static");
        }, 0);
        return () => clearInterval(time);
    })

    
    
    return(
        <div>
            <div>
                <div style={{display: "inline-block", width: "500px"}}>
                    <div style={{backgroundColor: "white", marginLeft: "25px", marginTop: "100px"}}>
                        <h5>{data!==undefined?<span className="text1">{data.texts[0].heading}</span>:"Hello"}</h5>
                        <h2>{data!==undefined?data.texts[0].subHeading: "World"}</h2>
                        <p>{data!==undefined?data.texts[0].description: "describe"}</p>
                    </div>
                    <div style={{backgroundColor: "white", marginLeft: "25px", marginTop: "280px"}}>
                        <h5>{data!==undefined?<span className="text1">{data.texts[1].heading}</span>:"Hello"}</h5>
                        <h2>{data!==undefined?data.texts[1].subHeading: "World"}</h2>
                        <p>{data!==undefined?data.texts[1].description: "describe"}</p>
                    </div>
                    <div style={{backgroundColor: "white", marginLeft: "25px", marginTop: "280px", marginBottom: "280px"}}>
                        <h5>{data!==undefined?<span className="text1">{data.texts[2].heading}</span>:"Hello"}</h5>
                        <h2>{data!==undefined?data.texts[2].subHeading: "World"}</h2>
                        <p>{data!==undefined?data.texts[2].description: "describe"}</p>
                    </div>
                </div>
                <div style={{display: "inline-block",position: position, borderRadius: "2%", top: "50px"}}>
                    <div style={{marginBottom : "50px", marginLeft: "10px", borderRaius: "2%"}}>
                        {videoNum === 1&&<video width="500px" height="500px" style={{marginLeft: "200px", borderRadius: "2%"}} autoPlay loop muted playsInline className="video">
                            <source src={Video1} type="video/mp4"/>
                        </video>}
                        {videoNum === 2 && <video width="500px" height="500px" style={{marginLeft: "200px", borderRadius: "2%"}} autoPlay loop muted playsInline className="video">
                            <source src={Video2} type="video/mp4"/>
                        </video>}
                        {videoNum === 3 && <video width="500px" height="500px" style={{marginLeft: "200px", borderRadius: "2%"}} autoPlay loop muted playsInline className="video">
                            <source src={Video3} type="video/mp4"/>
                        </video>}
                </div>
            </div>
        </div>    
        </div>
    )
}