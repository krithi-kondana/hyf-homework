use hospital_database;

SET NAMES utf8mb4;

CREATE TABLE `doctor` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`doctor_name` varchar(255) NOT NULL,
`specialisation` varchar(255) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `patient` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`patient_name` varchar(255) NOT NULL,
`admitted_date` DATETIME NULL DEFAULT NULL,
`checkedout_date` DATETIME NULL DEFAULT NULL,
`doctor_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_doctor_patient` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `test` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`test_name` varchar(255) NULL DEFAULT NULL,
`test_date` DATETIME NULL DEFAULT NULL,
`result` text NULL DEFAULT NULL,
`doctor_id` int(10) unsigned NOT NULL,
`patient_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_doctor_test` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_patient_test` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

