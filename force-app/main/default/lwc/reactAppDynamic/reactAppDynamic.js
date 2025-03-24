import { LightningElement } from 'lwc';
import REACT_APP from '@salesforce/resourceUrl/React';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';



export default class ReactAppDynamic extends LightningElement {
    reactAppInitialized = false;
    renderedCallback() {
        if (this.reactAppInitialized) {
            return;
        }
        this.reactAppInitialized = true;
        console.log('React app initialization started');
        console.log('REACT_APP:', REACT_APP + '/build/static/js/main.e75d7d85.js');
        console.log('REACT_APP:', REACT_APP + '/build/static/css/main.7ed27391.css');
        Promise.all([
            loadScript(this, REACT_APP + '/build/static/js/main.e75d7d85.js'),
            loadStyle(this, REACT_APP + '/build/static/css/main.7ed27391.css')
        ])
        .then(() => {
            
            console.log('React app script and style loaded successfully');
            
                 // Get the container element
                 const container = this.template.querySelector('.react-container');
            
                 // Call the global initialization function you've already created
                 if (window.initializeReactApp) {
                     window.initializeReactApp(container);
                     console.log('React app successfully initialized');
                 } else {
                     console.error('window.initializeReactApp function not found');
                 }
        })
        .catch(error => {
            console.error('Error loading React app:', error);
        });
    }
}