import { Button } from 'antd';
import 'antd/dist/antd.css';
import './Container.css';

function Container() {

    return (
        <div className="div_container">
            <img className="img_container" src="https://create-react-app.dev/img/logo.svg"/>
            <h1 className="header_container">Create React App</h1>
            <p className="text_container">Set up a modern web app by running one command.</p>
            <button className="button_container">Get Started</button>
        </div>
    );


}

export default Container;