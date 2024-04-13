/* 
Problem: Design a simple snake game where a snake can move in a given direction.
Suggestion: Focus on solving the problem first and then design the problem.
Suggestion: For moving the snake you only need to add a head and remove the tail.
*/

const enum DIRECTIONS {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Snake {
  current: Point[];
  direction: DIRECTIONS;

  constructor(start: Point) {
    this.current.push(start);
    this.direction = DIRECTIONS.LEFT;
  }

  move(direction: DIRECTIONS) {
    const head = {...this.current[0]};
    switch (direction) {
      case DIRECTIONS.UP:
        head.x -= 1;
        break;
      case DIRECTIONS.DOWN:
        head.x += 1;
        break;
      case DIRECTIONS.LEFT:
        head.y -= 1;
        break;
      case DIRECTIONS.RIGHT:
        head.y += 1;
        break;
    }
    this.current.unshift(head);
    this.current.pop();
  }
}

class Game {
  snake: Snake;

  constructor() {
    this.snake = new Snake(new Point(0, 0));
  }

  move() {
    this.snake.move(DIRECTIONS.DOWN);
  }

}
