import Player from "./Player";
import MusicList from "./MusicList";
import {useEffect, useState} from "react";
import api from "../helpers/api";
import SongDataContext from "../helpers/context";
import '../style/Main.css'


const Main = () => {
    const [data, setData] = useState([])
    const [ id, setId] = useState(undefined)

    const fetchData = async () => {
        try{
            const res =await api.get('/solo')
            if(res.data){
                setData(res.data.data)
            }
        }catch (e) {
            console.log("Can not retrieve data", e)
        }
    }

    useEffect(() => {
        fetchData()
    },[])


    return(
        <div className='mainContainer'>
            <SongDataContext.Provider value={{ id, setId,data }}>
                <Player />
                <MusicList />
            </SongDataContext.Provider>




        </div>
    )
}

export default Main