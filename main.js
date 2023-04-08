c1=document.getElementById("myCanvas");
ctx=c1.getContext("2d");
arr=["i1.jpg","i2.jpeg","i3.jpg","i4.jpg","i5.jpeg","i6.jpeg"]
rn=Math.floor(Math.random()*6)
console.log("image number : ",rn)
bgi=arr[rn];
ri="rover.png";
rw=100;
rh=90;
rx=10;
ry=10;
function add(){
    background=new Image();
    background.onload=uploadbg;
    background.src=bgi;
    rover=new Image();
    rover.onload=uploadrover;
    rover.src=ri;}
  
function uploadbg(){
    ctx.drawImage(background,0,0,c1.width,c1.height);
}

function uploadrover(){
    ctx.drawImage(rover,rx,ry,rw,rh);
}
window.addEventListener("keydown",Mykeydown);
function Mykeydown(e){ 
    kp=e.keyCode;
    if (kp=='38'){
        up();
        console.log("up")
    }
    if (kp=='40'){
        down();
        console.log("down")
    }
    if (kp=='39'){
        right();
        console.log("right")
    }
    if (kp=='37'){
        left();
        console.log("left")
    }

}
function up(){
    if(ry>=0){
        ry=ry-10;
        uploadbg();
        uploadrover();

    }
}

function down(){
    if(ry<=500){
        ry=ry+10;
        uploadbg();
        uploadrover();
    
    }
}

function left(){
    if(rx>=0){
        rx=rx-10;
        uploadbg();
        uploadrover();
    
    }
}

function right(){
    if(rx<=700){
        rx=rx+10;
        uploadbg();
        uploadrover();
    
    }
}
