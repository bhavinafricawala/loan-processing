import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, TextField } from "@mui/material";

const steps = [
  "Personal Info",
  "Contact Info",
  "Financial Details",
  "Loan Selection",
  "Upload Documents",
  "Review & Submit",
];

const LoanApplication = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [personalInfo, setPersonalInfo] = useState({
    fname: "",
    lname: "",
    dob: "",
    ssn: "",
  });
  const [contactInfo, setContactInfo] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
  });
  const [financialDetails, setFinancialDetails] = useState({
    income: "",
    employmentStatus: "",
    creditScore: "",
  });
  const [loanSelection, setLoanSelection] = useState({
    loanAmount: "",
    loanTerm: "",
    interestRate: "",
  });
  const [documents, setDocuments] = useState("");

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);

    if (activeStep === 5) {
      alert("Application Submitted Successfully!");
      handleReset();
    }
  };
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  const handleReset = () => {
    setActiveStep(0);
    setPersonalInfo({
      fname: "",
      lname: "",
      dob: "",
      ssn: "",
    });
    setContactInfo({
      address: "",
      city: "",
      state: "",
      zip: "",
      email: "",
      phone: "",
    });
    setFinancialDetails({
      income: "",
      employmentStatus: "",
      creditScore: "",
    });
    setLoanSelection({
      loanAmount: "",
      loanTerm: "",
      interestRate: "",
    });
    setDocuments("");
  };

  return (
    <div style={{ width: "50%", margin: "auto", padding: "20px" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div style={{ marginTop: "20px" }}>
        {activeStep === 0 && (
          <>
            <TextField
              label="First Name"
              fullWidth
              margin="normal"
              value={personalInfo.fname}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, fname: e.target.value })
              }
            />
            <TextField
              label="Last Name"
              fullWidth
              margin="normal"
              value={personalInfo.lname}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, lname: e.target.value })
              }
            />
            <TextField
              label="Date of Birth"
              fullWidth
              margin="normal"
              value={personalInfo.dob}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, dob: e.target.value })
              }
            />
            <TextField
              label="SSN"
              fullWidth
              type="number"
              margin="normal"
              value={personalInfo.ssn}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, ssn: e.target.value })
              }
            />
          </>
        )}
        {activeStep === 1 && (
          <>
            <TextField
              label="Address"
              fullWidth
              margin="normal"
              value={contactInfo.address}
              onChange={(e) =>
                setContactInfo({ ...contactInfo, address: e.target.value })
              }
            />
            <TextField
              label="City"
              fullWidth
              margin="normal"
              value={contactInfo.city}
              onChange={(e) =>
                setContactInfo({ ...contactInfo, city: e.target.value })
              }
            />
            <TextField
              label="State"
              fullWidth
              margin="normal"
              value={contactInfo.state}
              onChange={(e) =>
                setContactInfo({ ...contactInfo, state: e.target.value })
              }
            />
            <TextField
              label="Zip Code"
              fullWidth
              type="number"
              margin="normal"
              value={contactInfo.zip}
              onChange={(e) =>
                setContactInfo({ ...contactInfo, zip: e.target.value })
              }
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={contactInfo.email}
              onChange={(e) =>
                setContactInfo({ ...contactInfo, email: e.target.value })
              }
            />
            <TextField
              label="Phone"
              fullWidth
              type="number"
              margin="normal"
              value={contactInfo.phone}
              onChange={(e) =>
                setContactInfo({ ...contactInfo, phone: e.target.value })
              }
            />
          </>
        )}

        {activeStep === 2 && (
          <>
            <TextField
              label="Income"
              fullWidth
              margin="normal"
              value={financialDetails.income}
              onChange={(e) =>
                setFinancialDetails({
                  ...financialDetails,
                  income: e.target.value,
                })
              }
            />
            <TextField
              label="Employment Status"
              fullWidth
              margin="normal"
              value={financialDetails.employmentStatus}
              onChange={(e) =>
                setFinancialDetails({
                  ...financialDetails,
                  employmentStatus: e.target.value,
                })
              }
            />
            <TextField
              label="Credit Score"
              fullWidth
              margin="normal"
              value={financialDetails.creditScore}
              onChange={(e) =>
                setFinancialDetails({
                  ...financialDetails,
                  creditScore: e.target.value,
                })
              }
            />
          </>
        )}

        {activeStep === 3 && (
          <>
            <TextField
              label="Loan Amount"
              fullWidth
              margin="normal"
              value={loanSelection.loanAmount}
              onChange={(e) =>
                setLoanSelection({
                  ...loanSelection,
                  loanAmount: e.target.value,
                })
              }
            />
            <TextField
              label="Loan Term (Months)"
              fullWidth
              margin="normal"
              value={loanSelection.loanTerm}
              onChange={(e) =>
                setLoanSelection({ ...loanSelection, loanTerm: e.target.value })
              }
            />
            <TextField
              label="Interest Rate"
              fullWidth
              margin="normal"
              value={loanSelection.interestRate}
              onChange={(e) =>
                setLoanSelection({
                  ...loanSelection,
                  interestRate: e.target.value,
                })
              }
            />
          </>
        )}

        {activeStep === 4 && (
          <input
            type="file"
            onChange={(e) => setDocuments(e.target.files[0].name)}
          />
        )}

        {activeStep === 5 && (
          <div>
            <h4>Review Your Details:</h4>
            <p>
              <strong>Name:</strong> {personalInfo.fname} {personalInfo.lname}
            </p>
            <p>
              <strong>Date of Birth:</strong> {personalInfo.dob}
            </p>
            <p>
              <strong>SSN:</strong> {personalInfo.ssn}
            </p>
            <p>
              <strong>Address:</strong> {contactInfo.address},{" "}
              {contactInfo.city}, {contactInfo.state}, {contactInfo.zip}
            </p>
            <p>
              <strong>Email:</strong> {contactInfo.email}
            </p>
            <p>
              <strong>Phone:</strong> {contactInfo.phone}
            </p>
            <p>
              <strong>Income:</strong> {financialDetails.income}
            </p>
            <p>
              <strong>Employment Status:</strong>{" "}
              {financialDetails.employmentStatus}
            </p>
            <p>
              <strong>Credit Score:</strong> {financialDetails.creditScore}
            </p>
            <p>
              <strong>Loan Amount:</strong> {loanSelection.loanAmount}
            </p>
            <p>
              <strong>Loan Term:</strong> {loanSelection.loanTerm}
            </p>
            <p>
              <strong>Interest Rate:</strong> {loanSelection.interestRate}
            </p>
            <p>
              <strong>Documents:</strong> {documents}
            </p>
          </div>
        )}

        <div style={{ marginTop: "20px" }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoanApplication;
