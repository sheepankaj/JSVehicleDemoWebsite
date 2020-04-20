import $ from 'jquery';
//import {Car} from './classes/car.js';
//import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
//import {Button} from './ui/button.js';
//import {Image} from './ui/image.js';
//import {TitleBar} from './ui/title-bar.js';
//import {DataTable} from './ui/data-table.js';
//import {GoogleMap} from './ui/google-map.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './home-page.js';
import {CarsPage} from './cars-page.js';
import {MapPage} from './map-page.js';
import {DronesPage} from './drone-page.js';

export class App extends ApplicationBase {
    constructor(){
        super('Fleet Manager');
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);
        
        this.addRoute('Home', new HomePage(), true);
        this.addRoute('Cars', new CarsPage());
        this.addRoute('Drones', new DronesPage());
        this.addRoute('Map', new MapPage());
    }
}


export let application = new App();
application.show($('body'));

/* let centerOfMap = {lat: 40.783661, lng: -73.965883};
let map = new GoogleMap(centerOfMap, dataService.drones);
map.appendToElement($('body'));

let headers = "License Make Model Miles".split(' ');
let dataService = new FleetDataService(fleet);
dataService.loadData(fleet);
let dt = new DataTable(headers, dataService.cars);
dt.appendToElement($('body'));

let tb = new TitleBar('Our Application');
tb.addLink('Home','');
tb.addLink('Cars','');
tb.addLink('Drones','');
tb.addLink('Map','');
tb.appendToElement($('body'));

let b = new Button('Click Me');
b.appendToElement($('body'));

let i =new Image('../images/drone.jpg');
i.appendToElement($('body'));*/