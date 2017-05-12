exports.home=function(req,res){
  res.render('home',{title:'iLovemyIndia',
                    headline:'We believe that every city have something to say'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading;
    var imageCount=4;

    if(cityName==='madurai'){
       title="Madurai";
       heading="Madurai: Where love is in the air";
    }
    else if(cityName==='chennai'){
       title="Chennai";
       heading="Chennai: Good talkers are only found in Paris";
    }
    else if(cityName==='coimbatore'){
       title="Coimbatore";
       heading="Coimbatore: Buzz, Beautiful architecture and Football";
    }

    res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount});
  }
