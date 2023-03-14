import {  useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
import api from "../../../http/api";
import { selectAuth } from "../../../store/selector/auth";


const TapContentYear = () => {
    const [year, setYear] = useState([])
    const authState = useAppSelector(selectAuth);

    const YearStatistic = year.filter(el => {
        return el.uniqueId === authState.profile.uniqueId
    })
    console.log(year.filter(el => {
        return el.id === authState.profile.id
    }))
    
    const yearTotal = YearStatistic.map(el => {
        return el.total_count ? el.total_count : 0
    })



    useEffect(() => {
        api.get('users/save-contact/counts/?count_filter_period=year').then(({ data }) => {
            setYear(data)
        })
    }, [])




    return (
        <>
            <div className="red" style={{
                width: ' 350px',
                height: '180px',
                background: '#262E33',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
                textAlign: 'center',
                fontSize: '45px',
                fontWeight: 400,
                color: '#fff',
                fontFamily: 'Montserrat',
            }}>{yearTotal}<h1 style={{
                color: '#fff',
                fontSize: '14px',
                fontWeight: 400,
                paddingLeft: '15px'
            }}>people saved you</h1></div>



        </>
    )

}
export default TapContentYear