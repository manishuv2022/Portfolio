import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import '../styles/home.css';


const profile_links = ['Writing', 'Track', 'Github', 'Twitter', 'LinkedIn', 'Email'];

function Home() {
  const [login, setLogin] = useState(localStorage.getItem('login')==="true"?true: false);
  const navigate = useNavigate();

  const ToggleLogState = ()=>{
    setLogin((value)=>{
      value = !value;
      localStorage.setItem('login', value);
      return(value);
    })
  }

    return(<div className='home-root'>
      <div className="home-container">
        {login?
        <>
          <div className='header-container'>
            <h1 className='header-text'>Hey, I'm Manish ;)</h1>
            <p className='bio'>I create product and companies, Innovation is my passion.</p>
            <div className='subscribe-button' onClick={ToggleLogState}>Log Out</div>
          </div>
          <hr/>
          <div className='profile-link-container'>
          {
            profile_links.map((item)=>{
              return(<div className='profile-link-item' key={item}>{item}</div>)
            })
          }
        </div>
        </>:
        <>
        <div className='header-container'>
          <h1 className='header-text'>Please Sign In To Account</h1>
          <div className='subscribe-button' onClick={ToggleLogState}>Sign In</div>
        </div>
        </>
        }   
      </div>
    </div>
  );
}

export default Home;