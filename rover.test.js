const marsRoverCommands = require('./rover');

test('should return the correct result when given valid input', ()=> {
  const x = 0;
  const y = 0;
  const heading = 'NORTH';
  const commands = "FLR";
  const obstacles = [[1, 0], [2, 0]];
  const result = marsRoverCommands(x, y, heading, commands, obstacles);
  expect(result).toEqual('(0, 1) NORTH');
})

test('should return Invalid Commands message when given Invalid Commands', ()=> {
  const x = 0;
  const y = 0;
  const heading = 'NORTH';
  const commands = "FLRX"; // X is invalid command
  const obstacles = [[1, 0], [2, 0]];
  const result = marsRoverCommands(x, y, heading, commands, obstacles);
  expect(result).toEqual('Invalid command you can only use F, B, L, and R');
})

test('should return STOPPED due to collision at x, y and heading', ()=> {
  const x = 0;
  const y = 0;
  const heading = 'NORTH';
  const commands = "RF";
  const obstacles = [[1, 0], [2, 0]]; // Collision
  const result = marsRoverCommands(x, y, heading, commands, obstacles);
  expect(result).toEqual(`STOPPED due to collision at (0, 0) EAST`);
})