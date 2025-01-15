import React, { useEffect, useState } from "react";
import { getAllSubmissions } from "../api";

const SubmissionList = () => {
  const [submissions, setSubmissions] = useState([]);
  const [search, setSearch] = useState("");

  const fetchSubmissions = async () => {
    try {
      const { data } = await getAllSubmissions(search);
      setSubmissions(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, [search]);

  return (
    <div>
      <input
        type='text'
        placeholder='Search by name, country, or company'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {submissions.map((submission) => (
          <li key={submission._id}>
            <h3>{submission.name}</h3>
            <p>{submission.country}</p>
            <p>{submission.company}</p>
            <ul>
              {submission.questions.map((q, index) => (
                <li key={index}>{q}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubmissionList;
