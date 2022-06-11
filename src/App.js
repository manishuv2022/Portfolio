import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './styles/app.css';

function App() {

  const routes = [
    {
      path: '/',
      component: <Home/>
    },
    {
      path: '/profile',
      component: <Profile/>
    }
  ];

  return (
      <div className='app-root'>
        <section className='app-body'>
              <Routes>
                {
                  routes.map(({path, component})=>{
                    return(<Route path={path} element={component} key={path}/>);
                  })
                }
              </Routes>             
        </section>
      </div>
  );
};


export default App;
