import React, { useState } from 'react'; // Giữ import React nếu cần cho JSX
import './App.css'; // Nếu bạn sử dụng tệp CSS này

const STUDENTS = [
  {
    id: 'DE160182',
    name: 'Nguyễn Hữu Quốc Khánh',
    image: '/images/khanh.png',
    address: 'DaNang',
    featured: false,
  },
  // ... các sinh viên khác
];

function App() {
  const [students, setStudents] = useState(STUDENTS);
  const [newStudent, setNewStudent] = useState({ id: '', name: '', address: '', image: '', featured: false });

  // Add student
  const addStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({ id: '', name: '', address: '', image: '', featured: false }); // Reset form
  };

  // Delete student
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Update student
  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((student) => (student.id === updatedStudent.id ? updatedStudent : student))
    );
  };

  return (
    <div>
      <h1>Student CRUD</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <img src={student.image} alt={student.name} width="50" height="50" />
            <p>{student.name}</p>
            <p>{student.address}</p>
            <p>{student.featured ? 'Featured' : 'Not Featured'}</p>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
            <button
              onClick={() => updateStudent({ ...student, name: prompt('Enter new name:', student.name) })}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>

      <h2>Add New Student</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addStudent();
        }}
      >
        <input
          type="text"
          placeholder="ID"
          value={newStudent.id}
          onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={newStudent.address}
          onChange={(e) => setNewStudent({ ...newStudent, address: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newStudent.image}
          onChange={(e) => setNewStudent({ ...newStudent, image: e.target.value })}
        />
        <label>
          Featured:
          <input
            type="checkbox"
            checked={newStudent.featured}
            onChange={(e) => setNewStudent({ ...newStudent, featured: e.target.checked })}
          />
        </label>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default App;
