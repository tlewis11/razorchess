#!/bin/bash

docker build -t razorchess-frontend .
docker run -p 8081:8081 -it razorchess-frontend
