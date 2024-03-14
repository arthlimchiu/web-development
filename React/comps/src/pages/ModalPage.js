import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

export default function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <Button primary onClick={handleClose}>I Accept</Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept</p>
    </Modal>;

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc orci, feugiat sit amet nunc euismod, malesuada tempor purus. Maecenas at egestas nunc, sit amet pellentesque lorem. Nulla commodo erat dui, eget gravida ipsum imperdiet ac. Ut sollicitudin felis ipsum, sed placerat neque posuere vel. Mauris suscipit viverra odio et fermentum. Cras dictum id turpis in laoreet. Suspendisse placerat dui at tincidunt feugiat. Curabitur ac ligula vitae lectus ultricies ultricies. Donec a mauris sagittis risus lacinia tincidunt. Nam ex sapien, luctus a gravida eget, consequat non ante.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc orci, feugiat sit amet nunc euismod, malesuada tempor purus. Maecenas at egestas nunc, sit amet pellentesque lorem. Nulla commodo erat dui, eget gravida ipsum imperdiet ac. Ut sollicitudin felis ipsum, sed placerat neque posuere vel. Mauris suscipit viverra odio et fermentum. Cras dictum id turpis in laoreet. Suspendisse placerat dui at tincidunt feugiat. Curabitur ac ligula vitae lectus ultricies ultricies. Donec a mauris sagittis risus lacinia tincidunt. Nam ex sapien, luctus a gravida eget, consequat non ante.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc orci, feugiat sit amet nunc euismod, malesuada tempor purus. Maecenas at egestas nunc, sit amet pellentesque lorem. Nulla commodo erat dui, eget gravida ipsum imperdiet ac. Ut sollicitudin felis ipsum, sed placerat neque posuere vel. Mauris suscipit viverra odio et fermentum. Cras dictum id turpis in laoreet. Suspendisse placerat dui at tincidunt feugiat. Curabitur ac ligula vitae lectus ultricies ultricies. Donec a mauris sagittis risus lacinia tincidunt. Nam ex sapien, luctus a gravida eget, consequat non ante.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc orci, feugiat sit amet nunc euismod, malesuada tempor purus. Maecenas at egestas nunc, sit amet pellentesque lorem. Nulla commodo erat dui, eget gravida ipsum imperdiet ac. Ut sollicitudin felis ipsum, sed placerat neque posuere vel. Mauris suscipit viverra odio et fermentum. Cras dictum id turpis in laoreet. Suspendisse placerat dui at tincidunt feugiat. Curabitur ac ligula vitae lectus ultricies ultricies. Donec a mauris sagittis risus lacinia tincidunt. Nam ex sapien, luctus a gravida eget, consequat non ante.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc orci, feugiat sit amet nunc euismod, malesuada tempor purus. Maecenas at egestas nunc, sit amet pellentesque lorem. Nulla commodo erat dui, eget gravida ipsum imperdiet ac. Ut sollicitudin felis ipsum, sed placerat neque posuere vel. Mauris suscipit viverra odio et fermentum. Cras dictum id turpis in laoreet. Suspendisse placerat dui at tincidunt feugiat. Curabitur ac ligula vitae lectus ultricies ultricies. Donec a mauris sagittis risus lacinia tincidunt. Nam ex sapien, luctus a gravida eget, consequat non ante.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc orci, feugiat sit amet nunc euismod, malesuada tempor purus. Maecenas at egestas nunc, sit amet pellentesque lorem. Nulla commodo erat dui, eget gravida ipsum imperdiet ac. Ut sollicitudin felis ipsum, sed placerat neque posuere vel. Mauris suscipit viverra odio et fermentum. Cras dictum id turpis in laoreet. Suspendisse placerat dui at tincidunt feugiat. Curabitur ac ligula vitae lectus ultricies ultricies. Donec a mauris sagittis risus lacinia tincidunt. Nam ex sapien, luctus a gravida eget, consequat non ante.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc orci, feugiat sit amet nunc euismod, malesuada tempor purus. Maecenas at egestas nunc, sit amet pellentesque lorem. Nulla commodo erat dui, eget gravida ipsum imperdiet ac. Ut sollicitudin felis ipsum, sed placerat neque posuere vel. Mauris suscipit viverra odio et fermentum. Cras dictum id turpis in laoreet. Suspendisse placerat dui at tincidunt feugiat. Curabitur ac ligula vitae lectus ultricies ultricies. Donec a mauris sagittis risus lacinia tincidunt. Nam ex sapien, luctus a gravida eget, consequat non ante.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc orci, feugiat sit amet nunc euismod, malesuada tempor purus. Maecenas at egestas nunc, sit amet pellentesque lorem. Nulla commodo erat dui, eget gravida ipsum imperdiet ac. Ut sollicitudin felis ipsum, sed placerat neque posuere vel. Mauris suscipit viverra odio et fermentum. Cras dictum id turpis in laoreet. Suspendisse placerat dui at tincidunt feugiat. Curabitur ac ligula vitae lectus ultricies ultricies. Donec a mauris sagittis risus lacinia tincidunt. Nam ex sapien, luctus a gravida eget, consequat non ante.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc orci, feugiat sit amet nunc euismod, malesuada tempor purus. Maecenas at egestas nunc, sit amet pellentesque lorem. Nulla commodo erat dui, eget gravida ipsum imperdiet ac. Ut sollicitudin felis ipsum, sed placerat neque posuere vel. Mauris suscipit viverra odio et fermentum. Cras dictum id turpis in laoreet. Suspendisse placerat dui at tincidunt feugiat. Curabitur ac ligula vitae lectus ultricies ultricies. Donec a mauris sagittis risus lacinia tincidunt. Nam ex sapien, luctus a gravida eget, consequat non ante.
            </p>
        </div>
    );
}