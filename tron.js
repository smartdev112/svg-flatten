const TronWeb = require('tronweb');

const App_info = {
    Api_Url: 'https://api.trongrid.io',
    admin_key: 'bd859ab86fcfc17f0397c69798f103328ffc798c334495d82232498972dd88d4'
}

const tronWeb = new TronWeb({
    fullNode: App_info.Api_Url,
    solidityNode: App_info.Api_Url,
    eventServer: App_info.Api_Url,
    privateKey: App_info.admin_key
});

const fromAddress = 'TSeauKoHoRicXbTzSs1eziJYy4w4EZgPa1';
const toAddress = 'TVihpZ4vBrT75NtZxhr7mJQQ2jbUMpTzik';

const contractAddress = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
const usdtValue = 500000000;

async function transferUSDT() {
    const usdtContract = await tronWeb.contract().at(contractAddress);

    try {
        // transfer the USDT tokens
        const tx = await usdtContract.transfer(toAddress, usdtValue).send({
            fromAddress,
            ownerAddress: "TGQXEh44rti2r2kqk9dgoaQp5F9GKDQSNK",
            feeLimit: 1000000
        });
        console.log("token transferred"+tx);
    } catch (err) {
        console.log(err);
        transferUSDT();
    }
}

transferUSDT();
