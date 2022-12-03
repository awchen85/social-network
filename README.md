## Social-network

## Description
* This project is developed as the backbone of a social network. You are to add/edit/delete users, add/delete friends as well as add/delete thoughts and replies to those thoughts.

## Walkthrough
Demo recording: https://drive.google.com/file/d/1dXzUeiBknM6JSRVhr3QxGjvAsvxRvqMP/view

Github Repo: https://github.com/awchen85/social-network

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)

## Installation
* node.js
* npm init -y to initiate node and packages
* npm i express
* npm i mongoose

## Usage
* GIVEN a social network API
* WHEN I enter the command to invoke the application
    * THEN my server is started and the Mongoose models are synced to the MongoDB database
* WHEN I open API GET routes in Insomnia for users and thoughts
    * THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia
    * THEN I am able to successfully create, update, and delete users and thoughts in my database
* WHEN I test API POST and DELETE routes in Insomnia
    * THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Contribution

Created by Alex Chen and his army of cats 🐱