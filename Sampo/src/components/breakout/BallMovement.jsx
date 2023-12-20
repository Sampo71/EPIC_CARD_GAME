export function BallMovement(ctx, ballObj){
    let data = new Ball(ballObj.x, ballObj.y, ballObj.rad);
    data.Draw(ctx);
    ballObj.x += ballObj.dx;
    ballObj.y += ballObj.dy;

}

class Ball{
    constructor(x ,y, rad){
        this.x = x;
        this.y = y;
        this.rad = rad;
    }

    Draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();
    }
}