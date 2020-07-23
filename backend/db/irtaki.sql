-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 23, 2020 at 12:10 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project1_copy`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `email` varchar(256) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`email`, `password`) VALUES
('irtaki@gmail.com', '$2b$10$PRPdcS.wdV/Gb1F7k60KseN7ozotBf2oPeOsyjcsdNeAD2xFtghUi');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `name` text CHARACTER SET utf8 NOT NULL,
  `classname` text CHARACTER SET utf8 NOT NULL,
  `path` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `name`, `classname`, `path`) VALUES
(5, 'العلوم', 'صف أول', 'C:\\Users\\PC-2020\\Desktop\\irtaki-master (3)\\irtaki-master\\backend\\api\\course\\upload\\1594657727405_.png'),
(11, 'عربي', 'صف ثاني', 'C:\\Users\\PC-2020\\Desktop\\irtaki-master (3)\\irtaki-master\\backend\\api\\course\\upload\\1594677057250_.png'),
(12, 'فيزياء', 'التاسع', 'C:\\Users\\PC-2020\\Desktop\\irtaki-master (3)\\irtaki-master\\backend\\api\\course\\upload\\1594932866345_.jpg'),
(13, 'ديانة', 'بكالوريا', 'C:\\Users\\PC-2020\\Desktop\\irtaki-master (3)\\irtaki-master\\backend\\api\\course\\upload\\1595088092357_.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `institution`
--

CREATE TABLE `institution` (
  `id` int(11) NOT NULL,
  `name` text CHARACTER SET utf8 NOT NULL,
  `mobil_number` int(11) NOT NULL,
  `email` text CHARACTER SET utf8,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `institution`
--

INSERT INTO `institution` (`id`, `name`, `mobil_number`, `email`, `password`) VALUES
(0, 'الأوائل', 944514996, 'alawael@gmail.com', '$2b$10$YNgWjjJhj/yb4O57npLlHONE5ziY30u775F78Zmukxtd0MK32px5u'),
(1, 'abc', 12345, 'a@gmail.com', '$2b$10$qzY75N/1WEfsjfmfymqJjus2tY76NXIYKMdx38Hyk3ySRWG6wGHm2'),
(3, '  النور الخاصة', 987654321, 'alour@gmail.com', '$2b$10$Hxzr8JdnQU489ah.ks74Seb.GmmfB9F5Ar3dv34oKFLDm9RsI.cae');

-- --------------------------------------------------------

--
-- Table structure for table `lesson`
--

CREATE TABLE `lesson` (
  `id` int(11) NOT NULL,
  `name` text CHARACTER SET utf8 NOT NULL,
  `course_id` int(11) NOT NULL,
  `module_id` int(11) NOT NULL,
  `module_name` text CHARACTER SET utf8 NOT NULL,
  `course_name` text CHARACTER SET utf8 NOT NULL,
  `sort` int(11) NOT NULL,
  `class_name` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lesson`
--

INSERT INTO `lesson` (`id`, `name`, `course_id`, `module_id`, `module_name`, `course_name`, `sort`, `class_name`) VALUES
(6, 'الأول', 5, 25, 'الأولى', 'العلوم', 1, 'الصف الأول'),
(7, 'الثاني', 5, 25, 'الأولى', 'العلوم', 2, 'الصف الأول'),
(8, 'الثالث', 5, 25, 'الأولى', 'العلوم', 3, 'الصف الأول'),
(17, 'مقدمة', 12, 31, 'النواس المرن', 'فيزياء', 2, 'التاسع'),
(18, 'تعريف بالدرس', 12, 31, 'النواس المرن', 'فيزياء', 1, 'التاسع');

-- --------------------------------------------------------

--
-- Table structure for table `lesson_marks`
--

