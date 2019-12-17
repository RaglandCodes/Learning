CREATE TABLE users
(
    ID int NOT NULL,
    Name varchar(255),
    Age int,
    CHECK (Age>=18)
)