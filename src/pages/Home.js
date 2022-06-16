import { useState, useContext } from 'react';
import '../styles/home.css';
import { LinkContext, UserContext } from '../App';




function Home() {
  const [login, setLogin] = useState(localStorage.getItem('login')==="true"?true: false);

  const ToggleLogState = ()=>{
    setLogin((value)=>{
      value = !value;
      localStorage.setItem('login', value);
      return(value);
    })
  }

    return(<div className='home-root'>
      <div className="home-container">
        {login?<LoginView toggle={ToggleLogState}/>:<LogoutView toggle={ToggleLogState}/>}   
      </div>
    </div>
  );
}

export default Home;

const LoginView = ({toggle})=>{
  const {profile_links, pages_links} = useContext(LinkContext);
  const {fullName, age} = useContext(UserContext);
  return(
  <>
    <div className='header-container'>
      <HorizontalList list={pages_links}/>
      <h1 className='header-text'>Hey, I'm <span style={{color:'red'}}>{fullName}</span> ;)</h1>
      <p className='bio'>I create product and companies, Innovation is my passion. My age is {age}.</p>
      <div className='subscribe-button' onClick={toggle}>Log Out</div>
    </div>
    <hr/>
    <HorizontalList list={profile_links}/>
  </>)
}

const LogoutView = ({toggle})=>{
    return(<>
      <div className='header-container'>
        <h1 className='header-text'>Please Sign In To Account</h1>
        <div className='subscribe-button' onClick={toggle}>Sign In</div>
      </div>
      </>)
}

const HorizontalList = ({list})=>{
  return(
    <div className='profile-link-container'>
          {
            list.map((item)=>{
              return(<div className='profile-link-item' key={item}>{item}</div>)
            })
          }
    </div>
  )
}