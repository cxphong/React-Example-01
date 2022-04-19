import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import './Footer.css';
import FooterItem from './FooterItem';
import FooterSection from './FooterSection';

function Footer() {
    return(
        <Row className="container_footer">
        <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{padding: "20px"}}>
            <FooterSection section="Docs" />
            <FooterItem title="Get Started" hasIcon={false}/>
            <FooterItem title="Learn React" hasIcon={true}/>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{padding: "20px"}}>
            <FooterSection section="Community" />
            <FooterItem title="Stack Overflow" hasIcon={true}/>
            <FooterItem title="GitHub Discussions" hasIcon={true}/>
            <FooterItem title="Twitter" hasIcon={true}/>
            <FooterItem title="Contributor Covenant" hasIcon={true}/>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{padding: "20px"}}>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <FooterSection section="Social" />
                <FooterItem title="Github" hasIcon={true}/>
            </Col>
        </Col>
    </Row>
    );
}

export default Footer;