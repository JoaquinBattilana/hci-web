import React from 'react';
import styles from './styles.module.scss';

function TopBar() {
    return (
        <header className={`mdl-layout__header ${styles.topbar}`}>
            <div className="mdl-layout__header-row">
                <div className="mdl-layout-spacer"></div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                            mdl-textfield--floating-label mdl-textfield--align-right">
                </div>
            </div>
        </header>  
    );
}

export default TopBar;