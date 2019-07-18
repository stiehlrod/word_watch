// var pry = require('pryjs')
import $ from 'jquery'
// const express = require('express')
// const app = express()

$(document).ready(() => {
  getWord()
  // fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(response => console.log('Success', JSON.stringify(response)))
  // .catch(error => console.error('Error:', error));

})

function getWord() {
  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
  .then(response => {
    return response.json()
  }).then(result => {
    console.log(result)
    var topWord = Object.keys(result.word)[0]
    var wordCount = Object.values(result.word)[0]
    $(".top-word").append(topWord).append(': ').append(wordCount)
  })
}

// function getWord() {
//   fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
//   .then(res => {
//     console.log(res)
//     res.json()
//   }).then(result => {
//     console.log(result)
//     // word = (result)
//     // lastResult = (word)
//     // const data = result;
//     // const topWord = data["word"]
//     // return topWord
//         // $(".top-word").append(result)
//     })
// }
// var pry = require('pryjs'); eval(pry.it);

// fetch("url")
// .then(response => {
//   resonse.json
// }).then(result => {
//   console.log(result)
//     lastResult = Object.key(result)
// })
