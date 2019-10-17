import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log('moment', now.format('MMM Do, YYYY'));

export default class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = {
    club: '',
    people: '',
    estimation: '',
    moving: '',
    rejection: '',
    freeText: '',
    createdAt: 0,
    error: '',
    clubs: [
      'BERGHAIN',
      'KITKAT',
      'RENATE',
      'SCHWUZ',
      'RITTER-BUTZKE',
      'GRIESMUELE',
      'LAB-O-RATORY',
      'ABOUT-BLANK',
      'KATER-BLAU'
    ],
    peopleOptions: [
      'No Q',
      '10 Clubers or less',
      '10 - 30 Clubers',
      '30 - 60 Clubers',
      '60 - 100 Clubers',
      'Over 100 Clubers'
    ],
    rejectionOptions: [
      'Letting everybody in',
      'Low rejection rate',
      'Medium rejection rate',
      'Picky bouncers'
    ],
    movingOptions: [
      'Moving fast',
      'Moving usually',
      'Moving slowly',
      'Not moving'
    ]
  };
  onClubChange = e => {
    const club = e.target.value;
    if (club !== '') {
      this.setState(() => ({ club }));
    }
  };
  onPeopleChange = e => {
    const people = e.target.value;
    this.setState(() => ({ people }));
  };
  onEstimationChange = e => {
    const estimation = e.target.value;
    if (!estimation || estimation.match(/^\d{1,}?$/)) {
      this.setState(() => ({ estimation }));
    }
  };
  onMovingChange = e => {
    const moving = e.target.value;
    this.setState(() => ({ moving }));
  };
  onRejectionChange = e => {
    const rejection = e.target.value;
    this.setState(() => ({ rejection }));
  };
  onNoteChange = e => {
    const freeText = e.target.value;
    this.setState(() => ({ freeText }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.club || !this.state.estimation) {
      this.setState(() => ({
        error: 'please provide club name and time estimation'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        club: this.state.club,
        people: this.state.people,
        estimation: this.state.estimation,
        moving: this.state.moving,
        rejection: this.state.rejection,
        freeText: this.state.freeText,
        createdAt: moment().format(),
        freeText: this.state.freeText
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <select value={this.state.club} onChange={this.onClubChange}>
            <option value=''>Choose a Club</option>
            {this.state.clubs.map(club => (
              <option value={club} key={club}>
                {club}
              </option>
            ))}
          </select>
          <select value={this.state.people} onChange={this.onPeopleChange}>
            <option value=''>How many clubers are Q'ing?</option>
            {this.state.peopleOptions.map(option => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          <input
            type='number'
            placeholder='Waiting time (min)'
            value={this.state.estimation}
            onChange={this.onEstimationChange}
          />
          <select value={this.state.moving} onChange={this.onMovingChange}>
            <option value=''>Q movement status</option>
            {this.state.movingOptions.map(option => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            value={this.state.rejection}
            onChange={this.onRejectionChange}
          >
            <option value=''>Rejection rate</option>
            {this.state.rejectionOptions.map(option => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          <textarea
            placeholder='Anything else? (ex. - line past spati / if you come now, I can use a beer)'
            value={this.state.freeText}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Update</button>
        </form>
      </div>
    );
  }
}