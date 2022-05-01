const   mongoose    =   require('mongoose'),
        Product       =   require('./models/product');

const data = [
        {
            name:"NOTEBOOK ASUS M515DA-EJ701WS (SLATE GREY)", 
            price:"18,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220312091007_52006_352_1.jpg",
            description: [ "AMD Ryzen 7 3700U", "8GB DDR4 (ON BOARD)", "512GB PCIe/NVMe M.2 SSD", "15.6 FHD Anti-Glare", "AMD Radeon RX Vega 10 Graphics (Integrated)", "Windows 11 Home + Office Home and Student 2021"]
        },
        {
            name:"NOTEBOOK PREDATOR HELIOS 500 PH517-52-7290 (ABYSS BLACK)", 
            price:"79,990", 
            image:"https://www.jib.co.th/img_master/product/original/2022012811274751262_1.jpg"
        },
        {
            name:"NOTEBOOK ACER NITRO 5 AN515-57-99W3 (SHALE BLACK)", 
            price:"59,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220129171909_51264_352_1.jpg"
        },
        {
            name:"NOTEBOOK ALIENWARE X15 R1-W569211001TH (LUNAR LIGHT)", 
            price:"113,490", 
            image:"https://www.jib.co.th/img_master/product/original/20220322094131_48552_352_1.jpg"
        },
        {
            name:"NOTEBOOK ASUS TUF DASH F15 FX517ZE-HN007W (OFF BLACK)", 
            price:"40,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220402162257_52485_352_1.jpg"
        },
        {
            name:"NOTEBOOK ASUS ROG STRIX SCAR 17 G743ZW-LL161W (OFF BLACK)", 
            price:"92,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220405085254_52436_352_1.jpg"
        },
        {
            name:"NOTEBOOK HP VICTUS 16-E0233AX (CERAMIC WHITE)", 
            price:"35,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220402162510_52484_352_1.jpg"
        },
        {
            name:"NOTEBOOK HP OMEN 16-C0125AX (MICA SILVER)", 
            price:"63,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220124162850_51067_352_1.jpg"
        },
        {
            name:"NOTEBOOK LENOVO IDEAPAD GAMING 3 15IHU6-82K1016JTA (SHADOW BLACK)", 
            price:"29,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220427092252_52739_352_1.jpg"
        },
        {
            name:"NOTEBOOK LENOVO LEGION 5 15ACH6H-82JU015PTA (PHANTOM BLUE)", 
            price:"47,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220402163010_52497_352_1.jpg"
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