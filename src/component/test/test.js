import react, { useEffect, useState } from "react";
import './test.css'

export function Test(){
        // const [text,setText] = useState(false);
    // const [butlab, setBtnlab] = useState('Click Me');
    const [username,setUserName] = useState([]);
    useEffect(()=>{
        fetchData((error,data)=>{
            if(error){
                console.error(error);
            }else {
                const userNames = data.map(e=> e.username);
                setUserName(userNames);

            }
        })
    },[username])
   const fetchData= async(callback)=>{
        const url = 'https://jsonplaceholder.typicode.com/users';
      await fetch(url).then( async response => {
        callback(null,await response.json())
      }).catch((err)=>{
        callback(err,null)
      })
    
    }

    // const onbuttonClick=()=>{
    //     setText (!text?true:false);
    //     setBtnlab(showlabel => showlabel === "Click Me"?'Clicked':"Click Me");
    // }
    return (
        <div className="mycontent">
        {/* <button className="mybutton" onClick={()=>onbuttonClick()}>{butlab}</button>
        <h1>{text?"React Training":"Training"}</h1> */}
        <h2>Below are the User Name List....</h2>
        <div className="mytable">
        <table className="table">
            <thead>
            <tr>
                <th>UserName</th>
            </tr></thead>
            <tbody>
                {
                username.map((e,index)=> (
                        <tr key={index}>
                            <td>{e}</td>
                        </tr>
                ))
                
            }
            </tbody>
            
        </table>

        </div>
        </div>
    )

}