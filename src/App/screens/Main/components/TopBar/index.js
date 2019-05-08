import React from 'react';
import styles from './styles.module.scss';

function TopBar() {
    return (
        <header class={`mdl-layout__header ${styles.topbar}`}>
            <div class="mdl-layout__header-row">
            <div class="mdl-layout-spacer"></div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                        mdl-textfield--floating-label mdl-textfield--align-right">
            </div>
            </div>
        </header>  
    );
}

export default TopBar;