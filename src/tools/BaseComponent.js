import { Component } from 'react';

/**
 * Base Component
 * 
 * Extends React Component, adds helpers
 */
export default class BaseComponent extends Component {

  /**
   * Allows to bind multiple methods in one step
   */
  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }
}