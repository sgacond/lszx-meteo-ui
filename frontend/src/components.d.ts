/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface LszxEmagramChart {
    'data': any;
  }
  interface LszxEmagramChartAttributes extends StencilHTMLAttributes {
    'data'?: any;
  }

  interface LszxEmagramTimeSelector {
    'snapshots': any[];
  }
  interface LszxEmagramTimeSelectorAttributes extends StencilHTMLAttributes {
    'onSnapshotSelected'?: (event: CustomEvent) => void;
    'snapshots'?: any[];
  }

  interface LszxEmagram {
    'datasrc': string;
  }
  interface LszxEmagramAttributes extends StencilHTMLAttributes {
    'datasrc'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'LszxEmagramChart': Components.LszxEmagramChart;
    'LszxEmagramTimeSelector': Components.LszxEmagramTimeSelector;
    'LszxEmagram': Components.LszxEmagram;
  }

  interface StencilIntrinsicElements {
    'lszx-emagram-chart': Components.LszxEmagramChartAttributes;
    'lszx-emagram-time-selector': Components.LszxEmagramTimeSelectorAttributes;
    'lszx-emagram': Components.LszxEmagramAttributes;
  }


  interface HTMLLszxEmagramChartElement extends Components.LszxEmagramChart, HTMLStencilElement {}
  var HTMLLszxEmagramChartElement: {
    prototype: HTMLLszxEmagramChartElement;
    new (): HTMLLszxEmagramChartElement;
  };

  interface HTMLLszxEmagramTimeSelectorElement extends Components.LszxEmagramTimeSelector, HTMLStencilElement {}
  var HTMLLszxEmagramTimeSelectorElement: {
    prototype: HTMLLszxEmagramTimeSelectorElement;
    new (): HTMLLszxEmagramTimeSelectorElement;
  };

  interface HTMLLszxEmagramElement extends Components.LszxEmagram, HTMLStencilElement {}
  var HTMLLszxEmagramElement: {
    prototype: HTMLLszxEmagramElement;
    new (): HTMLLszxEmagramElement;
  };

  interface HTMLElementTagNameMap {
    'lszx-emagram-chart': HTMLLszxEmagramChartElement
    'lszx-emagram-time-selector': HTMLLszxEmagramTimeSelectorElement
    'lszx-emagram': HTMLLszxEmagramElement
  }

  interface ElementTagNameMap {
    'lszx-emagram-chart': HTMLLszxEmagramChartElement;
    'lszx-emagram-time-selector': HTMLLszxEmagramTimeSelectorElement;
    'lszx-emagram': HTMLLszxEmagramElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
