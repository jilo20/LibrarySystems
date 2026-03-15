import { useEffect, useState } from "react";

export default function useTransactions(){
    const [transactions, setTransactions] = useState([])

    const fetchTransactions = async () => {
        try{
            const res = await fetch('http://localhost:8000/api/transactions/');
            const data = await res.json();
            setTransactions(data);
        }catch(err){
            console.log(err, ' error po');
        }
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    return { transactions, fetchTransactions };
}