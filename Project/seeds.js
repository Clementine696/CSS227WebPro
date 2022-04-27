const   mongoose    =   require('mongoose'),
        Print       =   require('./models/print'),
        Comment     =   require('./models/comment');

// const data = [
//         {
//             name:"Ironman", 
//             Artist:"Patum", 
//             url:"https://play.gxc.gg/game/6703cbbd-598c-45b2-8fb0-85190df9890e/graphic/986a427f-f85d-4868-964e-a3dc032af374?dfbbc76d138f5f4f98c74afa28020835"
//         },
//         {
//             name:"Ironman2", 
//             Artist:"Patum", 
//             url:"https://play.gxc.gg/game/6703cbbd-598c-45b2-8fb0-85190df9890e/graphic/c1fca3ad-ca2a-44d1-97d8-f57a0b423bff?db0a258d88915f646d4bb0354deb6d7f"
//         },
//         {
//             name:"Ironman3", 
//             Artist:"Patum", 
//             url:"https://play.gxc.gg/game/6703cbbd-598c-45b2-8fb0-85190df9890e/graphic/5f7f6e2f-633c-437e-b1c2-d0dee3f77f2f?6d403688376b1d973d4a2911f652c41a"
//         }
//     ];

function seedDB(){
    Comment.remove({}, function(err){
        if(err){
            console.log(err);
        }else{
            console.log('Data Remove Completed');
        }
    });


    Print.remove({}, function(err){
        if(err){
            console.log(err);
        } else{
            console.log('Data removal complete');
            // data.forEach(function(seed){
            //     Print.create(seed, function(err, print){
            //         if(err){
            //             console.log(err);
            //         } else{
            //             console.log('New data added!');
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
            //         }
            //     });
            // });
        }
    });
}

module.exports = seedDB;