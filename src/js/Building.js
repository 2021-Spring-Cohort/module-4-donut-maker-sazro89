class Building {
    constructor(name, dps, startingPrice, growthRate) {
        this.name = name;
        this.dps = dps;
        this.price = startingPrice;
        this.growthRate = growthRate
        this.quantity = 0;
        this.upgrades = [];
        this.TICKRATE = 1000 / 30;
    }

    tick() {
        return (this.dps * this.quantity) / this.TICKRATE;
    }

    buy(donuts) {
        if (donuts >= this.price) {
            this.quantity++;
            donuts -= this.price;
            this.price = Math.floor(this.growthRate * this.price);
        }
        return donuts;
    }
}