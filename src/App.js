import {useEffect} from 'react';
import Layout from "./component/Layout/Layout";
import Router from "./routes";
import './App.css';


const App = () => {
  useEffect(() => {
    document.body.style = 'background: url("/images/home/homeTb.jpg") no-repeat'
  }, [])
  return (
    
    <Layout>
      <Router />
    </Layout>
    
  );
};

export default App;
