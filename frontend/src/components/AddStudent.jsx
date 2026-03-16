import Card from "./Card";
import Button from "./Button";
import useTransactions from "./Transactions";
import useStudents from "./Students";
import useBooks from "./Books";
import { useEffect, useState } from "react";

export default function AddStudent() {
    //states for inputs

    const {students, fetchTrasactions} = useStudents();
    const [studentId, setStudentId] = useState('');
    const [studentName, setStudentName] = useState('');
    const [studentCourse, setStudentCourse] = useState('');
    const [action, setAction] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isStudentExists = students.some((s) => s.studentId === studentId);
        console.log('Student Name: ', studentName);
        console.log('Student ID: ', studentId);
        console.log('Student Course: ', studentCourse);
        
        const studentInfo = {
            studentId: studentId,
            name: studentName,
            course: studentCourse,
        }

        console.log('Action: ', action);

        if(action === 'add'){
            try {
                if(!studentId.trim() || !studentName.trim() || !studentCourse.trim()){alert('Please Fill all the fields'); return;}
                if(isStudentExists) { alert('ID already exists'); return;};
                const response = await fetch('http://localhost:8000/api/students/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(studentInfo)
                })
    
                if(response.ok){ console.log('Success'); fetchTrasactions(); setStudentCourse(''); setStudentId(''),setStudentName('')
                    alert('Student added successfully');
                }
                
            } catch (error) {
                console.log(error, ' whahahahaha');
            }
        } else if (action === 'remove') {
            console.log('remove')
            if (!studentId.trim()) {
                alert('Please enter a Student ID to remove');
                return;
            }

            const confirmDelete = window.confirm(`Are you sure you want to delete student ${studentId}?`);
            if (!confirmDelete) return;

            try {
                const response = await fetch(`http://localhost:8000/api/students/${studentId}/`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (response.ok) {
                    console.log('Student Deleted');
                    alert('Student successfully removed');
                    
                    fetchTrasactions(); 
                    setStudentId('');
                    setStudentName('');
                    setStudentCourse('');
                } else {
                    const errorData = await response.json();
                    alert(`Delete failed: ${errorData.detail || 'Student not found'}`);
                }
            } catch (error) {
                console.error('Error deleting student:', error);
            }
        }

        
    }

    return (
        <div className="w-full min-h-screen flex justify-center pt-30">
            <div>
                <Card
                    stylee={'w-[25em] flex flex-col items-center gap-10 py-12'}
                    animation={false}
                >
                    <p className="text-[2em] font-bold">Add/Remove Student</p>
                    <form 
                    onSubmit={handleSubmit}
                     className="flex flex-col gap-2">
                        <p className="text-gray-800 text-md font-semibold">Student ID</p>
                        <div className="focus:scale-103">
                            <input
                                type="text"
                                className="font-light smooth-avg border border-gray-300 border-b-4 border-b-red-500 rounded-sm text-lg p-2 w-[20em]"
                                value={studentId}
                                onChange={(e)=>setStudentId(e.target.value)}
                            />
                        </div>

                        <p className="text-gray-800 text-md font-semibold">Full Name</p>
                        <div className="focus:scale-103 mb-6">
                            <input
                                type="text"
                                className="font-light smooth-avg border border-gray-300 border-b-4 border-b-red-500 rounded-sm text-lg p-2 w-[20em]"
                                value={studentName}
                                onChange={(e)=>setStudentName(e.target.value)}
                            />
                        </div>

                        <p className="text-gray-800 text-md font-semibold">Course</p>
                        <div className="focus:scale-103 mb-6">
                            <input
                                type="text"
                                className="font-light smooth-avg border border-gray-300 border-b-4 border-b-red-500 rounded-sm text-lg p-2 w-[20em]"
                                value={studentCourse}
                                onChange={(e)=>setStudentCourse(e.target.value)}
                            />
                        </div>
                        
                        <div className="w-full flex justify-around">
                            <Button
                                content={'Add'}
                                variant={'secondarybtn'}
                                stylee={'bg-green-700 text-gray-100'}
                                value="add"
                                isSubmit={true}
                                onClick={() => {setAction('add')}}
                            />

                            <Button
                                content={'Remove'}
                                variant={'secondarybtn'}
                                stylee={'bg-red-500 text-gray-100 hover:bg-red-400'}
                                isSubmit={true}
                                value="remove"
                                onClick={() => {setAction('remove')}}
                            />
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}