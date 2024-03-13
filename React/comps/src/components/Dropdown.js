import { useState } from 'react';

export default function Dropdown({ options, selectedOption, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option) => {
        setIsOpen(false);
        onSelect(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
        );
    });

    return (
        <div>
            <div onClick={handleClick}>{selectedOption ? selectedOption.label : 'Select...'}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
}