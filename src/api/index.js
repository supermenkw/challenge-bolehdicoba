import axios from 'axios';

const baseURL = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(baseURL);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    const { data } = await axios.get(`${baseURL}/daily`);

    return data.map(({ confirmed, deaths, reportDate }) => ({ confirmed: confirmed.total, deaths: deaths.total, reportDate }));;
}