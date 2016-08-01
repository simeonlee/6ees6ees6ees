import ForagerBee from './ForagerBee';

class RetiredForagerBee extends ForagerBee {
  constructor() {
  	this.age = 40;
  	this.job = 'gamble';
  	this.canFly = false;
    this.color = 'grey';
  }
  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
};

export default RetiredForagerBee;