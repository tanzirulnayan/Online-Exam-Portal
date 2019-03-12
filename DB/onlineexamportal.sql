-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 12, 2019 at 05:06 PM
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
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `P_ID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `E_ID` int(11) NOT NULL,
  `Q_ID` int(10) NOT NULL,
  `ANSWER` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`P_ID`, `E_ID`, `Q_ID`, `ANSWER`) VALUES
('nobel', 2, 2, 'ASP.NET'),
('nobel', 2, 3, 'Microsoft'),
('nobel', 2, 4, 'using'),
('nobel', 2, 5, 'ToInt32'),
('nobel', 2, 6, 'None'),
('lubna', 2, 2, 'ASP.NET'),
('lubna', 2, 3, 'Microsoft'),
('lubna', 2, 4, 'none'),
('lubna', 2, 5, 'ToInt32'),
('lubna', 2, 6, 'None'),
('nihal', 2, 2, 'Laravel'),
('nihal', 2, 3, 'Microsoft'),
('nihal', 2, 4, 'using'),
('nihal', 2, 5, 'ToInt32'),
('nihal', 2, 6, 'None'),
('arnob', 2, 2, 'Angular'),
('arnob', 2, 3, 'Oracle'),
('arnob', 2, 4, 'using'),
('arnob', 2, 5, 'ToDouble'),
('arnob', 2, 6, 'None');

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

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`U_ID`, `C_TEXT`, `C_TIME`, `E_ID`) VALUES
('nayan', 'Best of luck', '2019-03-10', 2),
('nayan', 'don\'t forget to bring your permit', '2019-03-10', 2),
('nayan', 'Be Careful! No makeup quiz will be taken.', '2019-03-11', 2),
('nayan', 'test comment', '2019-03-11', 3),
('nayan', 'comment 2', '2019-03-11', 3),
('nobel', 'test comment', '2019-03-11', 2),
('nobel', 'check', '2019-03-11', 2),
('nayan', 'yyy', '2019-03-11', 2);

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
('arnob', 'ACTIVE', 2),
('arnob', 'PENDING', 3),
('arnob', 'PENDING', 4),
('nihal', 'ACTIVE', 2),
('nihal', 'PENDING', 3),
('nihal', 'ACTIVE', 4),
('lubna', 'ACTIVE', 2),
('lubna', 'ACTIVE', 3),
('lubna', 'PENDING', 4),
('raisa', 'PENDING', 3),
('raisa', 'ACTIVE', 4),
('shaguffta', 'PENDING', 2),
('shaguffta', 'ACTIVE', 3),
('shaguffta', 'PENDING', 4),
('tony', 'PENDING', 2),
('tony', 'PENDING', 4),
('nobel', 'ACTIVE', 2);

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
(2, 'C# Quiz - 1', '2019-03-06', '10:00', '11:00', 'nayan'),
(3, 'C++ Quiz - 1', '2019-03-26', '13:00', '14:00', 'nayan'),
(4, 'C# Quiz - 2', '2019-03-28', '10:00', '11:00', 'nayan');

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

--
-- Dumping data for table `notices`
--

INSERT INTO `notices` (`N_ID`, `N_TEXT`, `N_TIME`, `E_ID`) VALUES
(1, 'Be Careful! No makeup quiz will be taken.', '2019-03-09', 2),
(2, 'Bring your exam permit', '2019-03-09', 2),
(3, 'No ID, No Entry!', '2019-03-09', 3),
(4, 'Best of luck', '2019-03-09', 4),
(5, 'Be Careful! No makeup quiz will be taken.', '2019-03-11', 2);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `Q_ID` int(10) NOT NULL,
  `Q_TYPE` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
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

INSERT INTO `questions` (`Q_ID`, `Q_TYPE`, `Q_TITLE`, `Q_OPTION1`, `Q_OPTION2`, `Q_OPTION3`, `Q_OPTION4`, `Q_ANSWER`, `Q_MARK`, `E_ID`) VALUES
(2, '', 'Which of the following is C# Framework?', 'Laravel', 'ASP.NET', 'Angular', 'React', 'ASP.NET', 2, 2),
(3, '', '.NET Framework is developed by?', 'Microsoft', 'Oracle', 'Facebook', 'Apple', 'Microsoft', 2, 2),
(4, '', 'Which of the following keyword is used  in C#?', 'imports', 'using', 'exports', 'none', 'using', 2, 2),
(5, '', 'Which of the following converts a type to a 32-bit integer in C#?', 'ToDecimal', 'ToDouble', 'ToInt16', 'ToInt32', 'ToInt32', 2, 2),
(6, '', 'Which one of the following is correct?', 'constructor has return type', 'all class members are public', 'printf is C# keyword', 'None', 'None', 2, 2);

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

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`S_ID`, `S_NAME`, `S_EMAIL`, `S_DOB`, `S_ADDRESS`, `S_IMAGE`) VALUES
('arnob', 'Arnob Sudipto', 'arnob@gmail.com', '1996-05-25', 'Basundhara', '/pictures/image_1552151881783.png'),
('lubna', 'Kaniz Lubna', 'lubna@hotmail.com', '2001-08-08', 'Basundhara', '/pictures/image_1552151769045.png'),
('nihal', 'Minhaz Nihal', 'nihal@gmail.com', '1996-11-30', 'Nikunja', '/pictures/image_1552151979940.png'),
('nobel', 'Nobel Mozumdar', 'nobel@gmail.com', '1998-10-20', 'Nikunja', '/pictures/image_1552130790653.jpg'),
('raisa', 'Raisa Kamal', 'raisa@yahoo.com', '1999-02-09', 'Mohakhali', '/pictures/image_1552151681865.png'),
('shaguffta', 'Shaguffta Rahman', 'shaguffta@gmail.com', '1997-02-28', 'Mirpur', '/pictures/image_1552151614343.png'),
('tony', 'Tony Stark', 'tony@avengers.com', '1998-10-13', 'Basundhara', '/pictures/image_1552151831078.png');

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
('arnob', 'arnob', 'STUDENT', 'ACTIVE'),
('lubna', 'lubna', 'STUDENT', 'ACTIVE'),
('nayan', 'nayan', 'TEACHER', 'ACTIVE'),
('nihal', 'nihal', 'STUDENT', 'ACTIVE'),
('nobel', 'nobel', 'STUDENT', 'ACTIVE'),
('paola', 'paola', 'TEACHER', 'PENDING'),
('raisa', 'raisa', 'STUDENT', 'ACTIVE'),
('shaguffta', 'shaguffta', 'STUDENT', 'ACTIVE'),
('tony', 'tony', 'STUDENT', 'ACTIVE'),
('turjoy', 'turjoy', 'ADMIN', 'ACTIVE');

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
  MODIFY `E_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `notices`
--
ALTER TABLE `notices`
  MODIFY `N_ID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `Q_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
