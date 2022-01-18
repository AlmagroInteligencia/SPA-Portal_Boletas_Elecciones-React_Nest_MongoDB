#!/bin/bash

echo "Welcome to this SPA ToDo List"
sudo systemctl start mongod
cd backend-app
cd api
npm start &
cd ..
cd ..
cd frontend-app
npm start 