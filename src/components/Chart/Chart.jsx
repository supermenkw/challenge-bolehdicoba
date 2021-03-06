import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line } from 'react-chartjs-2';
import styles from './Chart.module.css';


const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    },[]);

    const LineChart = (
        dailyData.length ?
        (<Line 
            data={{
                labels: dailyData.map(({ reportDate }) => reportDate),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'infected',
                    borderColor: 'blue',
                    fill: true
                },
                {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }]
            }}
        />) : null
    )

    return (
        <div className={styles.container}>
            {LineChart}
        </div>
    );
}

export default Chart;