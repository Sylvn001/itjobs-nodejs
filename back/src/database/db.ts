import * as mongoDB from "mongodb";

export class Database {
  static db: mongoDB.MongoClient;
  static con: mongoDB.MongoClient;

  public static async connect() {
    this.db = new mongoDB.MongoClient("mongodb://localhost:27017");

    return this.db;
  }

  public static async getDatabase() {
    if (this.con != null) {
      return this.con;
    } else {
      this.con = await this.db.connect();
      return this.con;
    }
  }

  public static async desconnect() {
    await this.db.close();
  }
}

export async function connectToDatabase() {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    "mongodb://localhost:27017"
  );

  await client.connect();

  const db: mongoDB.Db = await client.db("piadasdb");

  return db;
}
