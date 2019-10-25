import React from 'react';
import moment from 'moment';

const now = moment();
console.log('moment', now.format('MMM Do, YYYY'));

export default class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    club: '',
    people: '',
    estimation: '',
    moving: '',
    rejection: '',
    freeText: '',
    error: '',
    clubs: [
      'BERGHAIN',
      'KITKAT',
      'SCHWUZ',
      'RENATE',
      'GRIESSMUEHLE',
      'ABOUT-BLANK',
      'RITTER-BUTZKE',
      'TRESOR',
      'LAB-O-RATORY',
      'KATER-BLAU',
      'HOPPETOSSE',
      'SISYPHOS',
      'ELSE',
      'GRETCHEN',
      'WATERGATE',
      'SUICIDE'
    ],
    estimationOptions: [
      'No Wait',
      '5-10 Minutes',
      '10-30 Minutes',
      '30 Minutes to 1 Hour',
      '1 Hour to 2 Hours',
      '2 Hours or longer'
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
    this.setState(() => ({ estimation }));
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
        freeText: this.state.freeText
      });
    }
  };
  render() {
    return (
      <div className='on-large'>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div className='form-section'>
            <label className='form-label'>Choose a club *</label>
            <select
              className='form-selector'
              value={this.state.club}
              onChange={this.onClubChange}
            >
              <option value=''>Choose a Club</option>
              {this.state.clubs.map(club => (
                <option value={club} key={club}>
                  {club}
                </option>
              ))}
            </select>
          </div>
          <div className='form-section'>
            <label className='form-label'>
              How many clubers are queueing now? *
            </label>
            <select
              className='form-selector'
              value={this.state.people}
              onChange={this.onPeopleChange}
            >
              <option value=''>How Many</option>
              {this.state.peopleOptions.map(option => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className='form-section'>
            <label className='form-label'>
              How long do you think it'll take? *
            </label>
            <select
              className='form-selector'
              value={this.state.estimation}
              onChange={this.onEstimationChange}
            >
              <option value=''>Time</option>
              {this.state.estimationOptions.map(option => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className='form-section'>
            <label className='form-label'>How is the queue Moving?</label>
            <select
              className='form-selector'
              value={this.state.moving}
              onChange={this.onMovingChange}
            >
              <option value=''>Choose</option>
              {this.state.movingOptions.map(option => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className='form-section'>
            <label className='form-label'>
              How's the rejection rate tonight?
            </label>
            <select
              className='form-selector'
              value={this.state.rejection}
              onChange={this.onRejectionChange}
            >
              <option value=''>Choose</option>
              {this.state.rejectionOptions.map(option => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className='form-section'>
            <label className='form-label'>Anything to add?</label>
            <textarea
              className='form-selector'
              placeholder='Anything else? (ex. - line past spati / if you come now, I can use a beer)'
              value={this.state.freeText}
              onChange={this.onNoteChange}
            ></textarea>
          </div>
          <div className='form-section'>
            <button className='form-selector btn btn-light btn-lg'>
              Add Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}
