import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import { getRocketsByID } from '../../services/space/services';

export const Missions: FC = () => {

    const [missionID, setMissionID] = useState<string>("");
    const [actualMission, setActualMission] = useState<any>(undefined);

    useEffect(()=>{
        const firstMission =async () => {
            const newMission = await getRocketsByID(missionID);
            setActualMission(newMission);
        };
        firstMission();
    }, []);

    const getmissionID =(event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.value !== "") setMissionID((event.target.value));
        else setMissionID("");
    };

    const fetchMission = async () => {
        const newMission = await getRocketsByID(missionID);
        setActualMission(newMission);
    };
    

    console.log(actualMission);
    return (  

    <div> 
        

        <div>
            <div className="card">
            <div className="container">
            <h4>   
                <p>Misiones Espaciales</p>
                <p>Busca las siguientes Misiones:</p> 
            </h4> 
        <h3><p>9D1B7E0, F4F83DE, F3364BF, EE86F74, 6C42550, FE3533D, 593B499, CE91D46, 2CF444A, F7709F2</p></h3>
        <input type="text" onChange={getmissionID} />
        <button onClick={fetchMission}>Buscar</button>
            </div>
            </div>  
        </div>
        <br />
        {actualMission !== undefined? (
        <div>
            <div className="card">
            <div className="container">
            <h4><b>Mission: {actualMission.mission_name}</b></h4> 
                <p>Fabricante: {actualMission.manufacturers} </p>
                <p>Descripción: {actualMission.description} </p>
                <p>Cargamento(s): {actualMission.payload_ids} </p>

                <p>Wikipedia: <a target="_blank" href="{actualMission.wikipedia} ">{actualMission.wikipedia}  </a></p>
                <p>Website: <a target="_blank" href="{actualMission.website}">{actualMission.website} </a></p>
                <p>Twitter:  <a target="_blank" href="{actualMission.twitter}">{actualMission.twitter} </a></p>
            </div>
            </div>  
        </div>
        ):null} 


    </div>
    
    )
}
