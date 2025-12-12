import './Home.css';
import photo from './photo/1.png'; 
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="text">
          <h2>Hello</h2>
          <h2>I'm Ahmad Elattar</h2>
          <h1>Software Developer.</h1>
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
          <li>Bootstrap</li> 
          <li>TypeScript</li> 
          <li>React</li>
          <li>Node.js</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  );
}
