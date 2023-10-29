let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth -100;
canvas.height = window.innerHeight -100;


let dino ={
    // 공룡죄표
    x:10,
    y:200,
    width:50,
    height:50,
    draw(){
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(img2, this.x,this.y)
    }
}

let img = new Image();
img.src= 'images.jpg'

let img2 = new Image();
img2.src = 'dino.png';



//장애물

class Cactus {
    constructor(){
        this.x=500;
        this.y=200;
        this.width=20;
        this.height=20;
    }
    draw(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(img, this.x,this.y)
    }
}

let timer =0
let cactusArray =[]
let jumping = false
let jumptimer =0
let animation
function moving(){
    animation=  requestAnimationFrame(moving)
    timer++

    ctx.clearRect(0,0,canvas.width,canvas.height)
    if(timer%200 ===0){
        let cactus = new Cactus()
        cactusArray.push(cactus)
        cactus.draw();
    }
    cactusArray.forEach((e ,i,o)=>{
        // x좌표가 0 미만이면 제거
        if(e.x< 0){
        o.splice(i,1)
        }
        e.x-=2 

        crush(dino,e);
        e.draw() 
    })
    if(jumping ==true){
        dino.y-=2
        jumptimer++
    }
    if(jumping ==false){
        if(dino.y<200){

            dino.y+=2
        }
    }
    if(jumptimer>100){
        jumping = false
        jumptimer =0
    }

    dino.draw()
}
moving()

// 충돌 확인

function crush (dino,cactus){
let x = cactus.x-(dino.x+dino.width)
let y = cactus.y-(dino.y+dino.height)
if(x <0 && y<0){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    cancelAnimationFrame(animation)
}
}


document.addEventListener('keydown',function(e){
    if(e.code ==="Space"){
        jumping = true
    }
})