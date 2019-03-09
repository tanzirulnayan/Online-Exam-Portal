-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2019 at 06:11 AM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onlineexamportal`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `A_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `A_NAME` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `A_EMAIL` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `A_MOBILE` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `A_ADDRESS` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `A_IMAGE` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `SENDER_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `RECEIVER_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `C_TEXT` text COLLATE utf8_unicode_ci NOT NULL,
  `C_TIME` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `U_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `C_TEXT` text COLLATE utf8_unicode_ci NOT NULL,
  `C_TIME` date NOT NULL,
  `E_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `exam_participants`
--

CREATE TABLE `exam_participants` (
  `P_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `P_STATUS` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `E_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `exam_result`
--

CREATE TABLE `exam_result` (
  `S_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `E_ID` int(11) NOT NULL,
  `Q_ID` int(10) NOT NULL,
  `ANSWER` text COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `exam_rooms`
--

CREATE TABLE `exam_rooms` (
  `E_ID` int(11) NOT NULL,
  `E_TITLE` text COLLATE utf8_unicode_ci NOT NULL,
  `E_DATE` date NOT NULL,
  `E_START_TIME` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `E_END_TIME` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `T_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `exam_rooms`
--

INSERT INTO `exam_rooms` (`E_ID`, `E_TITLE`, `E_DATE`, `E_START_TIME`, `E_END_TIME`, `T_ID`) VALUES
(1, 'C# Quiz - 1', '2019-03-21', '10:00', '11:00', 'nayan');

-- --------------------------------------------------------

--
-- Table structure for table `notices`
--

CREATE TABLE `notices` (
  `N_ID` int(3) NOT NULL,
  `N_TEXT` text COLLATE utf8_unicode_ci NOT NULL,
  `N_TIME` date NOT NULL,
  `E_ID` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `Q_ID` int(10) NOT NULL,
  `Q_TITLE` text COLLATE utf8_unicode_ci NOT NULL,
  `Q_OPTION1` text COLLATE utf8_unicode_ci NOT NULL,
  `Q_OPTION2` text COLLATE utf8_unicode_ci NOT NULL,
  `Q_OPTION3` text COLLATE utf8_unicode_ci NOT NULL,
  `Q_OPTION4` text COLLATE utf8_unicode_ci NOT NULL,
  `Q_ANSWER` text COLLATE utf8_unicode_ci NOT NULL,
  `Q_MARK` int(11) NOT NULL,
  `E_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `S_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `S_NAME` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `S_EMAIL` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `S_DOB` date DEFAULT NULL,
  `S_ADDRESS` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `S_IMAGE` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `support`
--

CREATE TABLE `support` (
  `T_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `S_TEXT` text COLLATE utf8_unicode_ci NOT NULL,
  `S_TIME` date NOT NULL,
  `S_STATUS` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `support`
--

INSERT INTO `support` (`T_ID`, `S_TEXT`, `S_TIME`, `S_STATUS`) VALUES
('nayan', 'HI BRO', '2019-03-09', 'PENDING'),
('nayan', 'Nunu Man', '2019-03-09', 'PENDING'),
('nayan', 'FUCK ', '2019-03-09', 'PENDING');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `T_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `T_NAME` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `T_EMAIL` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `T_ADDRESS` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `T_MOBILE` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `T_IMAGE` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`T_ID`, `T_NAME`, `T_EMAIL`, `T_ADDRESS`, `T_MOBILE`, `T_IMAGE`) VALUES
('nayan', 'Md. Tanzirul Haque Nayan', 'tanzirul.haque@outlook.com', 'Basundhara', '01788284381', '/pictures/image_1552106721085.jpg'),
('paola', 'Paola Amparo', 'paola@yahoo.com', 'Gulshan', '01521303626', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `U_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `U_PASSWORD` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `U_TYPE` varchar(7) COLLATE utf8_unicode_ci NOT NULL,
  `U_STATUS` varchar(7) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`U_ID`, `U_PASSWORD`, `U_TYPE`, `U_STATUS`) VALUES
('nayan', 'nayan', 'TEACHER', 'ACTIVE'),
('paola', 'paola', 'TEACHER', 'PENDING');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`A_ID`);

--
-- Indexes for table `exam_rooms`
--
ALTER TABLE `exam_rooms`
  ADD PRIMARY KEY (`E_ID`);

--
-- Indexes for table `notices`
--
ALTER TABLE `notices`
  ADD PRIMARY KEY (`N_ID`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`Q_ID`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`S_ID`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`T_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`U_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `exam_rooms`
--
ALTER TABLE `exam_rooms`
  MODIFY `E_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
