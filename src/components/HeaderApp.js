import React from 'react';
import HeaderBar from './HeaderBar.js';
import HeaderMenu from './HeaderMenu.js';

class HeaderApp extends React.Component {
    render() {
    return (
        <header className="header">
            <HeaderBar />
            <HeaderMenu browseSerch={this.props.browseSerch}
                         clearAll={this.props.clearAll}
                         showFilter={this.props.showFilter}/>
        </header>
    );
    }
}
export default HeaderApp;
