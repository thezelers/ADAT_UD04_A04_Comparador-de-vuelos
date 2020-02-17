-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 17, 2020 at 02:15 PM
-- Server version: 10.1.44-MariaDB-0+deb9u1
-- PHP Version: 7.0.33-0+deb9u6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ADAT_UD5_Vuelos`
--
CREATE DATABASE IF NOT EXISTS `ADAT_UD5_Vuelos` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `ADAT_UD5_Vuelos`;

-- --------------------------------------------------------

--
-- Table structure for table `Vuelos`
--

CREATE TABLE `Vuelos` (
  `idVuelo` int(11) NOT NULL,
  `origen` varchar(32) COLLATE utf8_bin NOT NULL,
  `destino` varchar(32) COLLATE utf8_bin NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(32) COLLATE utf8_bin NOT NULL,
  `precio` int(11) NOT NULL,
  `plazasTotales` int(11) NOT NULL,
  `plazasDisponibles` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Vuelos`
--

INSERT INTO `Vuelos` (`idVuelo`, `origen`, `destino`, `fecha`, `hora`, `precio`, `plazasTotales`, `plazasDisponibles`) VALUES
(1, 'Madrid', 'Barcelona', '2020-02-18', '10:30', 123, 12, 10),
(2, 'Madrid', 'Cuenca', '2020-02-18', '14:35', 152, 7, 4),
(3, 'Madrid', 'Barcelona', '2020-02-18', '22:30', 142, 4, 0),
(4, 'Barcelona', 'Madrid', '2020-02-18', '16:00', 93, 32, 16);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Vuelos`
--
ALTER TABLE `Vuelos`
  ADD PRIMARY KEY (`idVuelo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Vuelos`
--
ALTER TABLE `Vuelos`
  MODIFY `idVuelo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
