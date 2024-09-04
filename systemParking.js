const readline = require('readline');

const { stdin : input , stdout : output} = require('process');

const rl = readline.createInterface({input,output});

// Menanyakan jenis kendaraan
rl.question('Jenis kendaraan anda : ',(kendaraan) => {
    let biayaMobil = 5000;
    let biayaMotor = 3000;
    // menanyakan waktu masuk kendaraan
    rl.question(`Jam masuk kendaraan : `,(masuk)=> {
        // Menanyakan waktu keluar kendaraan
        rl.question(`jam keluar kendaraan : `,(keluar)=>{
            let waktuAkhir = keluar - masuk;
            console.log(`Total waktu parkir : ${waktuAkhir} jam`)
            // Logic jenis kendaraan
            if(kendaraan == "mobil"){
               const totalMobil =  biayaMobil * waktuAkhir
               console.log(`Biaya parkir : ${totalMobil}`)
            }else {
                const totalMotor =  biayaMotor * waktuAkhir
                console.log(`Biaya parkir : ${totalMotor}`)
            }
            rl.close();
        })
    })
})