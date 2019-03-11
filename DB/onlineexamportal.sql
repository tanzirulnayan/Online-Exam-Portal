-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2019 at 09:21 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

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

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`A_ID`, `A_NAME`, `A_EMAIL`, `A_MOBILE`, `A_ADDRESS`, `A_IMAGE`) VALUES
('dd', 'Admin One', 'Admin@gmail.com', '01755555555', 'Dhaka', '/pictures/image_1552243187643.png');

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `P_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `E_ID` int(11) NOT NULL,
  `Q_ID` int(10) NOT NULL,
  `ANSWER` text COLLATE utf8_unicode_ci NOT NULL
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
  `C_TIME` text COLLATE utf8_unicode_ci NOT NULL,
  `E_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`U_ID`, `C_TEXT`, `C_TIME`, `E_ID`) VALUES
('nayan', 'Best of luck', '2019-03-10', 2),
('nayan', 'don\'t forget to bring your permit', '2019-03-10', 2);

-- --------------------------------------------------------

--
-- Table structure for table `exam_participants`
--

CREATE TABLE `exam_participants` (
  `P_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `P_STATUS` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `E_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `exam_participants`
--

INSERT INTO `exam_participants` (`P_ID`, `P_STATUS`, `E_ID`) VALUES
('ss', 'ACTIVE', 5),
('ss', 'ACTIVE', 6);

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
  `E_DATE` text COLLATE utf8_unicode_ci NOT NULL,
  `E_START_TIME` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `E_END_TIME` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `T_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `exam_rooms`
--

INSERT INTO `exam_rooms` (`E_ID`, `E_TITLE`, `E_DATE`, `E_START_TIME`, `E_END_TIME`, `T_ID`) VALUES
(5, 'Math', '2019-03-11', '01:00', '02:00', 'tt'),
(6, 'GK', '2019-03-11', '10:00', '12:00', 'tt');

-- --------------------------------------------------------

--
-- Table structure for table `notices`
--

CREATE TABLE `notices` (
  `N_ID` int(3) NOT NULL,
  `N_TEXT` text COLLATE utf8_unicode_ci NOT NULL,
  `N_TIME` text COLLATE utf8_unicode_ci NOT NULL,
  `E_ID` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `notices`
--

INSERT INTO `notices` (`N_ID`, `N_TEXT`, `N_TIME`, `E_ID`) VALUES
(5, 'Best Of Luck For The Quiz', '2019-03-11', 5),
(6, 'Thiis is Gk Quiz', '2019-03-11', 6);

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

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`Q_ID`, `Q_TITLE`, `Q_OPTION1`, `Q_OPTION2`, `Q_OPTION3`, `Q_OPTION4`, `Q_ANSWER`, `Q_MARK`, `E_ID`) VALUES
(4, '2 + 5 = ?', '5', '6', '7', '8', '7', 10, 5),
(5, '100-20', '50', '70', '80', '90', '80', 10, 5),
(6, 'Capital of BD', 'Dhaka', 'CTG', 'Comilla', 'Barishal', 'Dhaka', 10, 6),
(7, 'National  Fruit?', 'Mango', 'Jack Fruit', 'Apple', 'Orange', 'Jack Fruit', 10, 6);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `S_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `S_NAME` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `S_EMAIL` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `S_DOB` text COLLATE utf8_unicode_ci,
  `S_ADDRESS` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `S_IMAGE` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`S_ID`, `S_NAME`, `S_EMAIL`, `S_DOB`, `S_ADDRESS`, `S_IMAGE`) VALUES
('ss', 'Student One', 'student@gmail.com', '2019-03-12', 'Dhaka', '/pictures/image_1552243258316.jpg');

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
('tt', 'Teacher One', 'teacher@gmail.com', 'Dhaka', '01755555555', '/pictures/image_1552243132785.jpg');

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
('dd', 'dd', 'ADMIN', 'ACTIVE'),
('ss', 'ss', 'STUDENT', 'ACTIVE'),
('tt', 'tt', 'TEACHER', 'ACTIVE');

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
  MODIFY `E_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `notices`
--
ALTER TABLE `notices`
  MODIFY `N_ID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `Q_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
