class DonutMaker {
    constructor() {
        this._clickCount = 0;
        this._buildings = [];
        this._buildings.push(new AutoClicker("autoclicker", 1, 100, 1.1));
    }

    recordClick() {
        this._clickCount++;
    }

    purchaseBuilding(buildingName) {
        this._buildings.forEach(building => {
            if (building.name === buildingName) {
                this._clickCount = building.buy(this._clickCount);
            }
        });
    }

    retrieveBuildingQuantity(buildingName) {
        for (let building of this._buildings) {
            if (building.name === buildingName) {
                return building.quantity;
            }
        }
    }

    retrieveBuildingPrice(buildingName) {
        for (let building of this._buildings) {
            if (building.name === buildingName) {
                return building.price;
            }
        }
    }

    tick() {
        this._buildings.forEach(building => this._clickCount += building.tick());
    }

    get clickCount() {
        return this._clickCount;
    }

    get buildings() {
        return this._buildings;
    }
}
