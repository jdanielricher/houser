CREATE TABLE houses (
    id INTEGER PRIMARY KEY AUTO INCREMENT,
    name varchar(40),
    address varchar (40),
    city varchar(40),
    state varchar(40),
    zipcode integer
)

INSERT INTO houses
(id, name, address, city, state, zipcode)
VALUES (1, Blue House, Baton Rouge, Lousiana, 70801)

INSERT INTO houses
(id, name, address, city, state, zipcode)
VALUES (2, Green House, Woonsocket, Rhode Island, 02895)
