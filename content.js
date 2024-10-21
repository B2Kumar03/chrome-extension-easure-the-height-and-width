let isDragging = false;
let startX, startY, measurementBox;

// Mouse down event starts the dragging
document.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;

  // Create a temporary box to show the dragged area
  measurementBox = document.createElement('div');
  measurementBox.style.position = 'absolute';
  measurementBox.style.border = '2px solid red';
  measurementBox.style.background = 'rgba(255, 0, 0, 0.2)';
  measurementBox.style.left = `${startX}px`;
  measurementBox.style.top = `${startY}px`;
  document.body.appendChild(measurementBox);
});

// Mouse move event resizes the box
document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const currentX = e.clientX;
  const currentY = e.clientY;

  // Calculate width and height based on the drag
  const width = Math.abs(currentX - startX);
  const height = Math.abs(currentY - startY);

  // Set the dimensions of the measurement box
  measurementBox.style.width = `${width}px`;
  measurementBox.style.height = `${height}px`;
  measurementBox.style.left = `${Math.min(currentX, startX)}px`;
  measurementBox.style.top = `${Math.min(currentY, startY)}px`;
});

// Mouse up event finishes the dragging
document.addEventListener('mouseup', (e) => {
  if (!isDragging) return;

  isDragging = false;

  const width = Math.abs(e.clientX - startX);
  const height = Math.abs(e.clientY - startY);

  // Display the width and height in an alert or console
  alert(`Measured Area: Width: ${width}px, Height: ${height}px`);

  // Remove the temporary measurement box
  document.body.removeChild(measurementBox);
});
