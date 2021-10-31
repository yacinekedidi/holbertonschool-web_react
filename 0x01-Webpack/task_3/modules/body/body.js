const $ = require('jquery');
const _ = require('lodash');
import './body.css';

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

function updateCounter() {
  let count = 0;
  const btn = $('button');
  btn.on('click', () => {
    count++;
    $('p#count').text(`${count} clicks on the button`);
  });
}

_.debounce(updateCounter);
updateCounter();
