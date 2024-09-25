const root = ReactDOM.createRoot(document.getElementById('root'));

// const studentNum = 17

// const name = 'Leighton'

const phoneNumber = '613-555-1234'

const studentList = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Paul'
    },
    {
        id: 2,
        firstName: 'Mary',
        lastName: 'Sue'
    },
    {
        id: 3,
        firstName: 'Fanny',
        lastName: 'Mae'
    },
    {
        id: 3,
        firstName: 'John',
        lastName: 'Mark'
    },
    {
        id: 5,
        firstName: 'Jane',
        lastName: 'Doe'
    }
];

function Greeting (props) {
    /*
    if (props.name) {
        return <h1>Welcome back, {props.name}</h1>
    }
    */

    const students = props.students;

    if (students.length) {
        return students.map((student, index) =>  <li className="student-marker" key={index}>{student.firstName + ' ' + student.lastName}</li>)
    }

    return <h1>Welcome back, student.</h1>
}

const Heading = ({ title, name, number }) => {
    return <h1>Good Evening, { title + ' ' + name + ': ' + number  }</h1>
}

// root.render(<h2>There are: { studentNum + 100 } students present.</h2>);
// root.render(<p>Hello, { name + ' Rodney' }</p>);

// root.render(<Heading name="Leighton" title="Prof." number={phoneNumber} />);

root.render(<Greeting students={studentList} />);

