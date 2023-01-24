import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Aession= ()=>{

    const usenavigate=useNavigate();

    useEffect(()=>{
        let username = sessionStorage.getItem('username');
        if(username ===''|| username===null){
            usenavigate('/home');
        }
    },[]);
}
