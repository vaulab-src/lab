import { Component, State, Prop, EventEmitter, Event, Method } from '@stencil/core';

@Component({
    tag: 'lab-alert',
    styleUrl: 'alert.scss'
})
export class Alert {
    @Event() alertClosed: EventEmitter;
    @Prop() type: string;
    @Prop() closable: boolean;
    @Prop() showicon: boolean;
    @Prop() message: string;
    @Prop() header: string;
    @State() displayed: boolean = true;

    @Method()
    close(): void {
        this.alertClosed.emit({});
        this.displayed = false;
    }
    render() {
        if (this.displayed) {
            return (
                <div class={"alert alert-" + this.type}>
                    <div data-show="true" class=" ">
                        {this.showicon && <i class="alert-icon">
                            {this.type == 'info' && <svg viewBox="64 64 896 896" class="" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
                            </svg>}
                            {this.type == 'warning' && <svg viewBox="64 64 896 896" class="" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
                            </svg>}
                            {this.type == 'error' && <svg viewBox="64 64 896 896" class="" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                            </svg>}
                            {this.type == 'success' && <svg viewBox="64 64 896 896" class="" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                            </svg>}

                        </i>}
                        {this.header && <span class={{ 'alert-block-margin': this.showicon, 'alert-message': true }} > {this.header} </span>}
                        {this.message && <span class={{ 'alert-block-margin': this.showicon, 'alert-description': true }} >{this.message}</span>}

                        {
                            this.closable && <a class="alert-close-icon" onClick={this.close.bind(this)}>
                                <i class="icon">
                                    <svg viewBox="64 64 896 896" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                                    </svg>
                                </i>
                            </a>
                        }
                    </div >

                </div >
            );
        }

    }
}
