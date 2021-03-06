import React from "react";
import './Home.css';
import {Link} from 'react-router-dom';

class Home extends React.Component {

    state = {
        searchValue: '',
        display: true
    }
    handleBar =(e) =>{
        //get user input
        this.setState({searchValue : e.target.value});
    }
    handleSearch =() => {
        //get passed data from parent comppnet
        this.props.performSerch(this.state.searchValue);
    }
    handleBrowse=()=>{
        //get passed data from parent comppnet
        this.props.performBrowse();
    }

 render() {

    return (
        <div>
            <div className = 'banner'
                style = {{ background: `url(background.jpg)`,
                height: '800px',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                }}>
                <div className='homeContainer'>
                    <h1 className='brand'>Movie Browser</h1>
                    <form>
                        <label className='title'>Movie Name: </label>
                        <input className='input' type="text" placeholder="Search.." 
                                onChange={this.handleBar}/>
                    </form>
                    <div>
                        <Link to='/browse'>
                            <button className = 'btn' onClick = {this.handleSearch}>Display Matching Movies</button>
                        </Link>
                        <Link to='/browse'>
                            <button className = 'btn' onClick = {this.handleBrowse}>Show All Movies</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
 }
}
export default Home