import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Feature from './Feature';
import './Features.css';

function Features() {
    return(
        <Row className="features_conntainer">
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Feature title="Less to Learn" content="You don't need to learn and configure many build tools. Instant reloads help you focus on development. When it's time to deploy, your bundles are optimized automatically."/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Feature title="Only One Dependency" content="Your app only needs one build dependency. We test Create React App to make sure that all of its underlying pieces work together seamlessly – no complicated version mismatches."></Feature>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Feature title="No Lock-In" content="Under the hood, we use webpack, Babel, ESLint, and other amazing projects to power your app. If you ever want an advanced configuration, you can ”eject” from Create React App and edit their config files directly."></Feature>
            </Col>
        </Row>
    );
}

export default Features;