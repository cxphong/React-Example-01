import './Feature.css';

function Feature(props) {
    return (
        <div className="div_feature">
            <h2>{props.title}</h2>
            <p className="text_feature">{props.content}</p>
        </div>
    );
}

export default Feature;