import logo from './logo.svg';
import './App.css';
import Announcement from './components/Announcement.js';
import NavigationBar from './components/NavigationBar.js';
import Container from './components/Container';
import Features from './components/Features';
import Footer from './components/Footer';

import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

function App() {
  return (
  	<Layout>
      <Announcement />
      <NavigationBar />
      <Container />
      <Features />
      <Footer />
     </Layout>
  );
}

export default App;
