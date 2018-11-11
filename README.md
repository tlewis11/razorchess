# Razorchess
Razorchess is an open source Chess game which allows the user to play against the Stockfish chess engine.

# Run Razorchess locally
0. Clone this repo
`git clone https://github.com/tlewis11/razorchess`

1. Build and run Docker Container
```
cd razorchess
docker build -t razorchess-frontend .
docker run -p 8081:8081 -it razorchess-frontend
```
2. Browse to localhost:8081
