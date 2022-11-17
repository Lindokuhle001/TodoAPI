import configuration from '../db/configuration'
import { Client } from 'pg'

const client = new Client(configuration);

client.connect((err) => {
  if (err) throw Error(err.message);
});


const getTodos =async ()  => {
    const result = await client.query('SELECT * FROM Todos');
    console.log(result.rows);  
}

export default getTodos