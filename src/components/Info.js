import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Info = () => (
  <div>
    <div className='base-component info-header container'>
      <h1>What is Club Q?</h1>
      <p className='info'>
        Club Q is an app designed for Berlin's clubers who were not born with a
        guestlist in their hands. We believe that creating a community of
        clubers who care for each other and help one another starts in the
        Queue.
      </p>
      <p className='info'>
        With Club Q you can give live updates on the length of the queue at club
        you are in and get live uptades from other users in other clubs.
      </p>
      <p className='info'>
        As we are dependent on a big and helpful community in order for this
        project to work We would highly appreciate if you spread the word!
      </p>
      <p className='info'>enjoy using Club Q and have a great party!</p>
    </div>
    <div className='base-component info-header container'>
      <h1>Contact Us:</h1>
      <p className='info'>
        Got offers for us? Want us to add your favorite club? Is something not
        working? <br /> PLEASE let us know
      </p>
      <p className='info'>Email - Nirtzur89@gmail.com</p>

      <p className='info last'>THANK U!</p>
    </div>
  </div>
);

export default Info;
