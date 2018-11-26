import React, {Component} from 'react';
import '../assets/style/header.css';
class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='header'>
                <h2>react+mapbox地图展示</h2>
            </div>
        );
    }
}

export default Header;