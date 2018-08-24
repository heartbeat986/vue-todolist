import axios from "axios"
import { baseUrl } from "./env"



var instance = axios.create({
    baseURL: baseUrl,
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Bmob-Application-Id':'0ed68335a9bb6dfe33c7dfa7b0fcfd1c',
        'X-Bmob-REST-API-Key':'2ef7ca828ece164063a9dde8652cc933'
    }
  });

const get = (params,url) =>{
    console.log(axios);
    url = baseUrl + url;
    return instance.get(url,params).then((res)=>{
        return res.data
    });
}


const post = (params,url) =>{
    url = baseUrl + url;
   return instance.post(url,params).then((res)=>{
    return res.data
   });
}

export default {
    get,
    post
}
