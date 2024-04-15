import { useSelector } from 'react-redux';

export default function CarList() {
    const cars = useSelector((state) => {
        return state.cars.data;
    });

    return (<div>CarList</div>)
}