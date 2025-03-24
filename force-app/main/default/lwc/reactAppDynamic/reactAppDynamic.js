import { LightningElement } from 'lwc';
import REACT_APP from '@salesforce/resourceUrl/React';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';



export default class ReactAppDynamic extends LightningElement {
    reactAppInitialized = false;
    renderedCallback() {
        if (this.reactAppInitialized) return;
    this.reactAppInitialized = true;
    
    // Create script element
    const script = document.createElement('script');
    script.src = REACT_APP + '/build/static/js/main.e75d7d85.js';
    script.onload = () => {
        console.log('Script loaded successfully');
        const container = this.template.querySelector('.react-container');
        if (window.initializeReactApp) {
            window.initializeReactApp(container);
        }
    };
    script.onerror = (error) => {
        console.error('Error loading script:', error);
    };
    
    // Create style element
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = REACT_APP + '/build/static/css/main.7ed27391.css';
    
    // Append elements to document head
    document.head.appendChild(script);
    document.head.appendChild(style);
    }
}