import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const sems = [1, 2, 3, 4, 5, 6];

const App = () => {
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [phoneNo1, setPhone1] = useState("");
  const [phoneNo2, setPhone2] = useState("");
  const [sem, setSem] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [, setUpdate] = useState(null);

  const submitData = () => {
    if (
      name !== "" &&
      studentClass !== "" &&
      phoneNo1 !== "" &&
      phoneNo2 !== "" &&
      sem.length === 6
    ) {
      const data = {
        name,
        studentClass,
        phoneNo1,
        phoneNo2,
        sem,
      };
      studentData.push(data);
      setStudentData(studentData);
      setName("");
      setStudentClass("");
      setPhone1("");
      setPhone2("");
      setSem(["", "", "", "", "", ""]);
      setUpdate({});
    } else {
      alert("Please enter all the details");
    }
  };

  return (
    <div className="container">
      <h1>Add Student Details</h1>
      <div className="w-60">
        <div className="row">
          <div className="col">
            <label className="form-label">Student Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <label className="form-label">Student Class</label>
            <input
              type="text"
              className="form-control"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="form-label">Phone No (primary)</label>
            <input
              type="number"
              className="form-control"
              value={phoneNo1}
              onChange={(e) => setPhone1(e.target.value)}
            />
          </div>
          <div className="col">
            <label className="form-label">Phone No (Alternate)</label>
            <input
              type="number"
              className="form-control"
              value={phoneNo2}
              onChange={(e) => setPhone2(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-3 mb-3">
          <h4>Marks</h4>
          <div className="row">
            {sems.map((data, key) => (
              <div className="col" key={key}>
                <label className="form-label">Semister {data}</label>
                <input
                  className="form-control"
                  value={sem[key]}
                  type="number"
                  onChange={(e) => {
                    sem[key] = e.target.value;
                    setSem(sem);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <button className="btn btn-primary m-3" onClick={submitData}>
          Submit
        </button>
      </div>
      <h1>List of students</h1>
      <div className="mb-5">
        {studentData.length > 0 &&
          studentData.map((data, key) => (
            <div className="mb-3">
              <div className="card" key={key}>
                <div className="m-3">
                  <p>
                    <span>Student Name</span> - {data.name}
                  </p>
                  <p>
                    <span>Student Class</span> - {data.studentClass}
                  </p>
                  <p>
                    <span>Phone Number (primary)</span> - {data.phoneNo1}
                  </p>
                  <p>
                    <span>Phone Number (Alternate)</span> - {data.phoneNo2}
                  </p>
                  <div className="row">
                    <div className="col">
                      <p>Semester 1</p>
                    </div>
                    <div className="col">
                      <p>Semester 2</p>
                    </div>
                    <div className="col">
                      <p>Semester 3</p>
                    </div>
                    <div className="col">
                      <p>Semester 4</p>
                    </div>
                    <div className="col">
                      <p>Semester 5</p>
                    </div>
                    <div className="col">
                      <p>Semester 6</p>
                    </div>
                  </div>
                  <div className="row">
                    {data.sem.map((marks, key) => (
                      <div className="col" key={key}>
                        <p>{marks}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
