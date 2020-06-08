import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App></App>, document.getElementById('root')); 


/*code meant to learn about inheritance. Its an example reference*/

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     speak(){
//         console.log('I am', this.name, 'and I am', this.age, 'years old.');
//     }
// }

// const Animal1 = new Animal('Simba', 3);
// Animal1.speak();

// console.log(Animal1);

// class Lion extends Animal {
//     constructor(name, age, furColor, speed) {
//         super(name, age) /*name and age already in parent Animal class in constructor, so no need to invoke name and age again. Instead use super() class */
//         this.furColor = furColor;
//         this.speed = speed;

//     }

//     /*adding Roar method in Lion class*/
//     roar() {
//         console.log('ROOOARRR! I have', 
//         this.furColor, 'fur, and I can run', 
//         this.speed, 'miles an hour!');

//     }
// }

// /*making an instance of the lion class*/
// const Lion1 = new Lion ('Mufasa', 20, 'golden', 25);
// Lion1.speak();
// Lion1.roar();
// console.log(Lion1);
