const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let context = canvas.getContext('2d')

//===============================================

class Circle {
    constructor(xPosition,yPosition,xVelocity,yVelocity,radius) {
        this.xPosition = xPosition
        this.yPosition = yPosition

        this.xVelocity = xVelocity
        this.yVelocity = yVelocity

        this.radius = radius
    }

    draw = () => {
        context.beginPath()
        context.arc(this.xPosition,this.yPosition,this.radius,0, 2 * Math.PI, false)
        context.fillStyle = "blue"
        context.strokeStyle = "lightblue"
        context.stroke()
        context.fill()
    }

    update = () => {
        if(this.xPosition + this.radius > innerWidth || this.xPosition - this.radius < 0) {
            this.xVelocity = -this.xVelocity
        }

        if(this.yPosition + this.radius > innerHeight || this.yPosition - this.radius < 0) {
            this.yVelocity = -this.yVelocity
        }

        this.xPosition += this.xVelocity
        this.yPosition += this.yVelocity

        this.draw()
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.previous = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    size() {
        let count = 0;
        let runner = this.head
        while(runner){
            count++
            runner = runner.next
        }
        return count
    }

    addToBack(value){
        let circle = value
        
        if(this.head === null){
            this.head = circle
            this.tail = circle
        } else {
            this.tail.next = circle
            circle.previous = this.tail
            this.tail = circle
        }
        return `The new circle is ${circle}`
    }

    removeFront() {
        if(this.head === null) {
            return undefined
        }

        if(this.head === this.tail) {
            let oldHead = this.head
            this.head = null
            this.tail = null
            return oldHead.value
        }

        let oldHead = this.head
        let newHead = this.head.next
        this.head = newHead
        newHead.previous = null
        oldHead.next = null
        return oldHead.value
    }

    drawCircle(runner = this.head){
        if(runner === null) {
            return
        }

        if(runner.next) {
            runner.value.update()
            return this.drawCircle(runner.next)
        } else {
            runner.value.update()
            return
        }
    }

    removeExcess = () => {
        while(this.size() > 500) {
            this.removeFront()
        }
    }
} 

//===============================================
let list = new LinkedList()
const freshCircles = () => {
    let radius = Math.random() * 30

    let xOrigin = (Math.random() * innerWidth - (radius * 2)) + radius 
    let yOrigin = (Math.random() * innerHeight - (radius * 2)) + radius

    let xVelocity = Math.random() * 10 + 5
    let yVelocity = Math.random() * 10 + 5

    list.addToBack(new Node(new Circle(xOrigin,yOrigin,xVelocity,yVelocity,radius)))
}

const animate = () => {
    requestAnimationFrame(animate)
    context.clearRect(0,0,innerWidth,innerHeight)


    freshCircles()

    list.drawCircle()
    list.removeExcess()

    console.log(list.size())
}
animate()