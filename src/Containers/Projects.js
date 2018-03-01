import React from 'react';
import './Projects.css';
import ProjectList from '../Components/Projects/ProjectList';

const db = [{
        name : "Movie and TV Show Tracker",
        description: "An app to keep track of movies and tv shows",   
        date: "In Progress",
        tools: "React.js, CSS, Tachyons, MoviedbAPI, PostgreSQL",
        image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=287c28051f750029681e5d0cf0b7d722&auto=format&fit=crop&w=1189&q=80",
        link: ""
    },
    {
        name : "Timesheet Application",
        description: "A web app which is also mobile friendly to log your time spent on each task",    
        date: "15-11-2017",
        tools: "ASP.NET MVC, C#, Enity Framework, MSSQL, Bootstrap",
        image: "https://images.unsplash.com/photo-1482775907821-a56ec43344fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34e2fb37422a3fc454b0c08cb5cd8d56&auto=format&fit=crop&w=1052&q=80",
        link: ""
    },
    {
        name : "Current Online Portfolio",
        description: "The profile you are currently looking at",    
        date: "In Progress",
        tools: "React.js, UI-Router/React, CSS, React-Bootstrap, Bootstrap",
        image: "https://images.unsplash.com/photo-1483705385549-e04ea91e0011?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=962a0d88a3599d1cd77cc2d693077c07&auto=format&fit=crop&w=1050&q=80",
        link: ""
    },
    {
        name:"Budget Application",
        description: "Personal finance app where you can process all your expenses and balance with you bank account",
        date: "31-12-2016",
        tools: "ASP.NET MVC, C#, Enity Framework, MSSQL, Bootstrap",
        image: "https://images.unsplash.com/photo-1515606378517-3451a4fa2e12?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cb830c394f6c9d7275b1662668f291dd&auto=format&fit=crop&w=1100&q=80",
        link: ""
    },
    {
        name:"Previous Online Portfolio",
        description: "My previous portfolio - not in use anymore",
        date: "23-02-2018",
        tools: "HTML, CSS, Javascript, CreateTim Template",
        image: "https://images.unsplash.com/photo-1485340140625-c6edf4b069d6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1600a41c495b1aa397fb3f9e8f45ddd3&auto=format&fit=crop&w=1048&q=80",
        link: "https://louisevdb84.github.io/"
    },



];
// <p>At first I developed using ASP.NET MVC, C# and MSSQL. From 2018 I started working with Reactjs, PostgreSQL and Nodejs</p>
const App = () => {    
    return (
        <div className="animated zoomInRight cards proj">    
            <h1>My Projects</h1>            
            <ProjectList projects={db}/>    
        </div>     
    )
}  

export default App;

    