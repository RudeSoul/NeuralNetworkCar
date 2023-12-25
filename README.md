# Self-Driving Car Simulation

![Self-Driving Car Simulation](<img width="1512" alt="selfDrivingCar" src="https://github.com/RudeSoul/NeuralNetworkCar/assets/30189506/df0c87c4-e58e-448f-9a91-5734c3d8f440">
)

A simple self-driving car simulation project implemented using HTML, CSS, and JavaScript. The simulation includes user-controlled cars and AI-controlled cars using a neural network.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Functions](#functions)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo

<img width="1512" alt="selfDrivingCar" src="https://github.com/RudeSoul/NeuralNetworkCar/assets/30189506/19aca7fd-074a-4703-abf3-98b036e50570">


## Features

- User-controlled car movements with arrow keys.
- AI-controlled cars using a neural network.
- Collision detection with road borders and traffic.
- Responsive design for various screen sizes.

## Functions

### `Car.update(roadBorders, traffic)`

Updates the car's position and state based on road borders and traffic. Includes movement, collision detection, and AI controls.

### `Controls.#addKeyboardListeners()`

Adds keyboard listeners for arrow keys to control the car.

### `Road.getLaneCenter(laneIndex)`

Calculates the center of a lane based on the given lane index.

### `Sensor.update(roadBorders, traffic)`

Updates the sensor readings based on road borders and traffic.

### `Visualizer.drawNetwork(ctx, network)`

Draws the neural network on a given canvas context.

*Note: This is a brief summary. Refer to the source code for detailed information.*

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rudesoul/self-driving-car-simulation.git
