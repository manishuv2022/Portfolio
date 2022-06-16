import { createContext } from 'react';
import {Routes, Route} from 'react-router-dom';
import Blog from './pages/Blog';
import Ecommerce from './pages/Ecommerce';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './styles/app.css';

const profile_links = ['Writing', 'Track', 'Github', 'Twitter', 'LinkedIn', 'Email'];
const pages_links = ['Home', 'Ecommarce', 'Calculator', 'Name List','Email'];

const LinkContext = createContext();
const UserContext = createContext();

function App() {
  const routes = [
    { path: '/', component: <Home/>},
    { path: '/profile', component: <Profile/>},
    { path: '/ecommerce', component: <Ecommerce/>},
    { path: '/blog', component: <Blog/>},
  ];

  return (
      <div className='app-root'>
        <section className='app-body'>
          <UserContext.Provider value={{fullName: 'Kaifa', age: 23}}>
            <LinkContext.Provider value={{profile_links, pages_links}}>
                <Routes>
                  {
                    routes.map(({path, component})=>{
                      return(<Route path={path} element={component} key={path}/>);
                    })
                  }
                </Routes>   
            </LinkContext.Provider>       
          </UserContext.Provider>   
        </section>
      </div>
  );
};

export default App;
export {LinkContext, UserContext};