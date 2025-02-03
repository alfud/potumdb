document.getElementById('anvilForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const base = parseInt(document.getElementById('baseValue').value);
  const ranges = calculateRanges(base);

  // Update the table
  document.getElementById('blue0').textContent = `${ranges.blue[0][0]} - ${ranges.blue[0][1]}`;
  document.getElementById('blue1').textContent = `N/A`;
  document.getElementById('blue2').textContent = `N/A`;

  document.getElementById('green0').textContent = `${ranges.green[0][0]} - ${ranges.green[0][1]}`;
  document.getElementById('green1').textContent = `${ranges.green[1][0]} - ${ranges.green[1][1]}`;
  document.getElementById('green2').textContent = `N/A`;

  document.getElementById('yellow0').textContent = `${ranges.yellow[0][0]} - ${ranges.yellow[0][1]}`;
  document.getElementById('yellow1').textContent = `${ranges.yellow[1][0]} - ${ranges.yellow[1][1]}`;
  document.getElementById('yellow2').textContent = `N/A`;

  document.getElementById('red0').textContent = `${ranges.red[0][0]} - ${ranges.red[0][1]}`;
  document.getElementById('red1').textContent = `${ranges.red[1][0]} - ${ranges.red[1][1]}`;
  document.getElementById('red2').textContent = `${ranges.red[2][0]} - ${ranges.red[2][1]}`;
});

function calculateRanges(base) {
  // Helper function to round down
  const roundDown = (value) => Math.floor(value);

  const ranges = {
      blue: [],
      green: [],
      yellow: [],
      red: []
  };

  // Blue Anvil
  const blueNoSlotMin = base;
  const blueNoSlotMax = roundDown(base + (base * 0.03) + 1);
  ranges.blue.push([blueNoSlotMin, blueNoSlotMax]);

  // Green Anvil
  const greenNoSlotMin = blueNoSlotMax + 1;
  const greenNoSlotMax = roundDown(base + (base * 0.06) + 4);
  const greenOneSlotMin = base;
  const greenOneSlotMax = roundDown(base + (base * 0.03) + 1);
  ranges.green.push([greenNoSlotMin, greenNoSlotMax]);
  ranges.green.push([greenOneSlotMin, greenOneSlotMax]);

  // Yellow Anvil
  const yellowNoSlotMin = greenNoSlotMax + 1;
  const yellowNoSlotMax = roundDown(base + (base * 0.09) + 7);
  const yellowOneSlotMin = blueNoSlotMax + 1;
  const yellowOneSlotMax = greenNoSlotMax;
  ranges.yellow.push([yellowNoSlotMin, yellowNoSlotMax]);
  ranges.yellow.push([yellowOneSlotMin, yellowOneSlotMax]);

  // Red Anvil
  const redNoSlotMin = yellowNoSlotMax + 1;
  const redNoSlotMax = roundDown(base + (base * 0.1) + 10);
  const redOneSlotMin = greenNoSlotMax + 1;
  const redOneSlotMax = redNoSlotMax;
  const redTwoSlotMin = base;
  const redTwoSlotMax = redNoSlotMax;
  ranges.red.push([redNoSlotMin, redNoSlotMax]);
  ranges.red.push([redOneSlotMin, redOneSlotMax]);
  ranges.red.push([redTwoSlotMin, redTwoSlotMax]);

  return ranges;
}