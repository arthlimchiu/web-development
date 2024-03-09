import Button from './Button';

function App() {
    return (
        <div>
            <div>
                <Button primary>Add to Cart</Button>
            </div>
            <div>
                <Button secondary>Buy Now</Button>
            </div>
            <div>
                <Button success>Confirm</Button>
            </div>
            <div>
                <Button warning>Proceed</Button>
            </div>
            <div>
                <Button danger>Delete</Button>
            </div>
        </div>
    );
}

export default App;