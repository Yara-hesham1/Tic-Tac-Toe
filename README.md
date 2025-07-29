# Tic Tac Toe Game

A beautiful, responsive tic-tac-toe game built with Angular 19, TypeScript, and SCSS.

## Features

- 🎮 **Interactive Gameplay**: Click on squares to make moves
- 🎨 **Modern Design**: Beautiful gradient backgrounds and glassmorphism effects
- 📱 **Responsive**: Works perfectly on desktop and mobile devices
- 🏆 **Win Detection**: Automatically detects wins and draws
- 🔄 **Game Reset**: Easy restart functionality
- ✨ **Smooth Animations**: Hover effects and transitions
- 🎯 **Player Distinction**: Different colors for X (red) and O (teal)

## How to Play

1. The game starts with Player X
2. Click on any empty square to place your mark
3. Players alternate turns (X and O)
4. First player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
5. If all squares are filled without a winner, it's a draw
6. Click "Play Again" or "Restart Game" to start a new game

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Technologies Used

- **Angular 19**: Modern web framework
- **TypeScript**: Type-safe JavaScript
- **SCSS**: Advanced CSS with variables and mixins
- **RxJS**: Reactive programming
- **Google Fonts**: Poppins font family

## Project Structure

```
src/
├── app/
│   ├── board/                 # Game board component
│   │   ├── board.component.ts # Game logic and state management
│   │   ├── board.component.html # Board template
│   │   └── board.component.scss # Board styles
│   ├── square/                # Individual square component
│   │   ├── square.component.ts # Square logic
│   │   ├── square.component.html # Square template
│   │   └── square.component.scss # Square styles
│   └── app.component.*        # Root app component
├── styles.scss               # Global styles
└── index.html                # Main HTML file
```

## Game Logic

The game implements:
- **Board State**: 3x3 grid represented as an array
- **Turn Management**: Alternates between X and O players
- **Win Detection**: Checks all possible winning combinations
- **Draw Detection**: Detects when board is full without a winner
- **Move Validation**: Prevents moves on occupied squares or after game end

## Styling Features

- **Glassmorphism**: Translucent elements with backdrop blur
- **Gradient Backgrounds**: Beautiful color transitions
- **Responsive Design**: Mobile-first approach
- **Hover Effects**: Interactive feedback
- **Color Coding**: Distinct colors for each player
- **Animation**: Smooth transitions and celebration effects

Enjoy playing! 🎮
