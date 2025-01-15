import React, { useState } from "react";
import { createSubmission } from "../api";

const SubmissionForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    company: "",
    questions: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const questionsArray = formData.questions.split("\n");
      await createSubmission({ ...formData, questions: questionsArray });
      onSuccess();
      setFormData({ name: "", country: "", company: "", questions: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='country'
        placeholder='Country'
        value={formData.country}
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='company'
        placeholder='Company'
        value={formData.company}
        onChange={handleChange}
        required
      />
      <textarea
        name='questions'
        placeholder='Questions (one per line)'
        value={formData.questions}
        onChange={handleChange}
        required
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default SubmissionForm;
