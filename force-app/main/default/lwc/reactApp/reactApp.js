import { LightningElement } from 'lwc';
import REACT_APP from '@salesforce/resourceUrl/React';

export default class ReactApp extends LightningElement {
    reactAppUrl = REACT_APP + '/build/index.html';
  
}