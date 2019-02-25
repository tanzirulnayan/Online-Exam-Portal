-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 25, 2019 at 11:58 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

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
  `T_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
