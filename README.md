# Mastermind Game

This is a simple implementation of the classic board game Mastermind, built with React Native.
The game generates a sequence of colors that the player must guess within a certain number of attempts.

## Game Rules

The game randomly selects a sequence of colors from a pool of possible colors.
Each guess is evaluated and the player is given feedback to help adjust their next guess.

## Built with

- React Native

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

You need to have Node.js and npm installed on your machine.
If you don't have them, you can download and install from here: [Node.js](https://nodejs.org/)

### Installation

To install the project, follow these steps:

1. Clone the repository:
   
   ```bash
   git clone https://github.com/JuliaKleber/MastermindReactNative.git

3. Navigate into the project directory:
   
   ```bash
   cd MastermindReactNative
   
5. Install the dependencies:
   
   ```bash
   npm install

7. Run the project:
   
   ```bash
   npm start

## Screenshot

![image](https://github.com/JuliaKleber/MastermindReactNative/assets/142741980/d06aa979-25f4-406d-8509-0d00931c90e6)


## Components

The game consists of several components, for example:

- ColorPicker: Allows the player to select a color.
- CurrentGuessTrial: Represents the current guess that has not yet been submitted by the user.
- OldGuessTrial: Represents a single guess attempt that has already been submitted by the user.
- Instruction: Displays the game rules and instructions.

## Author

[Julia Kleber](https://github.com/JuliaKleber)
