# Drone-Management-API


This project implements a Drone Dispatch Service that allows clients to communicate with drones for medication delivery.

## Requirements
- Node.js (v14 or higher)
- MySQL database (v5.7 or higher)



## Installation
1. Clone the repository:
- git https://github.com/justiyz/Drone-Management-API.git

2. Open in your preferred Editor:
- i.e VSCode

3. Navigate to the project directory:
- cd C:\Users\****\drone-management on your local computer

4. Install the dependencies:
- npm install




## Configuration
1. Rename the `.env.example` file to `.env`:
- e.g from .env.example to .env

2. Update the `.env` file with your MySQL database configurations:
- DB_HOST=localhost
- DB_USER=root
- DB_PASSWORD=your-password
- DB_DATABASE=drone_db



## Database Setup

1. Create a MySQL database with the name specified in the `.env` file.

2. Run the database migrations to create the required tables:
- npx sequelize-cli db:migrate

3. (Optional) Preload required data in the database (e.g., drone models).




## Usage

1. Start the server: 
- node server.js

2. The Drone Dispatch Service will be available at http://localhost:8080.



## API Endpoints

The following API endpoints are available:

- `POST api/drones/register-drone`: Register a new drone. 
- `POST /api/medications/load-drone`: Load medications onto a drone.
- `GET /api/drones/find-all/:id`: Get the list of loaded medications for a drone (id --> drone Id).
- `GET /api/drones/find-all-available`: Get the list of available drones for loading.
- `GET /api/drones/check-drone/:id`:  Get the battery level of a drone.


## Testing
No Tests yet...



## Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.


















