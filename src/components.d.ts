/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface LabAlert {
    'closable': boolean;
    'close': () => void;
    'header': string;
    'message': string;
    'type': string;
  }
  interface LabAlertAttributes extends StencilHTMLAttributes {
    'closable'?: boolean;
    'header'?: string;
    'message'?: string;
    'onAlertClosed'?: (event: CustomEvent) => void;
    'type'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'LabAlert': Components.LabAlert;
  }

  interface StencilIntrinsicElements {
    'lab-alert': Components.LabAlertAttributes;
  }


  interface HTMLLabAlertElement extends Components.LabAlert, HTMLStencilElement {}
  var HTMLLabAlertElement: {
    prototype: HTMLLabAlertElement;
    new (): HTMLLabAlertElement;
  };

  interface HTMLElementTagNameMap {
    'lab-alert': HTMLLabAlertElement
  }

  interface ElementTagNameMap {
    'lab-alert': HTMLLabAlertElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}