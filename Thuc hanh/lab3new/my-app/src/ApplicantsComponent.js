import React, { useState } from 'react';

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
    skills: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setApplicants([...applicants, formData]);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', address: { street: '', city: '', state: '', zipCode: '' }, education: [{ degree: '', institution: '', yearOfGraduation: '' }], workExperience: [{ company: '', position: '', startDate: '', endDate: '', responsibilities: [] }], skills: [] });
  };

  const updateApplicant = (index, updatedDetails) => {
    const updatedApplicants = applicants.map((applicant, i) => (i === index ? { ...applicant, ...updatedDetails } : applicant));
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