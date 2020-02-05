-- Part 2: School database
use week2_part2_homework;

SET NAMES utf8mb4;

CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begins` DATETIME NOT NULL,
  `ends` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) unsigned NOT NULL,
CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
INDEX (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



insert into class (id, name, begins, ends) values (1, 'javascript', now(), '2020-06-16 00:00:00');
insert into class (id, name, begins, ends) values (2, 'database', '2020-01-15 00:00:00', '2020-06-11 00:00:00');
insert into class (id, name, begins, ends) values (3, 'python', '2020-02-13 00:00:00', '2020-06-13 00:00:00');
insert into class (id, name, begins, ends) values (4, 'react', '2020-03-18 20:40:00', '2020-06-19 00:00:00');

insert into student (id, name, email, phone, class_id) values (1, 'Krithi', 'krithi1234@gmail.com', '34453839', 2);
insert into student (id, name, email, phone, class_id) values (2, 'Asha', 'asha5688@gmail.com', '34981278', 1);
insert into student (id, name, email, phone, class_id) values (3, 'Priyanka', 'pri45@gmail.com', '12789433', 4);
insert into student (id, name, email, phone, class_id) values (4, 'Shruthi', 'shru34@gmail.com', '54381298', 3);

-- Create an index on the name column of the student table.
ALTER TABLE student ADD INDEX student_name (name);

-- Add a new column to the class table named status
ALTER TABLE class ADD status ENUM('not-started','ongoing','finished') NOT NULL;

update class set status = 'finished' where id=1;
update class set status = 'ongoing' where id=2;
update class set status = 'not-started' where id=3;
update class set status = 'not-started' where id=4;


select * from class;
select * from student;