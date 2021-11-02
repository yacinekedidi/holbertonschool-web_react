import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import close from './close-icon.png';

const Notifications = () => {
  return (
    <div
      className="Notifications"
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li
            data-priority="urgent"
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          />
        </ul>
      </div>
      <button
        style={{
          display: 'inline',
          ariaLabel: 'Close',
          alignSelf: 'flex-start',
          border: 'none',
          cursor: 'pointer',
          background: 'transparent',
        }}
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={close} alt="close" style={{ width: '1rem' }} />
      </button>
    </div>
  );
};

export default Notifications;
