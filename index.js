const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "опа твоя мать хорошая женщина";
const { inspect } = require("util");
const request = require('request');

function minus(){
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
result = num1-num2;	
//ну че пупа, как тебе калькулятор в дискорде?
document.getElementById('out').innerHTML = result;
}
function deli(){
	var num1, num2, result;
num1 = document.getElementById('n1').value;	
num2 = document.getElementById('n2').value;	
result = num1/num2;	
//может быть тебе еще в ебуняру прописать?
document.getElementById('out').innerHTML = result;
}
function ymnoj(){
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
result = num1*num2;	
//или ты сам бота сделаешь, мудоебок?
document.getElementById('out').innerHTML = result;
}
function plus(){
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
result = num1+num2;	
//хорошо, но ты знаешь что ты
document.getElementById('out').innerHTML = result;
}
//вот здесь вот ниже написано
function abc(){alert('ты пидор')}




























