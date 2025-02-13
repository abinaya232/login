import React, { useState } from "react";

const MarksEntryPage = () => {
  const [numStudents, setNumStudents] = useState(1);
  const subjects = ["Subject 1", "Subject 2", "Subject3", "Subject 4", "Subject 5"];
  const [marks, setMarks] = useState({});

  const handleMarksChange = (studentIndex, subject, value) => {
    setMarks({
      ...marks,
      [`${studentIndex}-${subject}`]: value,
    });
  };

  return (
    <div className="marks-container">
      <h2>Enter Marks</h2>

      <label>Number of Students:</label>
      <select
        value={numStudents}
        onChange={(e) => setNumStudents(parseInt(e.target.value) || 1)}
      >
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            <th>Student</th>
            {subjects.map((subject, index) => (
              <th key={index}>{subject}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(numStudents)].map((_, studentIndex) => (
            <tr key={studentIndex}>
              <td><strong>Student {studentIndex + 1}</strong></td>
              {subjects.map((subject, subjectIndex) => (
                <td key={subjectIndex}>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={marks[`${studentIndex}-${subject}`] || ""}
                    onChange={(e) =>
                      handleMarksChange(studentIndex, subject, e.target.value)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarksEntryPage;
