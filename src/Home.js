import './Home.css';
import photo from './photo/1.png'; 
import Header from './components/Header';
export default function Home() {
  return (
    <div>
      <Header />
    <div className="home">
      <div className="text">
        <h1 style={{fontSize:"50px"}}> Hello </h1>
        <h2 style={{fontSize:"40px"}}> I'm Ahmad </h2>
        <h2 style={{fontSize:"70px"}}>Software developer.</h2>
      </div>
      <div className="image">
        <img src={photo} alt="Profile" className="profile-img" />
      </div>
    </div>
      <div className='skills'>
        <ul className='skills-list'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li> 
        <li>bootstrap</li> 
        <li>React</li>
        <li>Node.js</li>
        <li>git</li>
        </ul>
    </div>
    </div>
  );
}
