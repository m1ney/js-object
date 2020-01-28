/******객체******/
var car = {//변수는 객체(속성 및 기능)를 가지고 있다.
					// 기능에는 함수가 들어간다.
	color:"red",
	model:"sonata",
	price: 2500,
	start: function (){
		console.log(this.model + "가 시동을 겁니다.");
	},
	drive: function (){
		console.log(this.model + "가 주행을 합니다.");
	},
	stop: function (){
		console.log(this.model + "가 멈춥니다.");
	},
	parking: function (){
		console.log(this.model + "가 주차합니다.");
	}
}
console.log(car);
car.color = "blue" //값 부여하기
console.log(car);
console.log(car.color); //값 가져오기
car.start();

console.clear();

var CarFactory =(function(){
 function CarFactory(model,color,price){//생성자
	this.color=model;
	this.model=color;
	this.price=price;
 }
 //prototype : 원형( 기본기능 만들기 )
 CarFactory.prototype.start= function (){
	console.log(this.model + "가 시동을 겁니다.");
},
CarFactory.prototype.drive= function (){
	console.log(this.model + "가 주행을 합니다.");
},
CarFactory.prototype.stop= function (){
	console.log(this.model + "가 멈춥니다.");
},
CarFactory.prototype.parking= function (){
	console.log(this.model + "가 주차합니다.");
}
 return CarFactory;
})();

var car = new CarFactory("avante","white",3000);
var car2 = new CarFactory("k5","black",2500);

console.log(car);
car.start();
console.log(car2);
car2.start();
//묶음은 대문자로 시작/즉시실행함수

var Human = (function(){
	function Human(name,gender) {
		this.name =name;
		this.gender=gender;
		this.age=0;

	}
	Human.prototype.eat = function(food){
		console.log(this.name+ "이(가)" + food +"을(를) 먹습니다.");
	}
	return Human;
})();

var man = new Human ("아담","남자");
var woman = new Human ("이브","여자");

woman.eat("선악과")
man.eat("선악과")

/* var Slide = (function(){
	function Slide(){

	}
	
	return Slide;
}
)(); 
객체 생성 기본 패턴*/

var SlideES5 = (function(){
	function SlideES5(slide){
		this.slide = slide;

	}
	SlideES5.prototype.init = function(){

	}
	
	return SlideES5;
})();

class SlideES6 {
	constructor(slide){
		this.slide = slide;
	}
	init(){

	}
}

var slide5 =new SlideES5("es5");
var slide6 =new SlideES6("es6");

console.log(slide5);
console.log(slide6);

//	배열
var arr = [1,2,3];
var arr2 = new Array (1,2,3);
console.log(arr2);
arr2.push(4);
console.log (arr2);