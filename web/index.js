
/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * /web/index.js
 *
 * This code handles intial render of the bot and any rerenders triggered
 * from javascript events.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App.jsx');

const bdk = require('../lib/refocus-bdk.js');
const botName = require('../package.json').name;
const roomId = parseInt(ROOMID); //ROOMID will be provided from the page DOM

document.body.addEventListener('refocus.events', handleEvents, false);
document.body.addEventListener('refocus.room.settings', handleSettings, false);
document.body.addEventListener('refocus.bot.data', handleData, false);
document.body.addEventListener('refocus.bot.actions', handleActions, false);

/**
 * When a refocus.events is dispatch it is handled here.
 *
 * @param {Event} event - The most recent event object
 * @return null
 */
function handleEvents(event) {
  console.log('Event Activity', event);
}

/**
 * When a refocus.room.settings is dispatch it is handled here.
 *
 * @param {Room} room - Room object that was dispatched
 * @return null
 */
function handleSettings(room) {
  console.log('Room Activity', bd);
}

/**
 * When a refocus.bot.data is dispatch it is handled here.
 *
 * @param {BotData} data - Bot Data object that was dispatched
 * @return null
 */
function handleData(data) {
  console.log('Bot Data Activity', data);
}

/**
 * When a refocus.bot.actions is dispatch it is handled here.
 *
 * @param {BotAction} action - Bot Action object that was dispatched
 * @return null
 */
function handleActions(action) {
  console.log('Bot Action Activity', action);
}

/*
 * The actions to take before load.
 */
window.onload = () => {
};

/**
 * Render the react components with the data and templates needed
 */
function renderUI(){
  ReactDOM.render(
    <App />,
    document.getElementById(botName)
  );
}