<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Extension</title>
  <style>
    body {
      width: 200px;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    button {
      padding: 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #45a049;
    }
    h2{
        background-color: red;
    }
  </style>
</head>
<body>
  <h2 >Hello </h2>
  <p>Click the button to do something cool!</p>
  <button id="clickMe">Click Me</button>

  <script src="popup.js"></script>
</body>
</html>
