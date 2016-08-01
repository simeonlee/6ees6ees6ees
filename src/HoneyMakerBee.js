import Bee from './Bee'

class HoneyMakerBee extends Bee {
  constructor() {
  	this.age = 10;
  	this.job = 'make honey';
  	this.honeyPot = 0;
  }
  makeHoney() {
  	this.honeyPot++;
  }
  giveHoney() {
  	if ( this.honeyPot - 1 >= 0 ) {
  		this.honeyPot--;
  	}
  }
};

export default HoneyMakerBee;