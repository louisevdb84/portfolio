import React from 'react';
import './Projects.css';
import ProjectList from '../Components/Projects/ProjectList';
import landingpage from './landingpage.PNG';
import moviedb from './moviedb.PNG';
import shoppinglist from './shoppinglist.PNG';
import portfolio from './portfolio.PNG';
import journal from './journal.PNG';
import nasa from './nasa.PNG';
import accounting from './Accounting.PNG';
import timesheet from './timesheet.PNG';

const featuredDb = [

    {
        name: "Movie and TV Show Tracker",
        description: "This app uses MovieDb API to display movies and tv shows. It keeps track of the watchlist and watched movies / TV shows",
        date: "April 2018",
        tools: "React.js, CSS, Node.js, Express Framework, UI-Router/React, Tachyons, MoviedbAPI, PostgreSQL",
        image: moviedb,
        link: "https://louisevdb84.github.io/movie-tvshow-tracker/"
    },
    {
        name: "Accounting Application",
        description: "Accounting application to record all transactions. Also used to set a budget.",
        date: "February 2019",
        tools: ".NET Core, Angular, Entitiy Framework, SQL Server",
        image: accounting,
        link: "https://accountingapp-api.azurewebsites.net/"
    },
    {
        name: "Goal Achiever",
        description: "Timesheet application to record time spend on activities and also to set goals.",
        date: "2017",
        tools: "ASP.NET Framework, SQL Server, Entity Framework",
        image: timesheet,
        link: "https://goalachiever.azurewebsites.net/Timesheet"
    },
    {
        name: "Landing Page",
        description: "This is a template for a landing page",
        date: "September 2019",
        tools: "JavaScript, CSS and HTML",
        image: landingpage,
        link: "https://louisevdb84.github.io/landingpage/"
    }

]

const db = [




    {
        name: "Online Portfolio",
        description: "The portfolio you are currently looking at",
        date: "March 2018",
        tools: "React.js, UI-Router/React, CSS, React-Bootstrap, Bootstrap",
        image: portfolio,
        link: "https://louisevdb84.github.io/portfolio"
    },
    {
        name: "Speech to Text Journal",
        description: "This application uses speech recognition to convert your words into a journal entry. This app is also a coding challenge winner (Udemy Zero to Mastery)",
        date: "March 2018",
        tools: "React.js, UI-Router/React, CSS, Node.js, Express Framework, Bootstrap, Creative Tim",
        image: journal,
        link: "https://louisevdb84.github.io/journal-application/#/"
    },
    {
        name: "Shopping List",
        description: "This app keeps track of your shopping list. ",
        date: "October 2018",
        tools: "Angular, JWT, Node.js, Express Framework, MongoDB",
        image: shoppinglist,
        link: "https://louisevdb84.github.io/shopping-list/"
    },
    {
        name: "NASA API App",
        description: "Very basic app using NASA API to explore React Redux",
        date: "August 2019",
        tools: "React.js, Redux, Redux-Thunk, Redux-logger, Tachyons",
        image: nasa,
        link: "https://louisevdb84.github.io/nasa/"
    },



];

const App = () => {
    return (
        <div className="animated zoomInRight cards proj" >
            <h1> My Projects </h1>
            <hr></hr>            
            <ProjectList projects={featuredDb} />                       
            <ProjectList projects={db} />
        </div>
    )
}

export default App;