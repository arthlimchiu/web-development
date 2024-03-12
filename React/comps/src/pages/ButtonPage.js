import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

export default function ButtonPage() {
    const handleClick = () => {
        console.log('Click!');
    };

    const handleOnMouseOver = () => {
        console.log('Mouse Over!');
    };

    return (
        <div>
            <div>
                <Button primary outline onClick={handleClick} onMouseOver={handleOnMouseOver} className="mb-5">
                    <GoBell />
                    Add to Cart
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    <GoCloudDownload />
                    Buy Now
                </Button>
            </div>
            <div>
                <Button success outline>
                    <GoDatabase />
                    Confirm
                </Button>
            </div>
            <div>
                <Button warning rounded>Proceed</Button>
            </div>
            <div>
                <Button danger outline>Delete</Button>
            </div>
        </div>
    );
}