import React, {Component} from 'react';

class SwitchButton extends Component {
    render() {
        const { handleClick, className } = this.props;
        return(
            <div className={className}>
                <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">
                    <input type="checkbox" class="mdl-switch__input" onChange={handleClick} />
                </label>
            </div>
        );
    }
}

export default SwitchButton;