import React from "react";

const EmployeeCard = (props) => {
  const { name: keywords } = props; // Assuming keywords are provided in 'name'

  const containsKeywords =
    keywords.length !== 0 &&
    keywords
      .split(/\s+/)
      .some((keyword) =>
        props.data.name.toLowerCase().includes(keyword.toLowerCase())
      );

  return !keywords ? (
    <div className="employee-card">
      <p className="title">EMP ID</p>
      <p className="title">:</p>
      <p>{props.data.empid}</p>
      <p className="title">Name</p>
      <p className="title">:</p>
      <p>{props.data.name}</p>
      <p className="title">DOB</p>
      <p className="title">:</p>
      <p className="dob">{props.data.dob}</p>
      <p className="title">Role</p>
      <p className="title">:</p>
      <p className="pos">{props.data.role}</p>
      <div className="card-id">
        <p>{props.data.empid}</p>
      </div>
    </div>
  ) : (
    containsKeywords && (
      <div className="employee-card">
        <p className="title">EMP ID</p>
        <p className="title">:</p>
        <p>{props.data.empid}</p>
        <p className="title">Name</p>
        <p className="title">:</p>
        <p>{props.data.name}</p>
        <p className="title">DOB</p>
        <p className="title">:</p>
        <p className="dob">{props.data.dob}</p>
        <p className="title">Role</p>
        <p className="title">:</p>
        <p className="pos">{props.data.role}</p>
        <div className="card-id">
          <p>{props.data.empid}</p>
        </div>
      </div>
    )
  );
};

export default EmployeeCard;
