import "./NavigationBar.css";
import 'antd/dist/antd.css';

function NavigationBar() {
  return (
  	<div className="nav_bar">
		<button type="button" className="overflow-btn">
			<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path></svg>
		</button>

		<a href="/" className="nav_title">
			<img className="nav_logo" src="https://create-react-app.dev/img/logo.svg"/>
			<b>Create React App</b>
		</a>

		<div className="nav_menu_items">
			<a className="nav_item">Docs</a>
			<a className="nav_item">Help</a>
			<a className="nav_item">Github</a>
		</div>
		
  	</div>
  );
}

export default NavigationBar;
