import { useCallback, useState } from "react";
import "./practice.css";
import Button from "./useCallback1.jsx"

const App = () => {
    const [number, setNumber] = useState(0);
    const [salary, setSalary] = useState(1000);

    const incrementcount = useCallback(() => {
        setNumber(number + 1);
    }, [number]);

    const incrementsalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);

    return (
        <div className="container-1">
            <h1>Counter: {number}</h1>
            <h1>Salary: {salary}</h1>
            <Button functionHandle={incrementcount} >increment count</Button>
            <Button functionHandle={incrementsalary}>increment salary</Button>
        </div>
    );
};

export default App;
