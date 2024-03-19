import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EntriesPage = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('https://code-snippet-f9p8.onrender.com/api/entries');
        setEntries(response.data);
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };
    fetchEntries();
  }, []);

  return (
    <div>
      <h2>Submitted Entries</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Code Language</th>
            <th>Stdin</th>
            <th>Timestamp</th>
            <th>Source Code</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <tr key={entry._id}>
              <td>{entry.username}</td>
              <td>{entry.codeLanguage}</td>
              <td>{entry.stdin}</td>
              <td>{new Date(entry.timestamp).toLocaleString()}</td>
              <td>{entry.sourceCode.substring(0, 100)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EntriesPage;
