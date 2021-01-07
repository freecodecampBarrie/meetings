var LOOKUP = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.10,
    "NICKEL": 0.05,
    "PENNY": 0.01
}

function checkCashRegister(price, cash, cid) {
    var change = cash - price;

    var cashBack = [];
    cid.reverse();
    for (var i = 0; i < cid.length; i++) {
        console.log(change);
        console.log(cid[i])
        var denomination = LOOKUP[cid[i][0]];
        if (change > denomination) {

            var available = cid[i][1];
            if (available > change) {

                var refund = Math.floor(change / denomination) * denomination;

                cashBack.push([cid[i][0], refund]);
                change = change - refund;
            }
            else {
                var refund = available;
                cashBack.push([cid[i][0], refund]);
                change = change - refund;
            }



            // change = 0.5; available = 4.25




            //      var diff = change - cid[i][1];    
            // var denomination = LOOKUP[cid[i][0
            // var quotient = Math.floor(change/denomination);
            // var remainder = change % denomination;

            // console.log("D",denomination);
            // console.log("Q",quotient);

        }


        /*
        var denomination = LOOKUP[cid[i][0]];
        var quotient = Math.floor(change/denomination); 
            */
        // console.log(cid[i][0],LOOKUP[cid[i][0]]);
    }
    console.log("Cashback ", cashBack);

    return { status: "OPEN", change: cashBack }
}


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 0.04], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);