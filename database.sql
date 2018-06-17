CREATE TABLE owners (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL
);

CREATE TABLE pets (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	breed VARCHAR(100) NOT NULL,
	color VARCHAR(20) NOT NULL,
	checkedIn BOOLEAN DEFAULT true,
	owner_id INT NOT NULL REFERENCES owners ON DELETE CASCADE,
	checkInDate DATE
);

INSERT INTO owners (name)
VALUES('Ash Williams'), 
('Charles Dexter Ward'), 
('Herbert West'), 
('Joseph Curwen'), 
('Robert Olmstead');

INSERT INTO pets (name, breed, color, owner_id, image)
VALUES('Fluffy', 'doggo', 'tan', 1, 'dog.png'),
('Menkar', 'whale', 'blue', 2, 'whale.png'),
('Carmen', 'cat', 'orange', 3, 'cat.png'),
('Fawkes', 'phoenix', 'red', 4, 'bird.png'),
('Anya', 'dwarf', 'white', 5, 'rabbit.png'),
('Nagini', 'ssssssss', 'green', 4, 'snake.png'),
('Teelo', 'box', 'green', 3, 'turtle.png'),
('Cthulu', 'Great Old One', 'green', 2, 'cthulu.png'),
('JoJo', 'bearded dragon', 'olive', 1, 'dragon.png');
