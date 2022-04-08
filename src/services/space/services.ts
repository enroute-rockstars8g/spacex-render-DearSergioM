export const getRocketsByID = async (id:string) =>{
    try{
    const response = await fetch(`https://api.spacexdata.com/v3/missions/${id}`);
    
    if(response.status !== 200) return;

    const mission = await response.json();
    return mission;
    
    }catch (e){
        console.error(e);
    }
};