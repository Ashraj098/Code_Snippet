// FormPage.js
import React, { useState } from 'react';
import axios from 'axios';

const FormPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    codeLanguage: 'JavaScript',
    stdin: '',
    sourceCode: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/submit', formData);
      alert('Code snippet submitted successfully!');
      setFormData({
        username: '',
        codeLanguage: 'JavaScript',
        stdin: '',
        sourceCode: ''
      });
    } catch (error) {
      console.error('Error submitting code snippet:', error);
    }
  };

  return (
    <div>
      <h2>Submit Code Snippet</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="codeLanguage">Preferred Language:</label>
          <select
            id="codeLanguage"
            name="codeLanguage"
            value={formData.codeLanguage}
            onChange={handleChange}
          >
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
          </select>
        </div>
        <div>
          <label htmlFor="stdin">Standard Input:</label>
          <input
            type="text"
            id="stdin"
            name="stdin"
            value={formData.stdin}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="sourceCode">Source Code:</label>
          <textarea
            id="sourceCode"
            name="sourceCode"
            value={formData.sourceCode}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
