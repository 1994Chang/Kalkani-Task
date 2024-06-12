import axios from "axios";


// const apiKey = process.env.REACT_APP_API_KEY;
// const apiUrl = process.env.REACT_APP_API_URL;
// console.log(apiKey,"apikey")
 export const getInitialData = async() =>{
        try {
            const res = await axios(`https://api.jikan.moe/v4/characters?page=1&limit=15&q=&order_by=favorites&sort=desc`);
            return res;
        } catch (error) {
            console.log(error);
        }
    }


    export const fetchNewData = async(searchTerm) =>{
        console.log(searchTerm,"searchterm")
        try {
            const res = await axios(`https://api.jikan.moe/v4/characters?page=1&limit=15&q=${searchTerm}&order_by=favorites&sort=desc`);
            return res;
        } catch (error) {
            console.log(error);
        }
    }