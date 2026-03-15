import { useState, useEffect } from "react";

export default function useStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/students/")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return students;
}