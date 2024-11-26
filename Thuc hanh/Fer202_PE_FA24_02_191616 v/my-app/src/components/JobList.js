import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jobs as initialJobs } from "../store/data";
import { Button, Form, Modal } from "react-bootstrap";

function JobList() {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [...initialJobs].sort((a, b) => b.jobId.localeCompare(a.jobId));
  });
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [newJob, setNewJob] = useState({
    jobId: "",
    title: "",
    company: "",
    location: "",
    description: "",
    requirements: [],
    salary: {
      currency: "USD",
      amount: 0,
    },
    employmentType: "Full-Time",
    postedDate: "",
    applicationDeadline: "",
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("salary.")) {
      const salaryField = name.split(".")[1];
      setNewJob({ ...newJob, salary: { ...newJob.salary, [salaryField]: Number(value) } });
    } else {
      setNewJob({ ...newJob, [name]: value });
    }
  };

  const handleAddJob = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      const updatedJobs = [newJob, ...jobs].sort((a, b) => b.jobId.localeCompare(a.jobId));
      setJobs(updatedJobs);
      setShowModal(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col mt-3 mb-3">
          <h1>Job Listings</h1>
          <Button onClick={() => setShowModal(true)}>Add Job</Button>
        </div>
      </div>
      <ul className="list-group">
        {jobs && jobs.length > 0 ? (
          jobs.map((job) => (
            <li className="list-group-item" key={job.jobId}>
              <h5>{job.title}</h5>
              <p>{job.description}</p>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Salary:</strong> {job.salary.currency} {job.salary.amount}</p>
              <Link to={`/detail-job/${job.jobId}`}>
                <Button>Show Details</Button>
              </Link>
            </li>
          ))
        ) : (
          <li className="list-group-item">
            <p>No job listings available</p>
          </li>
        )}
      </ul>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleAddJob}>
            <Form.Group controlId="formJobId">
              <Form.Label>Job ID</Form.Label>
              <Form.Control
                required
                type="text"
                name="jobId"
                value={newJob.jobId}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a job ID.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                name="title"
                value={newJob.title}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a title.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control
                required
                type="text"
                name="company"
                value={newJob.company}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a company name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                required
                type="text"
                name="location"
                value={newJob.location}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a location.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                type="text"
                name="description"
                value={newJob.description}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a description.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formRequirements">
              <Form.Label>Requirements</Form.Label>
              <Form.Control
                required
                type="text"
                name="requirements"
                value={newJob.requirements}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide requirements.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formSalary">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                required
                type="number"
                name="salary.amount"
                value={newJob.salary.amount}
                onChange={handleInputChange}
              /> 
            </Form.Group>
            <Form.Group controlId="formEmploymentType">
              <Form.Label>Employment Type</Form.Label>
              <Form.Control
                required
                type="text"
                name="employmentType"
                value={newJob.employmentType}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide an employment type.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPostedDate">
              <Form.Label>Posted Date</Form.Label>
              <Form.Control
                required
                type="date"
                name="postedDate"
                value={newJob.postedDate}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a posted date.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formApplicationDeadline">
              <Form.Label>Application Deadline</Form.Label>
              <Form.Control
                required
                type="date"
                name="applicationDeadline"
                value={newJob.applicationDeadline}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide an application deadline.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Job
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default JobList;