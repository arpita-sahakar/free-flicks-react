import './App.css';
import Row from "./container/Row";
import requests from './requests';
import Banner from "./container/Banner.jsx";
import NavBar from './container/NavBar';


function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner netflixOriginalsUrl={requests.netflixOriginals}/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.netflixOriginals} isLargeRow={true} />
      {/* <Row title="trending" fetchUrl={requests.trending}/> */}
      <Row title="Top Rated" fetchUrl={requests.topRated} />
      <Row title="Action Movies" fetchUrl={requests.action} />
      <Row title="Comedy Movies" fetchUrl={requests.comedy} />
      <Row title="Horror Movies" fetchUrl={requests.horror} />
      {/* <Row title="Romantic Movies" fetchUrl={requests.topRromanticated} /> */}
      <Row title="Documentries" fetchUrl={requests.documentries} />
    </div>
  );
}

export default App;
