import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup} from 'reactstrap';

function Menus()
{
    return(
        <ListGroup> 
            <Link className='list-group-item' tag='a' to='/' action>Home</Link>
            <Link className='list-group-item' tag='a' to='/Add-Courses' action>Add Courses</Link>
            <Link className='list-group-item' tag='a' to='/All-Courses' action>View Courses</Link>
            <Link className='list-group-item' tag='a' to='/About-Us' action>About Us</Link>    
            <Link className='list-group-item' tag='a' to='Contact-Us' action>Contact Us</Link>    
        </ListGroup>
    );
}
export default Menus;