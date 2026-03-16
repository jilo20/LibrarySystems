import { useState, useEffect } from "react";

export default function useStudents() {
  const [students, setStudents] = useState([]);

  const fetchTrasactions = async(e) => {

    fetch("http://127.0.0.1:8000/api/students/")
      .then(res => res.json())
      .then(data => setStudents(data));
  }

  useEffect(() => {
    fetchTrasactions();
  }, []);

  return {students, fetchTrasactions};
}