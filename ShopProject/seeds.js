const   mongoose    =   require('mongoose'),
        Product       =   require('./models/product');

const data = [
        {
            name:"NOTEBOOK ASUS M515DA-EJ701WS (SLATE GREY)", 
            price:"18,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220312091007_52006_352_1.jpg",
            description:"AMD Ryzen 7 3700U"
        },
        {
            name:"Ironman2", 
            price:"Patum", 
            image:"https://play.gxc.gg/game/6703cbbd-598c-45b2-8fb0-85190df9890e/graphic/c1fca3ad-ca2a-44d1-97d8-f57a0b423bff?db0a258d88915f646d4bb0354deb6d7f"
        },
        {
            name:"Ironman3", 
            price:"Patum", 
            image:"https://play.gxc.gg/game/6703cbbd-598c-45b2-8fb0-85190df9890e/graphic/5f7f6e2f-633c-437e-b1c2-d0dee3f77f2f?6d403688376b1d973d4a2911f652c41a"
        }
    ];

function seedDB(){

    // Comment.remove({}, function(err){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log('Data Remove Completed');
    //     }
    // });


    Product.remove({}, function(err){
        if(err){
            console.log(err);
        } else{
            console.log('Data removal complete');
            data.forEach(function(seed){
                Product.create(seed, function(err, print){
                    if(err){
                        console.log(err);
                    } else{
                        console.log('New data added!');
            //             // Comment.create({
            //             //     author: 'Tony',
            //             //     text: 'This is good'
            //             // }, function(err, comment){
            //             //     if(err){
            //             //         console.log(err);
            //             //     }else {
            //             //         print.comments.push(comment);
            //             //         print.save();
            //             //     }
            //             // });
                    }
                });
            });
        }
    });
}

module.exports = seedDB;