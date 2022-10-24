document.addEventListener('DOMContentLoaded', () => {
    //account size
    //risk %
    //const risk = document.querySelector("#risk").value;
    //leverage
    //entry price
    //stoploss price
    document.querySelector('#compute').onclick = () => {
        const asize = parseFloat(document.querySelector("#asize").value);
        const risk = parseFloat(document.querySelector("#risk").value)/100;
        const eprice = parseFloat(document.querySelector("#eprice").value);
        const sprice = parseFloat(document.querySelector("#sprice").value);

        var result = 0;
        var risk_amount = asize * risk;
        var dist = 1 - (sprice / eprice);
        dist = dist.toFixed(4);
        result = risk_amount / dist;
        result = Math.abs(result);
        result = result.toFixed(2);
        var lev = Math.round(result / asize);
        console.log(lev);

        //modify html document for results
        document.querySelector('#line1').innerHTML = `Trade amount in USDT: $ ${result}`;
        document.querySelector('#line2').innerHTML = `Risk amount: $ ${risk_amount}`;
        document.querySelector('#line3').innerHTML = `Min. leverage: ${lev}`;
    };

    document.querySelector('#toggle').onclick = () => {
        var icon = document.getElementById('icon');
        document.body.classList.toggle("light-mode");
        if(document.body.classList.contains('light-mode')){
            mode.name = "moon";
        } else{
            mode.name = "sunny-outline";
        }

    };
})

        


