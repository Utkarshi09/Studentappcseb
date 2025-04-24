import React, { useState } from 'react';

function StudentAdmin() {
    const [studentData, setStudentData] = useState([]);

    async function showData(e) {
        e.preventDefault();
        const sid = e.target.sid.value;

        try {
            const response = await fetch(`http://localhost:3005/admin/show?sid=${sid}`);
            const res = await response.json();
            console.log(res.msg);
            setStudentData(res.msg);
        } catch (error) {
            console.error("Error fetching student data:", error);
        }
    }
    function deleteStudent(email) {
        alert(email);
    }
    function updateStudent() {
    }

    return (
        <div>
            <div style={{ backgroundColor: "red", color: "white", fontSize: '25px', margin: '20px' }}>StudentAdmin</div>
            <form onSubmit={showData}>
                <div>
                    <input type='text' name='sid' placeholder='Enter * or Student email' required />
                </div>
                <div>
                    <button>Search Student</button>
                </div>
            </form>

            <div>
                {studentData && studentData.length > 0 ? (
                    <table border="1" style={{ marginTop: '20px', width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentData.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td><button onclick={()=>deleteStudent(student.email)} >Delete</button></td>
                                    <td><button onclick={()=>updateStudent(student.email)} >Update</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <h2>No student available</h2>
                )}
            </div>
        </div>
    );
}

export default StudentAdmin;