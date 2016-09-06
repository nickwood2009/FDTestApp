import React, {PropTypes} from 'react';
import { Link, IndexLink  } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/produce" activeClassName="active">Produce</Link>
        </nav>
    );
};

export default Header;