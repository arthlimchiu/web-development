import { useState } from 'react';
import Dropdown from './components/Dropdown';

export default function App() {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { label: 'Red', value: 'red'},
        { label: 'Green', value: 'green'},
        { label: 'Blue', value: 'blue'},
    ];

    const onChangeSelectedOption = (newOption) => {
        setSelectedOption(newOption);
    };

    return (<Dropdown options={options} value={selectedOption} onChange={onChangeSelectedOption} />);    
}