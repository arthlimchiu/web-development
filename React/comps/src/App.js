import Dropdown from './components/Dropdown';

export default function App() {
    const options = [
        { label: 'Red', value: 'red'},
        { label: 'Green', value: 'green'},
        { label: 'Blue', value: 'blue'},
    ];

    return (<Dropdown options={options} />);    
}