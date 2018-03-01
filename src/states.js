import Home from './Containers/Home';
import App from './Containers/App';
import Projects from './Containers/Projects';
import SideHustles from './Containers/SideHustles';
import Presentations from './Containers/Presentations';
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

const sideHustlesState = {  
  
  parent: 'mainApp',
  name: 'sideHustles',
  url: '/side-hustles',
  component: SideHustles
};

const presentationsState = {  
  
  parent: 'mainApp',
  name: 'presentations',
  url: '/presentations',
  component: Presentations
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

export default [contactState, aboutState, presentationsState,appState, mainAppState, projectsState, homeState, sideHustlesState];
