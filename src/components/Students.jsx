import React from 'react'

const Students = ({name, age, grade, image}) => {
  return (
    <div className='student-card'>
        <div className='student-info'>
        <h2>{name}</h2>
        <p> Age: {age}</p>
        <p>Grade: {grade}</p> </div>

        <img src= {image} alt={"student"} className='student-img'/></div>
  );
};

export default Students;
