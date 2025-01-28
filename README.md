# Expo Image Not Showing Bug
This repository demonstrates a common bug in Expo applications where images fail to load, even when the image path is correctly specified.  The issue is resolved by ensuring that the asset is correctly imported and the path is accurate within the project structure.

## Bug
The initial `App.js` file contains code that attempts to display an image.  However, due to a common mistake in setting up assets in Expo, the image does not render correctly.

## Solution
The `bugSolution.js` file provides a corrected version of the code.  The solution clarifies the path to the asset, ensures proper asset registration, and uses methods to properly load and display the image.

## Setup
1. Clone the repository.
2. Navigate to the repository in your terminal.
3. Run `expo install expo-asset` to install required Expo package
4. Run `expo start` to start the development server.
