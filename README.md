# Single-Electron-Transistor-Simulation
Project Overview: Single Electron Transistor (SET) Simulation Website

website link:
https://single-electron-transistor-simulation.netlify.app/

This project is an interactive web application designed to simulate and visualize the behavior of a Single Electron Transistor (SET) under varying parameters such as Gate Voltage, Temperature, and Capacitance. The simulation aims to demonstrate key phenomena like Coulomb blockade oscillations, which are fundamental to SET operation.


---

Features

1. Dynamic Parameter Control:

Users can adjust parameters using sliders:

Gate Voltage: Range from -5V to 5V.

Temperature: Range from 1K to 300K.

Capacitance: Range from 0.1fF to 10fF.


Real-time updates to values are displayed beside sliders.



2. Graphical Visualization:

Simulates Coulomb blockade oscillations based on user input.

Displays the output graph dynamically on a canvas.



3. Data Export:

Allows users to export the current simulation parameters as a JSON file.



4. Responsive Design:

The interface is optimized for both desktop and mobile screens.



5. No External Libraries:

All functionalities are implemented using Vanilla JavaScript, HTML, and CSS, ensuring lightweight performance and compatibility.





---

Technical Details

Technologies Used:

HTML: For the structure of the web application.

CSS: For styling and responsive design.

JavaScript: For interactivity, calculations, and graphical rendering.


Canvas API:

Used to render the simulation graph dynamically.


Data Export:

Utilizes the Blob API to generate and download JSON files.




---

How It Works

1. Simulation Engine:

The Coulomb blockade oscillations are mathematically simulated based on the gate voltage, temperature, and capacitance values.

The results are plotted dynamically on the canvas element.



2. Interactive UI:

Users can interact with sliders to explore how changing parameters affect SET behavior.

Real-time feedback ensures an engaging learning experience.



3. Export Functionality:

Captures the current parameter values and saves them in a structured JSON format for offline analysis.

---

Impact

This project serves as a teaching tool for understanding the principles of Single Electron Devices, providing a hands-on and visual approach to exploring complex phenomena in nanoelectronics.
