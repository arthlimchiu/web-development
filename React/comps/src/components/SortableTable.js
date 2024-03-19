import { useState } from 'react';
import Table from './Table';

export default function SortableTable({ data, config }) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const handleClick = (label) => {
        console.log(label);
    };

    const updatedConfig = config.map((column) => {
        if(!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th onClick={() => handleClick(column.label)}>{column.label} IS SORTABLE</th>
        };
    });

    const keyFn = (fruit) => {
        return fruit.name;
    };

    return (
        <div>
            <Table data={data} config={updatedConfig} keyFn={keyFn} />
        </div>
    );
}