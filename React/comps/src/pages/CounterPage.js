import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const reducer = (state, action) => {
    return {
        ...state,
        count: state.count + 1
    };
};

export default function CounterPage({ initialCount }) {
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        dispatch();
    };

    const decrement = () => {
        // setCount(count - 1);
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd)
        // setValueToAdd(0);
    };

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button primary outline onClick={increment}>
                    Increment
                </Button>
                <Button primary outline onClick={decrement}>
                    Decrement
                </Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input value={state.valueToAdd || ""} onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" />
                <Button outline>Add it!</Button>
            </form>
        </Panel>
    );
}