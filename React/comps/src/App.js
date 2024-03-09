import Button from './Button';

function App() {
    return (
        <div>
            <div>
                <Button primary outline>Add to Cart</Button>
            </div>
            <div>
                <Button secondary outline>Buy Now</Button>
            </div>
            <div>
                <Button success outline>Confirm</Button>
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

export default App;