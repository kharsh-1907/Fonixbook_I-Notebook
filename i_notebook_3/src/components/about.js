// 'use client';
import React from 'react';
// import { Link } from 'react-router-dom';
// import NoteContext from '../context/Notes/Notecontext';
const About = () => {
  return (
    <div className="container my-3">
      <h2>About FonixNotes</h2>

      <div className="accordion" id="aboutAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#whatIsFonixNotes">
              What is FonixNotes?
            </button>
          </h2>
          <div id="whatIsFonixNotes" className="accordion-collapse collapse show" data-bs-parent="#aboutAccordion">
            <div className="accordion-body">
              FonixNotes is a simple note-taking application that allows users to create, edit, delete, and manage their personal notes in one place.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#features">
              Features
            </button>
          </h2>
          <div id="features" className="accordion-collapse collapse" data-bs-parent="#aboutAccordion">
            <div className="accordion-body">
              <ul>
                <li>Create new notes</li>
                <li>Edit existing notes</li>
                <li>Delete notes</li>
                <li>Add titles, descriptions, and tags</li>
                <li>View personal notes</li>
                <li>User authentication</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#authentication">
              Authentication
            </button>
          </h2>
          <div id="authentication" className="accordion-collapse collapse" data-bs-parent="#aboutAccordion">
            <div className="accordion-body">
              Users can create an account and log in securely. Each user can access and manage their own notes.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#technology">
              Technologies Used
            </button>
          </h2>
          <div id="technology" className="accordion-collapse collapse" data-bs-parent="#aboutAccordion">
            <div className="accordion-body">
              FonixNotes is built using the MERN stack:
              <ul>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Bootstrap</li>
                <li>REST API</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#purpose">
              Purpose
            </button>
          </h2>
          <div id="purpose" className="accordion-collapse collapse" data-bs-parent="#aboutAccordion">
            <div className="accordion-body">
              FonixNotes was built to practice full-stack web development using the MERN stack, including CRUD operations, authentication, REST APIs, database management, and React frontend development.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
