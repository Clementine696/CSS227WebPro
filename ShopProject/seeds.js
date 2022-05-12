const   mongoose    = require('mongoose'),
        Product     = require('./models/product');
        Address     = require('./models/address');
        User        = require('./models/user');

const data = [
        {
            name:"NOTEBOOK ASUS M515DA-EJ701WS (SLATE GREY)", 
            price:"18,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220312091007_52006_352_1.jpg",
            description:'• AMD Ryzen 7 3700U\n• 8GB DDR4 (ON BOARD)\n• 512GB PCIe/NVMe M.2 SSD\n• 15.6" FHD Anti-Glare\n• AMD Radeon RX Vega 10 Graphics (Integrated)\n• Windows 11 Home + Office Home and Student 2021'
        },
        {
            name:"NOTEBOOK PREDATOR HELIOS 500 PH517-52-7290 (ABYSS BLACK)", 
            price:"79,990", 
            image:"https://www.jib.co.th/img_master/product/original/2022012811274751262_1.jpg",
            description:'• Intel Core i7-11800H\n• 32GB (16GB x2) DDR4\n• 1TB PCIe/NVMe SSD\n• 17.3" QHD IPS 165Hz\n• NVIDIA GeForce RTX 3070 8 GB GDDR6\n• Windows 11 Home'
        },
        {
            name:"NOTEBOOK ACER NITRO 5 AN515-57-99W3 (SHALE BLACK)", 
            price:"59,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220129171909_51264_352_1.jpg",
            description:'• Intel Core i9-11900H\n• 16GB DDR4\n• 1TB PCIe/NVMe SSD\n•15.6" QHD IPS 165Hz\n• NVIDIA GeForce RTX 3070 8 GB GDDR6\n• Windows 11 Home'
        },
        {
            name:"NOTEBOOK ALIENWARE M15 R5-W569211500ATHW10 (DARK SIDE OF THE MOON)", 
            price:"72,590", 
            image:"https://www.jib.co.th/img_master/product/original/20220225180126_48548_352_1.jpg",
            description:'• AMD Ryzen 7 5800H\n• 16GB DDR4 3200MHz\n• 512GB PCIe/NVMe M.2 SSD\n• 15.6" Full HD 165Hz\n• NVIDIA GeForce RTX 3060 6 GB GDDR6\n• Windows 11 Home + Office Home & Student'
        },
        {
            name:"NOTEBOOK ASUS TUF DASH F15 FX517ZE-HN007W (OFF BLACK)", 
            price:"40,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220402162257_52485_352_1.jpg",
            description:'• Intel Core i7-12650H\n• 8GB DDR5 4800MHz\n• 512GB PCIe/NVMe M.2 SSD\n• 15.6" Full HD IPS Anti-Glare 144Hz\n• NVIDIA GeForce RTX 3050Ti 4 GB GDDR6\n• Windows 11 Home'
        },
        {
            name:"NOTEBOOK ASUS ROG STRIX SCAR 17 G743ZW-LL161W (OFF BLACK)", 
            price:"92,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220405085254_52436_352_1.jpg",
            description:'• Intel Core i9-12900H\n• 32GB (16GB x2) DDR5 4800MHz\n• 1TB PCIe/NVMe M.2 SSD\n• 17.3" WQHD IPS Anti-Glare 240Hz\n• NVIDIA GeForce RTX 3070TI 8 GB GDDR6\n• Windows 11 Home'
        },
        {
            name:"NOTEBOOK HP VICTUS 16-E0233AX (CERAMIC WHITE)", 
            price:"35,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220402162510_52484_352_1.jpg",
            description:'• AMD Ryzen 5 5600H\n• 8GB DDR4 3200MHz\n• 512GB PCIe/NVMe M.2 SSD\n• 16.1" Full HD IPS Anti-Glare 144Hz\n• NVIDIA GeForce RTX 3050TI 4 GB GDDR6\n• Windows 11 Home'
        },
        {
            name:"NOTEBOOK HP OMEN 16-C0125AX (MICA SILVER)", 
            price:"63,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220124162850_51067_352_1.jpg",
            description:'• AMD Ryzen 7 5800H\n• 16GB (8GBx2) DDR4 3200MHz\n• 1TB PCIe/NVMe M.2 SSD\n• 16.1" QHD IPS Anti-Glare 165Hz\n• NVIDIA GeForce RTX 3070 8 GB GDDR6\n• Windows 10 Home'
        },
        {
            name:"NOTEBOOK LENOVO IDEAPAD GAMING 3 15IHU6-82K1016JTA (SHADOW BLACK)", 
            price:"29,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220427092252_52739_352_1.jpg",
            description:'• Intel Core i5-11320H\n• 8GB DDR4 3200MHz\n• 512GB PCIe/NVMe M.2 2242\n• 15.6" Full HD IPS Anti-Glare 120Hz\n• NVIDIA GeForce RTX 3050 4 GB GDDR6\n• Windows 11 Home'
        },
        {
            name:"NOTEBOOK LENOVO LEGION 5 15ACH6H-82JU015PTA (PHANTOM BLUE)", 
            price:"47,990", 
            image:"https://www.jib.co.th/img_master/product/original/20220402163010_52497_352_1.jpg",
            description:'• AMD Ryzen 7 5800H\n• 16GB (8GB x2) DDR4 3200MHz\n• 512GB PCIe/NVMe M.2 2280 SSD\n• 15.6" WQHD IPS Anti-Glare 165Hz\n• NVIDIA GeForce RTX 3060 6 GB GDDR6\n• Windows 11 Home'
        }
    ];

function seedDB(){

    Address.remove({}, function(err){
        if(err){
            console.log(err);
        }else{
            console.log('Data Remove Completed');
        }
    });

    User.remove({}, function(err){
        if(err){
            console.log(err);
        }else{
            console.log('Data Remove Completed');
        }
    });


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