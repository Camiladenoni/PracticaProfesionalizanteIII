CREATE DATABASE if not exist escuela; 
USE escuela; 

CREATE TABLE carreras (
    id_carrera INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);
CREATE TABLE profesores (
    id_profesor INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE alumnos(
    id_alumno INT auto_increment PRIMARY KEY, 
    nombre VARCHAR(100) not null, 
    edad INT(10),
    dni VARCHAR(20),
    email VARCHAR (100) UNIQUE, 
    id_carrera INT NOT NULL,
    FOREIGN KEY (id_carrera) REFERENCES carreras(id_carrera)
);

CREATE TABLE materias (
    id_materia INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_profesor INT,
    curso VARCHAR(50),
    id_carrera INT,
    FOREIGN KEY (id_profesor) REFERENCES profesores(id_profesor),
    FOREIGN KEY (id_carrera) REFERENCES carreras(id_carrera)
);

