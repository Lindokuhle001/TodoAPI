import dotenv from 'dotenv'
dotenv.config()
import { ClientConfig } from 'pg'

const getPort = (port: string | undefined): number => port ? parseInt(port) : 5432

const configuration: ClientConfig = {
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST || "localhost",
  database: process.env.POSTGRES_DATABASE || "todoDB",
  password: process.env.POSTGRES_PASSWORD,
  port: getPort(process.env.POSTGRES_PORT),
};

export default configuration;
