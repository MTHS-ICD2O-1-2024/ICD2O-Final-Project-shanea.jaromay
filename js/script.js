// Copyright (c) 2025 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: May 2025

// This file contains the JS functions for index.html

"use-strict"

/**
* This function calculate, click cookie
*/
// eslint-disable-next-line no-unused-vars
function prepareSpinner() {
  // input
  let input = document.getElementById("wordsInput").value.trim()

  // process
  let words = ""
  let currentWord = ""
  let wordList = ""

  // Build a string to simulate the list of words separated by commas
  for (let counter = 0; counter < input.length; counter++) {
    let letter = input.substring(counter, counter + 1)
    if (letter === ",") {
      currentWord = currentWord.trim()
      if (currentWord !== "") {
        if (wordList === "") {
          wordList = currentWord
        } else {
          wordList = wordList + "," + currentWord
        }
      }
      currentWord = ""
    } else {
      currentWord = currentWord + letter
    }
  }

  // Add last word after loop ends
  currentWord = currentWord.trim()
  if (currentWord !== "") {
    if (wordList === "") {
      wordList = currentWord
    } else {
      wordList = wordList + "," + currentWord
    }
  }

  // Convert the wordList string to an array (must use brackets here)
  words = wordList.split(",")

  // output
  if (words.length < 2) {
    alert("Please enter at least 2 words separated by commas.")
  } else {
    document.getElementById("result").innerHTML = "Ready to spin!"
    window.spinnerWords = words
    window.currentRotation = 0
  }
}

// eslint-disable-next-line no-unused-vars
function spin() {
  if (!window.spinnerWords || window.spinnerWords.length < 2) {
    alert("Please create the spinner first.")
    return
  }

  let words = window.spinnerWords
  let currentRotation = window.currentRotation

  let wheel = document.getElementById("spinner-wheel")
  let spins = 5
  let randomDegree = Math.floor(Math.random() * 360)
  currentRotation = currentRotation + spins * 360 + randomDegree

  wheel.style.transform = "rotate(" + currentRotation + "deg)"

  let sliceAngle = 360 / words.length
  let normalizedDegree = currentRotation % 360
  let index = Math.floor((words.length - (normalizedDegree / sliceAngle)) % words.length)

  setTimeout(function () {
    document.getElementById("result").innerHTML = "Result: " + words[index]
  }, 4000)

  window.currentRotation = currentRotation
}
