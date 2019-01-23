import { Component, Element, State, Event, EventEmitter } from '@stencil/core';
import TinyDatePicker from 'tiny-date-picker';
@Component({
    tag: 'lab-datepicker',
    styleUrl: 'datepicker.scss'
})
export class Datepicker {

    @Element() private element: HTMLElement;
    @Event({
        eventName: 'onChange'
    }) onChange: EventEmitter;
    @State() date: Date;
    tinyDatePicker: any;
    componentDidLoad() {
        this.tinyDatePicker = TinyDatePicker(this.element, {
            mode: 'dp-below',
        });
        this.tinyDatePicker.setState({
            selectedDate: new Date(),
            hilightedDate: new Date(),
        })
        this.tinyDatePicker.on('select', (_, dp) => {
            this.date = dp.state.selectedDate;
        });
    }

    onChangeHandler() { }

    render() {
        return (
            <div>
                <input value={this.date && this.date.toDateString()}></input>
            </div>
        );
    }
}
