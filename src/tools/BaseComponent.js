/**
 * Base Component extends React Component, adds helpers
 */

import { Component } from 'react';

export default class BaseComponent extends Component {

  /**
   * Allows to bind multiple methods in one step
   */
  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }
}