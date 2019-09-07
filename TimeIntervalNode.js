var x=0,y=0,z=0;

function updateX(){
    console.time("Updating-X");
    x+=1;
    console.timeEnd("Updating-X");
}

function updateY()
{
    console.time("Updating-Y");
    y+=1;
    console.timeEnd("Updating-Y");
}

function updateZ()
{
    console.time("Updating-Z");
    z+=1;
    console.timeEnd("Updating-Z");
    display();
    if(z==3)
    {
        clearInterval(ux);
        
    }else if(z==5)
    {
        clearInterval(uy);
        clearInterval(uz);
    }
}
    function display(){
        console.log("x=%d,y=%d,z=%d",x,y,z);
        
    }

    
 var ux=setInterval(updateX(),1000);
  var uy=setInterval(updateY(),1000);
   var uz=setInterval(updateZ(),1000);
