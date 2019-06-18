import { LitElement, html, css } from 'lit-element';
import { getPlatform } from '@moduware/lit-utils'; 
import { ifDefined } from 'lit-html/directives/if-defined.js';

/**
 * `morph-progressbar`
 * Button that morphs for current mobile OS
 *
 * @customElement
 * @extends HTMLElement
 * @demo morph-progressbar/demo/index.html
 */
class MorphProgressbar extends LitElement {
  static get styles() {
    return [
      css`
      
        :host {
          display: block;
          vertical-align: middle;
        }

        .progressbar {
          overflow: hidden;
        }

        .progressbar-indicator {
          height: inherit;
          transform: translateX(-100%);
        }
        
        :host([platform="android"]) .progressbar {
          height: 2px;
          background-color: white;
        }

        :host([platform="android"]) .progressbar-indicator {
          background-color: #D12F3D;
        }

        :host([platform="ios"]) .progressbar {
          height: 4px;
          background-color: rgba(233, 30, 99, 0.5);
        }

        :host([platform="ios"]) .progressbar-indicator {
          background-color: #D12F3D;
        }
      
      `
    ];
  }

  render() {
    return html`
      <div class="container">
        <div class="progressbar">
          <div class="progressbar-indicator" style="transform: translateX(-${100 - this.clamp(this.progress, 0, 100)}%)"></div>
        </div>
      </div>
    `;
  }

  static get is() { return 'morph-progressbar'; }
  static get properties() {
    return {
      progress: Number,
      platform: {
        type: String,
        reflect: true
      }
    };
  }

  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  constructor() {
    super();
    this.progress = 0;
  }
  
  /**
   * lit-element lifecycle called once before the first updated().
   */
  firstUpdated() {
    super.firstUpdated();
    // check first if platform assigned in html markup before using getPlatform to auto detect platform
    if(!this.hasAttribute('platform')) {
      this.platform = getPlatform();
    }
    //NOTE: add default value to flat, raised, rounded, active, disabled, color, filled, big
  }

  // updated(changedProperties) {
  //   if(this.color) {
  //     this.colorAssigned(this.color);
  //   }
  // }
  
  // connectedCallback() {
  //   super.connectedCallback();
  // }

  /**
    * @return {Object} - returns the computed style based on if ShadyCSS is used or not 
    */
  getStyleShadyOrDOM() {
    if (typeof (ShadyCSS) != 'undefined') {
      return ShadyCSS.getComputedStyleValue(this, '--have-access-to-shared-colors');
    } else {
      return getComputedStyle(this).getPropertyValue('--have-access-to-shared-colors');
    }
  }
}

window.customElements.define(MorphProgressbar.is, MorphProgressbar);
