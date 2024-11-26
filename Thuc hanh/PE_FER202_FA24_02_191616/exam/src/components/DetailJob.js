import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";

function DetailJob() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
  const job = jobs.find((job) => job.jobId === jobId);
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [updatedJob, setUpdatedJob] = useState(job);

  if (!job) {
    return <p>Job not found</p>;
  }

  const handleDelete = () => {
    const updatedJobs = jobs.filter((job) => job.jobId !== jobId);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("salary.")) {
      const salaryField = name.split(".")[1];
      setUpdatedJob({
        ...updatedJob,
        salary: { ...updatedJob.salary, [salaryField]: Number(value) },
      });
    } else {
      setUpdatedJob({ ...updatedJob, [name]: value });
    }
  };

  const handleUpdateJob = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || updatedJob.salary.amount <= 0) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      const updatedJobs = jobs.map((job) =>
        job.jobId === jobId ? updatedJob : job
      );
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
      setShowModal(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="col-md-6 mb-3 mt-3">
        <h1>Job Detail</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{job.title}</h5>
            <p className="card-text">
              <strong>Company:</strong> {job.company}
            </p>
            <p className="card-text">
              <strong>Location:</strong> {job.location}
            </p>
            <p className="card-text">
              <strong>Description:</strong> {job.description}
            </p>
            <p className="card-text">
              <strong>Requirements:</strong>
            </p>
            <p className="card-text">
              <strong>Salary:</strong> {job.salary.currency} {job.salary.amount}
            </p>
            <p className="card-text">
              <strong>Employment Type:</strong> {job.employmentType}
            </p>
            <p className="card-text">
              <strong>Posted Date:</strong> {job.postedDate}
            </p>
            <p className="card-text">
              <strong>Application Deadline:</strong> {job.applicationDeadline}
            </p>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Update
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleUpdateJob}>
            <Form.Group controlId="formJobId">
              <Form.Label>Job ID</Form.Label>
              <Form.Control
                type="text"
                name="jobId"
                value={updatedJob.jobId}
                onChange={handleInputChange}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                name="title"
                value={updatedJob.title}
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
                value={updatedJob.company}
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
                value={updatedJob.location}
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
                value={updatedJob.description}
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
                value={updatedJob.requirements}
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
                value={updatedJob.salary.amount}
                onChange={handleInputChange}
                isInvalid={updatedJob.salary.amount <= 0}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a salary amount greater than 0.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formEmploymentType">
              <Form.Label>Employment Type</Form.Label>
              <Form.Control
                required
                type="text"
                name="employmentType"
                value={updatedJob.employmentType}
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
                value={updatedJob.postedDate}
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
                value={updatedJob.applicationDeadline}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide an application deadline.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Update Job
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DetailJob;
