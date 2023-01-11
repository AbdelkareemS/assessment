function marsRoverCommands(x, y, heading, commands, obstacles) {
  for (const command of commands) {
    if (!["F", "B", "L", "R"].includes(command)) {
      return `Invalid command you can only use F, B, L, and R`;
    }

    let nextX = x;
    let nextY = y;

    if (command === "F" || command === "B") {
      // Move Forward or Backward
      if (heading === "NORTH") {
        command === "F" ? nextY += 1 : nextY -= 1;
      } else if (heading === "EAST") {
        command === "F" ? nextX += 1 : nextX -= 1;
      } else if (heading === "SOUTH") {
        command === "F" ? nextY -= 1 : nextY += 1
      } else if (heading === "WEST") {
        command === "F" ? nextX -= 1 : nextX += 1;
      }
    } else if (command === "L" || command === "R") {
      // Rotate Rover
      if (heading === "NORTH") {
        command === "R" ? heading = "EAST" : heading = "WEST";
      } else if (heading === "EAST") {
        command === "R" ? heading = "SOUTH" : heading = "NORTH";
      } else if (heading === "SOUTH") {
        command === "R" ? heading = "WEST" : heading = "EAST";
      } else if (heading === "WEST") {
        command === "R" ? heading = "NORTH" : heading = "SOUTH";
      }
    }

    // Check if the rover's next position contains an obstacle
    if (obstacles.some(([x, y]) => x === nextX && y === nextY)) {
      return `STOPPED due to collision at (${x}, ${y}) ${heading}`;
    } else {
      x = nextX;
      y = nextY;
    }
  }

  return `(${x}, ${y}) ${heading}`;
}

module.exports = marsRoverCommands


// const obstacles = [[1, 4], [3, 5], [7, 4]];
// console.log(marsRoverCommands(0, 0, "NORTH", "FR", obstacles));