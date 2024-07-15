// UserReport.js
import React, { useEffect, useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Report from './Report';

const UserReport = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost/server_react/report.php')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check the received data
        setUsers(data);
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div>
      <h1>User Report</h1>
      <PDFViewer width="100%" height="600">
        <Report users={users} />
      </PDFViewer>
    </div>
  );
};

export default UserReport;
