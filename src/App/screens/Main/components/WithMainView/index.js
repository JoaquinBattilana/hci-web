import React, { Component } from 'react';
import Button from '../../../../components/Button';
import styles from './styles.module.scss';

const WithMainView = (Elements, AddForm, DataComponent, title) =>{ 
    return class WithMainView extends Component {
            state = {
                addFormState: false,
                currentElement: null
            }

            toggleAddForm = () => {
                this.setState( state => ({
                    addFormState: !state.addFormState
                }));
            }

            setCurrentElement = element => {
                this.setState(({
                    currentElement: element
                }));
            }

            render() {
                const { addFormState, currentElement } = this.state;
                return (
                <div className={styles.mainViewLayout}>
                    {addFormState && <div className={styles.all}><AddForm onExit={this.toggleAddForm}/> </div>}
                    {currentElement && <div className={styles.all}><DataComponent setCurrentElement={this.setCurrentElement} currentDispositive={currentElement} /> </div>}
                    <h2 className={styles.title}>{title}</h2>
                    <Elements setCurrentElement={this.setCurrentElement}/>
                    <Button icon="add" iconType="fab" handleClick={this.toggleAddForm} />
                </div>
                );
            }
        }
}

export default WithMainView;