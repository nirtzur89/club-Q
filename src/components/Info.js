import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Info = () => (
  <div className='base-component info-header'>
    <h1>What is Club Q?</h1>
    <p className='info'>
      Club Q is an app designed for Berlin's clubers who were not born with a
      guestlist in their hands. We believe that creating a community of clubers
      who care for each other and help one another starts in the Queue.
    </p>
    <p className='info'>
      With club Queue you can give live updates on the length of the queue at
      club you are in and get live uptades from other users in other clubs.
    </p>
    <p className='info'>
      As we are dependent on a big and helpful community in order for this
      project to work We would highly appreciate if you spread the word!
    </p>
    <p className='info'>enjoy using CLUB Q and have a great party!</p>
  </div>
);

export default Info;
