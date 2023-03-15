# Brand New Fitness App

## Description

Brand New Fitness App aims to provide a simple single page app that can list, persist, delete and update the exercise information of users.

## Goals

The goal of Brand New Fitness App is to serve as practice for creating both a backend and a frontend from scratch to get experiencing creating both ends of the process and making them work togehter intentionally. Full CRUD (create, read, update, delete) functionality between the front and backend working together is the primary goal.

## Installation

Brand New Fitness App consists of a frontend and a backend, hosted in two separate GitHub respositories.

Frontend GitHub Repo link: git@github.com:codifyamplify/new-brand-new-fitness-frontend.git
Backend Github Repo Link: git@github.com:codifyamplify/Brand-New-Fitness-App.git

A new user can either copy these links and clone them to their local machine, each in their separate repositories, or they can click the < > Code button on the GitHub repo page and copy the SSH link to use for cloning on their local machine.

After both repositories are cloned, start the server for each end. Make sure you are in the directory your frontend was cloned to when you start your frontend server (npm start). Make sure you are in the director your backend was cloned to when you start your backend server (rake server). These commands can be run from the terminal.

Brand New Fitness App uses npm, React, and react-router-dom v5 for the frontend. While in the frontend directory runnning npm install should install all dependencies:

npm install

When ready, run npm start. Your frontend is up and running.

Brand New Fitness App uses ruby, Active-Record, and Sinatra for the backend. While in the backend directory running bundle install should install all dependencies:

bundle install

When ready, run rake server. Your backend is up and running.

## Features

Brand New Fitness App boasts an astounding full CRUD functionality.

Existing users and exercises can be viewed from the Existing Users list and the Existing Exercises list.
Each user card features a Delete User button which will remove that user card from the DOM as well as the database.

Everywhere you see an exercise listed it will offer a delete button (which will do what you will expect, on both the front and the backend) as well as an Edit This Exercise button.

The latter will take you to a new component, an edit form with that exercise's existing data points pre-populated, and allow you to update them on form submission.

Create, Read, Update, and Delete are all presented and accounted for.

## Links

A brief video demonstraion of this app:
https://youtu.be/lRs9oVNx65M

Frontend: git@github.com:codifyamplify/new-brand-new-fitness-frontend.git

Backend: git@github.com:codifyamplify/Brand-New-Fitness-App.git