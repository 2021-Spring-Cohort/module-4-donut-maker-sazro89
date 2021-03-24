describe("FEATURE 2 : ABILITY TO PURCHASE AUTO CLICKER", () => {
    describe("Can purchase auto clicker", () => {
        let testDonutMaker;

        beforeEach(() => {
            testDonutMaker = new DonutMaker();
            for (let x = 0; x < 100; x++) {
                testDonutMaker.recordClick();
            }
        });

        it('Can retrieve auto clicker count', () => {
            expect(testDonutMaker.retrieveBuildingQuantity("autoclicker")).toBe(0);
        });
        it('can add to auto clicker count', () => {
            testDonutMaker.purchaseBuilding("autoclicker");
            expect(testDonutMaker.retrieveBuildingQuantity("autoclicker")).toBe(1);
        });
        it('purchasing an auto clicker subtracts cost from donut count', () => {
            testDonutMaker.purchaseBuilding("autoclicker");
            expect(testDonutMaker.clickCount).toBe(0);
        });
    });
});

describe("FEATURE 3 : COSTS GO UP WITH EACH PURCHASE", () => {
    describe("When purchasing an auto clicker, prices rise", () => {
        let testDonutMaker;

        beforeEach(() => {
            testDonutMaker = new DonutMaker();
            for (let x = 0; x < 220; x++) {
                testDonutMaker.recordClick();
            }
        });

        it('Increases the cost of an autoclicker on purchase by 10%', () => {
            testDonutMaker.purchaseBuilding("autoclicker");
            expect(testDonutMaker.retrieveBuildingPrice("autoclicker")).toBe(110);
        })

        it('Increases the cost of an autoclicker on second purchase by another 10%', () => {
            testDonutMaker.purchaseBuilding("autoclicker");
            testDonutMaker.purchaseBuilding("autoclicker");
            expect(testDonutMaker.retrieveBuildingPrice("autoclicker")).toBe(121);
        })
    });
});

describe("FEATURE 4 : ENSURE THERE ARE ENOUGH CLICKS TO PURCHASE", () => {
    describe("make sure that purchases aren't made when player doesn't have enough clicks", () => {
        let testDonutMaker;

        beforeEach(() => {
            testDonutMaker = new DonutMaker();
        });

        it('if no clicking is done, an autoclicker should not be able to be purchased', () => {
            testDonutMaker.purchaseBuilding("autoclicker");
            expect(testDonutMaker.retrieveBuildingQuantity("autoclicker")).toBe(0);
        })
    });
});

describe("FEATURE 5 : CREATE A TICK METHOD THAT INCREASES YOUR CLICKTOTAL", () => {
    describe("autoclickers should be able to automatically click", () => {
        let testDonutMaker;

        beforeEach(() => {
            testDonutMaker = new DonutMaker();
            for (let x = 0; x < 100; x++) {
                testDonutMaker.recordClick();
            }
        });

        it('donutmaker should be able to make all buildings tick', () => {
            testDonutMaker.purchaseBuilding("autoclicker");
            testDonutMaker.tick();
            expect(testDonutMaker.retrieveBuildingQuantity("autoclicker")).toBeGreaterThan(0);
        })
    });
});