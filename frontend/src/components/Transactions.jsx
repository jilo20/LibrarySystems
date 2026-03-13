import { useEffect, useState } from "react";

export default function useTransactions(){
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/transactions/')
            .then(res=>res.json())
            .then(data=>setTransactions(data))
            .catch(err=>console.log(err, ' error po'));
    }, []);

    return transactions;
}