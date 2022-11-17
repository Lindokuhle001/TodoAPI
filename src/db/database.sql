-- DROP DATABASE IF EXISTS 
-- CREATE DATABASE 

SELECT * FROM Todos

DROP TABLE IF EXISTS Todos CASCADE;

CREATE TABLE IF NOT EXISTS Todos(
    ID SERIAL NOT NULL PRIMARY KEY,
    todoID varchar(50) NOT NULL,
    title varchar(50) NOT NULL,
    todoStatus varchar(50) NOT NULL
    )

INSERT INTO Todos(
    todoID,
    title,
    todoStatus
) VALUES(
    'frfhuds123',
    'test',
    'completed'
)