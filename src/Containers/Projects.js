import React from 'react';
import './Projects.css';
import ProjectList from '../Components/Projects/ProjectList';

const db = [{
        name : "Movie and TV Show Tracker",
        description: "This app uses MovieDb API to display movies and tv shows. PostgreSQL is used to keep track of the watchlist and watched movies / TV shows",   
        date: "In Progress",
        tools: "React.js, CSS, Node.js, Express Framework, UI-Router/React, Tachyons, MoviedbAPI, PostgreSQL",
        image: "https://images.unsplash.com/photo-1501421018470-faf26f6b1bef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de2f768321958e878703c793724d87fa&auto=format&fit=crop&w=1950&q=80",
        link: "https://movie-tvshow-tracker.herokuapp.com/"
},
    
{
    name : "Speech to Text Journal",
    description: "This application uses speech recognition to convert your words into a journal entry. This app is also a coding challenge winner (Udemy Zero to Mastery)",    
    date: "March 2018",
    tools: "React.js, UI-Router/React, CSS, Node.js, Express Framework, Bootstrap, Creative Tim",
    image: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53417780c9a34ffae5334a1d03b105a6&auto=format&fit=crop&w=1050&q=80",
    link: "https://journal-application.herokuapp.com/#/"
},
    // {
    //     name : "Goal Achiever",
    //     description: "An app to keep track of tasks, goals, time spent on each task as well as whether a goal has been reached.  The project including a back-up of the database can be accessed on Google Drive https://drive.google.com/open?id=0B6xaRhDEOQlwR0N4enhpT1ZqMzg",    
    //     date: "31-12-2017",
    //     tools: "ASP.NET MVC, C#, Enity Framework, MSSQL, Bootstrap",
    //     image: "https://images.unsplash.com/photo-1482775907821-a56ec43344fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34e2fb37422a3fc454b0c08cb5cd8d56&auto=format&fit=crop&w=1052&q=80",
    //     link: ""
    // },

    // {
    //     name:"Budget Application",
    //     description: "This app serves as a budget as well as personal accounting system where you can process all your income and expenses.Developed using C#, ASP.Net MVC & MSSQL. I currently use the app to keep track of income, expenses, assets and liabilities. The project including a back-up of the database can be accessed on Google Drive:https://drive.google.com/open?id=0B6xaRhDEOQlwR0N4enhpT1ZqMzg",
    //     date: "31-12-2016",
    //     tools: "ASP.NET MVC, C#, Enity Framework, MSSQL, Bootstrap",
    //     image: "https://images.unsplash.com/photo-1515606378517-3451a4fa2e12?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cb830c394f6c9d7275b1662668f291dd&auto=format&fit=crop&w=1100&q=80",
    //     link: ""
    // },
    // {
    //     name:"Previous Online Portfolio",
    //     description: "My previous portfolio - not in use anymore",
    //     date: "23-02-2018",
    //     tools: "HTML, CSS, Javascript, CreateTim Template",
    //     image: "https://images.unsplash.com/photo-1485340140625-c6edf4b069d6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1600a41c495b1aa397fb3f9e8f45ddd3&auto=format&fit=crop&w=1048&q=80",
    //     link: "https://louisevdb84.github.io/"
    // },
    {
        name : "Online Portfolio",
        description: "The portfolio you are currently looking at",    
        date: "March 2018",
        tools: "React.js, UI-Router/React, CSS, React-Bootstrap, Bootstrap",
        image: "https://images.unsplash.com/photo-1501159771943-cc9027db4d8b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05daa85f6d47b2bac2ccfcaa9c55b2b9&auto=format&fit=crop&w=1050&q=80",
        link: "https://louisevdb.herokuapp.com"
    },



];

const App = () => {    
    return (
        <div className="animated zoomInRight cards proj">    
            <h1>My Projects</h1>            
            <ProjectList projects={db}/>    
        </div>     
    )
}  

export default App;

    