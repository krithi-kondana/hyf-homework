use meal_application;

SET NAMES utf8mb4;

CREATE TABLE `meal` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` varchar(255) NOT NULL,
`description` text NULL DEFAULT NULL,
`location` varchar(255) NOT NULL,
`when` DATETIME NOT NULL,
`max_reservations` int(10) unsigned NOT NULL,
`price` DECIMAL(6,4) NOT NULL,
`created_date` DATE NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`number_of_guests` int(10) unsigned NOT NULL,
`meal_id` int(10) unsigned NOT NULL,
`created_date` DATE NOT NULL,
  CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` varchar(255) NOT NULL,
`description` text NULL DEFAULT NULL,
`meal_id` int(10) unsigned NOT NULL,
`stars` int(5) unsigned NULL,
  CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into meal (title,description,location,`when`,max_reservations,price,created_date) values ('Burger','chicken burger','nørreport','2020-02-28 00:00:00','4','2','2020-02-26');
insert into meal (title,description,location,`when`,max_reservations,price,created_date) values ('Pasta','spinach pasta','friheden','2020-02-28 00:00:00','2','20','2020-03-22');
insert into meal (title,description,location,`when`,max_reservations,price,created_date) values ('Sandwich','club sandwich','ishøj','2020-02-21 20:14:00','1','60','2020-02-02');
insert into meal (title,description,location,`when`,max_reservations,price,created_date) values ('soup','lamb soup','nørdhavn','2020-03-26 23:30:00','3','45','2020-03-25');
insert into meal (title,description,location,`when`,max_reservations,price,created_date) values ('Rød grød med fløde','vegetables','ørested','2020-04-09 21:0:00','6','99','2020-03-29');

insert into reservation (number_of_guests,meal_id,created_date) values ('3',4,'2020-02-27');
insert into reservation (number_of_guests,meal_id,created_date) values ('4',2,'2020-02-23');
insert into reservation (number_of_guests,meal_id,created_date) values ('1',1,'2020-02-07');
insert into reservation (number_of_guests,meal_id,created_date) values ('2',3,'2020-03-02');
insert into reservation (number_of_guests,meal_id,created_date) values ('1',5,'2020-03-22');

insert into review (title,description,meal_id,stars) values ('average','food was not too good',3,'3');
insert into review (title,description,meal_id,stars) values ('excellent','food was very delicious',2,'5');
insert into review (title,description,meal_id,stars) values ('poor','food was bad',1,'1');
insert into review (title,description,meal_id,stars) values ('good','food was good',4,'4');
insert into review (title,description,meal_id,stars) values ('very good','food was yummy',5,'5');