CREATE TABLE `lesson_marks` (
  `course_id` int(11) NOT NULL,
  `module_id` int(11) NOT NULL,
  `lesson_id` int(11) NOT NULL,
  `course_name` text NOT NULL,
  `module_name` text NOT NULL,
  `lesson_name` text NOT NULL,
  `std_num` int(11) NOT NULL,
  `mark` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lesson_marks`
--

INSERT INTO `lesson_marks` (`course_id`, `module_id`, `lesson_id`, `course_name`, `module_name`, `lesson_name`, `std_num`, `mark`, `status`) VALUES
(5, 25, 6, 'العلوم', 'الأولى', 'الأول', 111, 0, NULL),
(5, 25, 6, 'العلوم', 'الأولى', 'الأول', 123, 0, 1),
(12, 31, 17, 'فيزياء', 'النواس المرن', 'مقدمة', 12345, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `module`
--

CREATE TABLE `module` (
  `id` int(11) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `course_name` text CHARACTER SET utf8 NOT NULL,
  `course_id` int(11) NOT NULL,
  `sort` int(11) NOT NULL,
  `class_name` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `module`
--

INSERT INTO `module` (`id`, `name`, `course_name`, `course_id`, `sort`, `class_name`) VALUES
(25, 'الأولى', 'العلوم', 5, 1, 'الصف الأول'),
(27, 'الثالثة', 'العلوم', 5, 3, 'الصف الأول'),
(28, 'الثانية', 'العلوم', 5, 2, 'الصف الأول'),
(31, 'النواس المرن', 'فيزياء', 12, 1, 'التاسع'),
(37, 'النواس الثقلي', 'فيزياء', 12, 2, 'التاسع');

-- --------------------------------------------------------

--
-- Table structure for table `module_marks`
--

CREATE TABLE `module_marks` (
  `course_id` int(11) NOT NULL,
  `module_id` int(11) NOT NULL,
  `course_name` text NOT NULL,
  `module_name` text NOT NULL,
  `std_num` int(11) NOT NULL,
  `mark` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `quiz_course`
--

CREATE TABLE `quiz_course` (
  `type` int(11) NOT NULL,
  `question` text NOT NULL,
  `answer` text,
  `hint` text,
  `ans1` text,
  `ans2` text,
  `ans3` text,
  `ans4` text,
  `hintAns1` text,
  `hintAns2` text,
  `hintAns3` text,
  `course_id` int(11) NOT NULL,
  `course_name` text NOT NULL,
  `sort` int(11) NOT NULL,
  `inst` int(11) NOT NULL,
  `class_name` text NOT NULL,
  `quiz` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `quiz_course`
--

INSERT INTO `quiz_course` (`type`, `question`, `answer`, `hint`, `ans1`, `ans2`, `ans3`, `ans4`, `hintAns1`, `hintAns2`, `hintAns3`, `course_id`, `course_name`, `sort`, `inst`, `class_name`, `quiz`) VALUES
(4, '<p>عرف ما يلي</p>', '', '', '', '', '', '', '', '', '', 12, 'فيزياء', 1, 0, 'التاسع', 0),
(2, '<p>أدخل السؤالشس</p>', '', '', '', '', '', '', '', '', '', 12, 'فيزياء', 1, 1, 'التاسع', 0),
(4, '<p>عرف</p>', '', '', '', '', '', '', '', '', '', 12, 'فيزياء', 2, 0, 'التاسع', 0),
(2, '<p>أدخل السؤالشس</p>', '', '', '', '', '', '', '', '', '', 12, 'فيزياء', 2, 1, 'التاسع', 0),
(4, '<p>عرف</p>', '', '', '', '', '', '', '', '', '', 12, 'فيزياء', 3, 0, 'التاسع', 0);

-- --------------------------------------------------------

--
-- Table structure for table `quiz_lesson`
--

CREATE TABLE `quiz_lesson` (
  `type` int(11) NOT NULL,
  `question` text NOT NULL,
  `answer` text,
  `hint` text,
  `ans1` text,
  `ans2` text,
  `ans3` text,
  `ans4` text,
  `hintAns1` text,
  `hintAns2` text,
  `hintAns3` text,
  `course_id` int(11) NOT NULL,
  `module_id` int(11) NOT NULL,
  `lesson_id` int(11) NOT NULL,
  `course_name` text NOT NULL,
  `module_name` text NOT NULL,
  `lesson_name` text NOT NULL,
  `sort` int(11) NOT NULL,
  `inst` int(11) NOT NULL,
  `class_name` text NOT NULL,
  `quiz` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `quiz_lesson`
--

INSERT INTO `quiz_lesson` (`type`, `question`, `answer`, `hint`, `ans1`, `ans2`, `ans3`, `ans4`, `hintAns1`, `hintAns2`, `hintAns3`, `course_id`, `module_id`, `lesson_id`, `course_name`, `module_name`, `lesson_name`, `sort`, `inst`, `class_name`, `quiz`) VALUES
(2, '<p>عرف ما يلي</p>', '', '', '', '', '', '', '', '', '', 12, 31, 17, 'فيزياء', 'النواس المرن', 'مقدمة', 1, 0, 'التاسع', 0),
(2, '<p>اهلا</p>', '', '', '', '', '', '', '', '', '', 12, 31, 17, 'فيزياء', 'النواس المرن', 'مقدمة', 1, 1, 'التاسع', 0);

-- --------------------------------------------------------

--
-- Table structure for table `quiz_module`
--

CREATE TABLE `quiz_module` (
  `type` text NOT NULL,
  `question` text NOT NULL,
  `answer` text,
  `hint` text,
  `ans1` text,
  `ans2` text,
  `ans3` text,
  `ans4` text,
  `hintAns1` text,
  `hintAns2` text,
  `hintAns3` text,
  `module_id` int(11) NOT NULL,
  `module_name` text NOT NULL,
  `course_id` int(11) NOT NULL,
  `course_name` text NOT NULL,
  `sort` int(11) NOT NULL,
  `inst` int(11) NOT NULL,
  `class_name` text NOT NULL,
  `quiz` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `quiz_module`
--

INSERT INTO `quiz_module` (`type`, `question`, `answer`, `hint`, `ans1`, `ans2`, `ans3`, `ans4`, `hintAns1`, `hintAns2`, `hintAns3`, `module_id`, `module_name`, `course_id`, `course_name`, `sort`, `inst`, `class_name`, `quiz`) VALUES
('4', '<p>عرف ما يلي</p>', '', '', '', '', '', '', '', '', '', 31, 'النواس المرن', 12, 'فيزياء', 1, 1, 'التاسع', 0),
('3', '<p>عدد</p>', '', '', '', '', '', '', '', '', '', 31, 'النواس المرن', 12, 'فيزياء', 2, 1, 'التاسع', 0),
('4', '<p>اشرح</p>', '', '', '', '', '', '', '', '', '', 31, 'النواس المرن', 12, 'فيزياء', 3, 1, 'التاسع', 0),
('1', 'سؤال 1', 'answer', 'hint', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 31, 'النواس المرن', 12, 'فيزياء', 4, 1, 'التاسع', 0);

-- --------------------------------------------------------

--
-- Table structure for table `quiz_section`
--

CREATE TABLE `quiz_section` (
  `type` int(11) NOT NULL,
  `question` text NOT NULL,
  `answer` text,
  `hint` text,
  `ans1` text,
  `ans2` text,
  `ans3` text,
  `ans4` text,
  `hintAns1` text,
  `hintAns2` text,
  `hintAns3` text,
  `section_id` int(11) NOT NULL,
  `lesson_id` int(11) NOT NULL,
  `module_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `section_name` text NOT NULL,
  `lesson_name` text NOT NULL,
  `module_name` text NOT NULL,
  `course_name` text NOT NULL,
  `sort` int(11) NOT NULL,
  `inst` int(11) NOT NULL,
  `classname` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `quiz_section`
--

INSERT INTO `quiz_section` (`type`, `question`, `answer`, `hint`, `ans1`, `ans2`, `ans3`, `ans4`, `hintAns1`, `hintAns2`, `hintAns3`, `section_id`, `lesson_id`, `module_id`, `course_id`, `section_name`, `lesson_name`, `module_name`, `course_name`, `sort`, `inst`, `classname`) VALUES
(2, '1+1', '', '', '', '', '', '', '', '', '', 1, 6, 25, 5, 'الفقرة 1', 'الأول', 'الأولى', 'العلوم', 1, 0, 'الصف الأول'),
(2, '<p>عرف يا شاطر</p>', '', '', '', '', '', '', '', '', '', 8, 17, 31, 12, 'تعريف', 'مقدمة', 'النواس المرن', 'فيزياء', 1, 0, 'التاسع'),
(2, '<p>سؤال الفقرة 1</p>', '', '', '', '', '', '', '', '', '', 8, 17, 31, 12, 'تعريف', 'مقدمة', 'النواس المرن', 'فيزياء', 1, 1, 'التاسع'),
(2, '<p>سؤال الفقرة 1</p>', '', '', '', '', '', '', '', '', '', 8, 17, 31, 12, 'تعريف', 'مقدمة', 'النواس المرن', 'فيزياء', 2, 1, 'التاسع'),
(2, '<p>سؤال الفقرة 1</p>', '', '', '', '', '', '', '', '', '', 11, 17, 31, 12, 'تعداد', 'مقدمة', 'النواس المرن', 'فيزياء', 1, 1, 'التاسع');

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

CREATE TABLE `section` (
  `id` int(11) NOT NULL,
  `lesson_id` int(11) NOT NULL,
  `lesson_name` text CHARACTER SET utf8 NOT NULL,
  `module_id` int(11) NOT NULL,
  `module` text CHARACTER SET utf8 NOT NULL,
  `course_id` int(11) NOT NULL,
  `course_name` text CHARACTER SET utf8 NOT NULL,
  `title` text CHARACTER SET utf8 NOT NULL,
  `text` text CHARACTER SET utf8 NOT NULL,
  `url` text CHARACTER SET utf8,
  `sort` int(11) NOT NULL,
  `classname` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section`
--

INSERT INTO `section` (`id`, `lesson_id`, `lesson_name`, `module_id`, `module`, `course_id`, `course_name`, `title`, `text`, `url`, `sort`, `classname`) VALUES
(8, 17, 'مقدمة', 31, 'النواس المرن', 12, 'فيزياء', 'تعريف', '<p><strong>حكي فاضي كمان كمان</strong></p>', NULL, 3, 'التاسع'),
(9, 17, 'مقدمة', 31, 'النواس المرن', 12, 'فيزياء', 'ملاحظة', '<p><strong>حكي فاضي كمان كمان</strong></p>', NULL, 2, 'التاسع'),
(11, 17, 'مقدمة', 31, 'النواس المرن', 12, 'فيزياء', 'تعداد', '<p><strong>حكي فاضي كمان كمان</strong></p>', NULL, 1, 'التاسع'),
(12, 17, 'مقدمة', 31, 'النواس المرن', 12, 'فيزياء', 'مهم', 'مو مهم', NULL, 4, 'التاسع');

-- --------------------------------------------------------

--
-- Table structure for table `std_course`
--

CREATE TABLE `std_course` (
  `course_id` int(11) NOT NULL,
  `inst_name` int(11) NOT NULL,
  `std_number` int(11) NOT NULL,
  `course_name` text CHARACTER SET utf8 NOT NULL,
  `year` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `day` int(11) NOT NULL,
  `available` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `std_course`
--

INSERT INTO `std_course` (`course_id`, `inst_name`, `std_number`, `course_name`, `year`, `month`, `day`, `available`) VALUES
(11, 0, 123, 'العلوم', 2020, 8, 9, 1),
(12, 0, 123, 'فيزياء', 2020, 8, 14, 1),
(12, 0, 222, 'الفيزياء', 2020, 8, 9, 1),
(12, 1, 12345, 'فيزياء', 2020, 8, 13, 1);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `mobil_number` int(10) NOT NULL,
  `name` varchar(40) CHARACTER SET utf8 NOT NULL,
  `inst_name` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`mobil_number`, `name`, `inst_name`) VALUES
(111, 'sae', 1),
(123, 'name1', 0),
(222, 'tam', 1),
(12345, 'فراس', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `name` text NOT NULL,
  `mobil_number` int(10) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`name`, `mobil_number`, `password`) VALUES
('asd', 111, '$2b$10$md8LTyp0/eNTnCc3/lugC.dxoeihFkz3/SXAaucLb0DGcmyrumHXu'),
('name1', 123, '$2b$10$NFMXiFD18oWCg3X5rjlUtuyPGf1A1jAhIH34rIschy29Tejziik62'),
('تمارا', 222, '$2b$10$9hd/icdUTVm/I6rSEF9Ts.6DBfWuwEXaVmzGv.B4869JS8GB89kcO'),
('تمارا', 2222, '$2b$10$CX3/B6SaGOu1avUKTtoDAOV8z/0zrJF9d9qgmXLcr3/LdqEgVPh.i'),
('فراس', 12345, '$2b$10$xEzsSFJ5q5JmxE5Yg7yla.FYtZpnHEz95r85eM7rcZxIGl9WHBKBy'),
('name2', 951516896, '$2b$10$UIwxhqWycSxeJCP7xPO23u6XfNlCd2PLU956xS3Jgmn/7lFwPEQ7y'),
('name3', 951719685, '$2b$10$.KJJFOn/EPyiMtFHOMMxLuT4mhe3IBg/pgGKRhf/1YSXge3JkNJWS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `institution`
--
ALTER TABLE `institution`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lesson`
--
ALTER TABLE `lesson`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `course_id_2` (`course_id`,`module_id`,`sort`),
  ADD KEY `module_id` (`module_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `lesson_marks`
--
ALTER TABLE `lesson_marks`
  ADD PRIMARY KEY (`course_id`,`module_id`,`lesson_id`,`std_num`),
  ADD KEY `lesson_id` (`lesson_id`),
  ADD KEY `module_id` (`module_id`),
  ADD KEY `std_num` (`std_num`);

--
-- Indexes for table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `course_id_2` (`course_id`,`sort`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `module_marks`
--
ALTER TABLE `module_marks`
  ADD PRIMARY KEY (`course_id`,`module_id`,`std_num`),
  ADD KEY `module_id` (`module_id`),
  ADD KEY `std_num` (`std_num`);

--
-- Indexes for table `quiz_course`
--
ALTER TABLE `quiz_course`
  ADD PRIMARY KEY (`course_id`,`sort`,`inst`),
  ADD KEY `quiz` (`quiz`);

--
-- Indexes for table `quiz_lesson`
--
ALTER TABLE `quiz_lesson`
  ADD PRIMARY KEY (`course_id`,`module_id`,`lesson_id`,`sort`,`inst`),
  ADD UNIQUE KEY `course_id` (`course_id`,`module_id`,`lesson_id`,`sort`,`inst`),
  ADD KEY `lesson_id` (`lesson_id`),
  ADD KEY `module_id` (`module_id`),
  ADD KEY `inst` (`inst`),
  ADD KEY `quiz` (`quiz`);

--
-- Indexes for table `quiz_module`
--
ALTER TABLE `quiz_module`
  ADD PRIMARY KEY (`module_id`,`course_id`,`sort`,`inst`),
  ADD UNIQUE KEY `module_id` (`module_id`,`course_id`,`sort`,`inst`),
  ADD KEY `inst` (`inst`),
  ADD KEY `exam` (`quiz`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `quiz_section`
--
ALTER TABLE `quiz_section`
  ADD PRIMARY KEY (`section_id`,`lesson_id`,`module_id`,`course_id`,`sort`,`inst`),
  ADD UNIQUE KEY `section_id` (`section_id`,`lesson_id`,`course_id`,`sort`,`inst`),
  ADD KEY `course_id` (`course_id`),
  ADD KEY `inst` (`inst`),
  ADD KEY `lesson_id` (`lesson_id`),
  ADD KEY `module_id` (`module_id`);

--
-- Indexes for table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `lesson_id_2` (`lesson_id`,`module_id`,`course_id`,`sort`),
  ADD KEY `course_id` (`course_id`),
  ADD KEY `module_id` (`module_id`);

--
-- Indexes for table `std_course`
--
ALTER TABLE `std_course`
  ADD PRIMARY KEY (`course_id`,`inst_name`,`std_number`),
  ADD KEY `std_number` (`std_number`),
  ADD KEY `inst_name` (`inst_name`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`mobil_number`),
  ADD KEY `inst_name` (`inst_name`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`mobil_number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `institution`
--
ALTER TABLE `institution`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `lesson`
--
ALTER TABLE `lesson`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `module`
--
ALTER TABLE `module`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `section`
--
ALTER TABLE `section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lesson`
--
ALTER TABLE `lesson`
  ADD CONSTRAINT `lesson_ibfk_1` FOREIGN KEY (`module_id`) REFERENCES `module` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lesson_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lesson_marks`
--
ALTER TABLE `lesson_marks`
  ADD CONSTRAINT `lesson_marks_ibfk_2` FOREIGN KEY (`lesson_id`) REFERENCES `lesson` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lesson_marks_ibfk_3` FOREIGN KEY (`module_id`) REFERENCES `module` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lesson_marks_ibfk_4` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lesson_marks_ibfk_5` FOREIGN KEY (`std_num`) REFERENCES `student` (`mobil_number`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `module`
--
ALTER TABLE `module`
  ADD CONSTRAINT `module_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `module_marks`
--
ALTER TABLE `module_marks`
  ADD CONSTRAINT `module_marks_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `module_marks_ibfk_2` FOREIGN KEY (`module_id`) REFERENCES `module` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `module_marks_ibfk_3` FOREIGN KEY (`std_num`) REFERENCES `student` (`mobil_number`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quiz_course`
--
ALTER TABLE `quiz_course`
  ADD CONSTRAINT `quiz_course_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quiz_course_ibfk_2` FOREIGN KEY (`quiz`) REFERENCES `exam_course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quiz_lesson`
--
ALTER TABLE `quiz_lesson`
  ADD CONSTRAINT `quiz_lesson_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quiz_lesson_ibfk_2` FOREIGN KEY (`lesson_id`) REFERENCES `lesson` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quiz_lesson_ibfk_3` FOREIGN KEY (`module_id`) REFERENCES `module` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quiz_lesson_ibfk_4` FOREIGN KEY (`inst`) REFERENCES `institution` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quiz_lesson_ibfk_5` FOREIGN KEY (`quiz`) REFERENCES `exam_lesson` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quiz_module`
--
ALTER TABLE `quiz_module`
  ADD CONSTRAINT `quiz_module_ibfk_1` FOREIGN KEY (`quiz`) REFERENCES `exam` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quiz_module_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quiz_module_ibfk_3` FOREIGN KEY (`module_id`) REFERENCES `module` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quiz_section`
--
ALTER TABLE `quiz_section`
  ADD CONSTRAINT `quiz_section_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quiz_section_ibfk_2` FOREIGN KEY (`inst`) REFERENCES `institution` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quiz_section_ibfk_3` FOREIGN KEY (`lesson_id`) REFERENCES `lesson` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quiz_section_ibfk_4` FOREIGN KEY (`module_id`) REFERENCES `module` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `section`
--
ALTER TABLE `section`
  ADD CONSTRAINT `section_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `section_ibfk_2` FOREIGN KEY (`lesson_id`) REFERENCES `lesson` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `section_ibfk_3` FOREIGN KEY (`module_id`) REFERENCES `module` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `std_course`
--
ALTER TABLE `std_course`
  ADD CONSTRAINT `std_course_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `std_course_ibfk_3` FOREIGN KEY (`std_number`) REFERENCES `student` (`mobil_number`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `std_course_ibfk_4` FOREIGN KEY (`inst_name`) REFERENCES `institution` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_2` FOREIGN KEY (`inst_name`) REFERENCES `institution` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
