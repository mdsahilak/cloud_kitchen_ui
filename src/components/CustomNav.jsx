import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const CustomNav = (props) => {
    const loggedIn = localStorage.getItem('token') != null

    const onButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem('token')
            props.setLoggedIn(false)
            window.location = '/'
        } else {
            window.location = '/login';
        }
    }

    return (
        <Navbar sticky='top' bg="light" data-bs-theme="light">
            <Navbar.Brand className='ms-3' href="/">
                MX Cloud Kitchen
            </Navbar.Brand>
            <Nav >
                <Nav.Link href="/fooditems">Menu</Nav.Link>
                <Nav.Link href="/kitchens">Kitchens</Nav.Link>
                <Nav.Link href="/drivers">Drivers</Nav.Link>
                <Nav.Link href="/reviews">Reviews</Nav.Link>
                <Nav.Link href="/orders">Orders</Nav.Link>
            </Nav>

            <Button className='ms-auto me-3' variant="outline-dark" onClick={onButtonClick}
            >{loggedIn ? 'Log out' : 'Log in'}</Button>
        </Navbar>
    )
}

export default CustomNav