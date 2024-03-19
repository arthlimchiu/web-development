import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table from './Table';
import useSort from '../hooks/use-sort';

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>;
    }

    if (sortOrder === null) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>;
    } else if (sortOrder === 'asc') {
        return <div>
            <GoArrowSmallUp />
        </div>;
    } else if (sortOrder === 'desc') {
        return <div>
            <GoArrowSmallDown />
        </div>;
    }
}

export default function SortableTable({ data, config, keyFn }) {
    const { sortOrder, sortBy, sortedData, sortColumn } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if(!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => sortColumn(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            )
        };
    });

    return (
        <Table data={sortedData} config={updatedConfig} keyFn={keyFn} />
    );
}