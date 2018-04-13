import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { 
    DropdownButton, MenuItem, SubMenuItem,
    DropdownMenu, DropdownToggle, DropdownToggleProps 
} from 'react-bootstrap';

const DemoDropdownMenu = ({items, handleSelectedValue}) => {
    var menuItems = items.map(function(item) {
        return (
            <MenuItem eventKey={item.id}>
                {item.name}
                {/* <Link to="/">Home</Link> */}
            </MenuItem>
        );
    });
      
    return (
        <DropdownButton bsStyle={"default"} title={"default"} key={1} id={`dropdown-basic-${1}`}>
            {menuItems}
        </DropdownButton>
    );
}

DemoDropdownMenu.propTypes = {
    items: PropTypes.array.isRequired,
    handleSelectedValue: PropTypes.func.isRequired
}

export default DemoDropdownMenu;