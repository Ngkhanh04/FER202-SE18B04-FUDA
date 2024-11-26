import React, { useState, useEffect } from 'react';

export const applicantData = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: { street: '123 Main St', city: 'Anytown', state: 'CA', zipCode: '12345' },
    education: [{ degree: 'B.Sc. Computer Science', institution: 'University of Example', yearOfGraduation: 2020 }],
    workExperience: [
      {
        company: 'Tech Solutions Inc.',
        position: 'Software Developer',
        startDate: '2021-01-15',
        endDate: '2023-06-30',
        responsibilities: ['Developed and maintained web applications', 'Collaborated with cross-functional teams to define project requirements'],
      },
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'SQL'],
  },
  {
    id: 2,
    firstName: 'Emily',
    lastName: 'Johnson',
    email: 'emily.johnson@example.com',
    phone: '+1234567892',
    address: { street: '456 Elm St', city: 'Othertown', state: 'TX', zipCode: '67890' },
    education: [{ degree: 'M.Sc. Information Technology', institution: 'Institute of Example', yearOfGraduation: 2018 }],
    workExperience: [
      {
        company: 'Innovative Solutions Ltd.',
        position: 'IT Consultant',
        startDate: '2019-03-01',
        endDate: '2022-12-31',
        responsibilities: ['Provided IT consulting services to clients', 'Implemented software solutions and managed projects'],
      },
    ],
    skills: ['Python', 'Django', 'Machine Learning', 'Project Management'],
  },
];

const ApplicantManagement = () => {
  const [applicants, setApplicants] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: { street: '', city: '', state: '', zipCode: '' },
    education: [{ degree: '', institution: '', yearOfGraduation: '' }],
    workExperience: [{ company: '', position: '', startDate: '', endDate: '', responsibilities: [] }],
    skills: [],
  });

  useEffect(() => {
    // Preload applicantData when the component mounts
    setApplicants(applicantData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setApplicants([...applicants, formData]);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: { street: '', city: '', state: '', zipCode: '' },
      education: [{ degree: '', institution: '', yearOfGraduation: '' }],
      workExperience: [{ company: '', position: '', startDate: '', endDate: '', responsibilities: [] }],
      skills: [],
    });
  };

  const updateApplicant = (index, updatedDetails) => {
    const updatedApplicants = applicants.map((applicant, i) =>
      i === index ? { ...applicant, ...updatedDetails } : applicant
    );
    setApplicants(updatedApplicants);
  };

  const deleteApplicant = (index) => {
    const updatedApplicants = applicants.filter((_, i) => i !== index);
    setApplicants(updatedApplicants);
  };

  return (
    <div>
      <h1>Applicant Management</h1>
      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input name="address.street" placeholder="Street" value={formData.address.street} onChange={handleChange} required />
        <input name="address.city" placeholder="City" value={formData.address.city} onChange={handleChange} required />
        <input name="address.state" placeholder="State" value={formData.address.state} onChange={handleChange} required />
        <input name="address.zipCode" placeholder="Zip Code" value={formData.address.zipCode} onChange={handleChange} required />
        <button type="submit">Add Applicant</button>
      </form>

      <ul>
        {applicants.map((applicant, index) => (
          <li key={index}>
            {applicant.firstName} {applicant.lastName} - {applicant.email}
            <button onClick={() => updateApplicant(index, { email: 'updated.email@example.com' })}>Update</button>
            <button onClick={() => deleteApplicant(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicantManagement;