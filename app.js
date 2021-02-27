var billCalculator = {
    bills: [124, 48, 268, 180, 42],

    tipCalculator: function () {
        this.tips = [];
        this.totalBills = [];

        for(var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var parcentage;

            if(bill < 50) {
                parcentage = 0.2;
            } else if(bill >= 50 && bill <= 200) {
                parcentage = 0.15;
            } else {
                parcentage = 0.10;
            }

            this.tips[i] = bill * parcentage;
            this.totalBills[i] = bill + bill * parcentage;
        }
        
    }
};




billCalculator.tipCalculator();

console.log(billCalculator);
