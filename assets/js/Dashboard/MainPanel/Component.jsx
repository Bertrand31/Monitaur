import React, { PropTypes } from 'react';

import TopBar from './TopBar/Container';
import GlobalStats from './GlobalStats/Container';
import CheckStats from './CheckStats/Container';
import ChecksTable from './ChecksTable/Container';


const DashboardComponent = ({ menuIsOpen, closeMenu }) => (
    <div
        className={`o-main o-pane-container dashboard ${menuIsOpen ? 's-is-covered' : ''}`}
        onClick={() => closeMenu()}
    >
        <div className="pane-components-wrapper">
            <TopBar />
            <GlobalStats />
            <CheckStats />
        </div>
        <ChecksTable />
    </div>
);

export default DashboardComponent;
