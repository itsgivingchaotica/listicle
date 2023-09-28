import { pool } from "./database.js";
import "./dotenv.js";
import playerData from "../data/players.js";

const createPlayersTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS player;

    CREATE TABLE IF NOT EXISTS player (
        id SERIAL PRIMARY KEY,
        age INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        coach VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        titles INT NOT NULL,
        ranking INT NOT NULL,
        rankinghigh INT NOT NULL,
        points INT NOT NULL,
        recentbesttitle VARCHAR(255) NOT NULL,
        description TEXT NOT NULL
    )
`;

  try {
    await pool.query(createTableQuery);
    console.log("Created player table");
  } catch (error) {
    console.log("⚠️ error creating player table", error);
  }
};

const seedPlayersTable = async () => {
  await createPlayersTable();

  playerData.forEach((player) => {
    const insertQuery = {
      text: "INSERT INTO player (age,name,country,coach,image,titles,ranking,rankinghigh,points,recentbesttitle,description) VALUES ($1, $2, $3, $4, $5, $6, $7,$8,$9,$10,$11)",
    };

    const values = [
      player.age,
      player.name,
      player.country,
      player.coach,
      player.image,
      player.titles,
      player.ranking,
      player.rankinghigh,
      player.points,
      player.recentbesttitle,
      player.description,
    ];
    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting player", err);
        return;
      }

      console.log(`✅ ${player.name} added successfully`);
    });
  });
};

seedPlayersTable();
