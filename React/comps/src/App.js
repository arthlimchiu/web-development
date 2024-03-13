import Accordion from './components/Accordion';

export default function App() {
    const items = [
        {
            label: 'Can I use React on a project?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis turpis vel ex vulputate consequat. Cras sed imperdiet tortor. Donec vulputate accumsan varius. Vivamus metus tortor, vehicula nec lacus sed, porta pulvinar nisi. Ut euismod cursus blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut tempor nunc pellentesque porta auctor.'
        },
        {
            label: 'Can I use React on a project?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis turpis vel ex vulputate consequat. Cras sed imperdiet tortor. Donec vulputate accumsan varius. Vivamus metus tortor, vehicula nec lacus sed, porta pulvinar nisi. Ut euismod cursus blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut tempor nunc pellentesque porta auctor.'
        },
        {
            label: 'Can I use React on a project?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis turpis vel ex vulputate consequat. Cras sed imperdiet tortor. Donec vulputate accumsan varius. Vivamus metus tortor, vehicula nec lacus sed, porta pulvinar nisi. Ut euismod cursus blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut tempor nunc pellentesque porta auctor.'
        }
    ];

    return (
        <Accordion items={items} />
    );
}