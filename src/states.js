import Home from './Containers/Home';
import App from './Containers/App';
import Projects from './Containers/Projects';
import About from './Containers/About';
import Contact from './Containers/Contact';

const appState = {
  name: 'app',
  redirectTo: 'home',
  component: Home
};

const homeState = {
  parent: 'app',
  name: 'home',
  url: '/home',
  component: Home
};

const mainAppState = {  
  name: 'mainApp',
  url: '/profile',
  component: App
};

const projectsState = {  
  parent: 'mainApp',
  name: 'projects',
  url: '/projects',
  component: Projects
};



const aboutState = {
  parent: 'mainApp',
  name: 'about',
  url: '/about',
  component: About
}

const contactState = {
  parent: 'mainApp',
  name: 'contact',
  url: '/contact',
  component: Contact
}

export default [contactState, aboutState, appState, mainAppState, projectsState, homeState];
