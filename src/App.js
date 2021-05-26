import React from 'react';
import './App.css';

const people = [
  {
    name: 'Arisa',
    department: 'BP',
    gender: 'F'
  },
  {
    name: 'Ham',
    department: 'IT',
    gender: 'F'
  },
  {
    name: 'Alice',
    department: 'IT',
    gender: 'F'
  },
  {
    name: 'Anna',
    department: 'DA',
    gender: 'F'
  },
  {
    name: 'Larry',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Ria',
    department: 'Sales',
    gender: 'F'
  },
  {
    name: 'JD',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Thor',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Karl',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Rachel',
    department: 'Sales',
    gender: 'F'
  }
];

function App() {
  const [validatedNumber, setValidatedNumber] = React.useState('');
  const [listGender, setListGender] = React.useState(listByGender('M'));
  const groupByDept = groupByDepartment();
  console.log(groupByDept)

  return (
    <div className="App">
      <div>
        <label>Number</label>
        <input
          onChange={e => {
            setValidatedNumber(calculateValidationNumber(e.target.value))
          }}
        />
      </div>
      <div style={{ marginBottom: 30 }}>
        calculateValidationNumber: {validatedNumber}
      </div>
      <div>
        <label>List By Gender</label>
        <select
          onChange={e => {
            setListGender(listByGender(e.target.value));
          }}
        >
          {[{ value: 'M', label: 'Male' }, { value: 'F', label: 'Female' }].map(gender => (
            <option value={gender.value} key={gender.value}>{gender.label}</option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: 30 }}>
        listByGender: {listGender.join(', ')}
      </div>
      <div style={{ marginBottom: 30 }}>
        groupByDepartment: 
      </div>
    </div>
  );
}

function calculateValidationNumber (num) {
  if (isNaN(parseInt(num))) return false;

  let sum = 0, str = (num).toString();
  console.log(typeof num, str.length)
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  if ((sum).toString().length > 1) {
    return calculateValidationNumber(sum);
  } else {
    return sum;
  }
}

function listByGender (gender) {
  return people
    .filter(person => person.gender === gender)
    .map(person => person.name)
}

function groupByDepartment() {
  return people.reduce(function (a, b) {
      a[b.department] = a[b.department] || [];
      a[b.department].push(b);
      return a;
    }, []);
}

export default App;
