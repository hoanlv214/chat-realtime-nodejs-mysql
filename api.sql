-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 25, 2021 at 10:42 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_blocks`
--

CREATE TABLE `tbl_blocks` (
  `id` int(11) NOT NULL,
  `id_blockA` int(200) NOT NULL,
  `id_blockB` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_blocks`
--

INSERT INTO `tbl_blocks` (`id`, `id_blockA`, `id_blockB`) VALUES
(2, 2, 4),
(6, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_chat`
--

CREATE TABLE `tbl_chat` (
  `id` int(11) NOT NULL,
  `Id_user_A` int(11) NOT NULL,
  `Id_user_B` int(11) NOT NULL,
  `content` varchar(200) NOT NULL,
  `create_date` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_chat`
--

INSERT INTO `tbl_chat` (`id`, `Id_user_A`, `Id_user_B`, `content`, `create_date`) VALUES
(1, 1, 2, 'alo hoan', '0000-00-00 00:00:00.000000'),
(2, 1, 2, 'hi', '0000-00-00 00:00:00.000000'),
(3, 1, 2, 'hi', '0000-00-00 00:00:00.000000'),
(4, 2, 1, 'f', '0000-00-00 00:00:00.000000'),
(5, 2, 1, 'ho', '0000-00-00 00:00:00.000000'),
(6, 1, 2, 'hi', '0000-00-00 00:00:00.000000'),
(7, 1, 2, 'hi', '0000-00-00 00:00:00.000000'),
(8, 1, 2, 'hi', '0000-00-00 00:00:00.000000'),
(9, 2, 1, 'k', '0000-00-00 00:00:00.000000'),
(10, 2, 1, 'van linh', '0000-00-00 00:00:00.000000'),
(11, 1, 2, 'hi', '0000-00-00 00:00:00.000000'),
(12, 1, 2, 'duoc chua', '0000-00-00 00:00:00.000000'),
(13, 1, 2, 'hi', '0000-00-00 00:00:00.000000'),
(14, 1, 2, 'hi', '0000-00-00 00:00:00.000000'),
(15, 1, 2, 'hi', '0000-00-00 00:00:00.000000'),
(16, 1, 2, 'hi', '0000-00-00 00:00:00.000000'),
(17, 1, 2, 'hi', '0000-00-00 00:00:00.000000'),
(18, 2, 1, 'f', '0000-00-00 00:00:00.000000'),
(19, 1, 2, 'hi', '0000-00-00 00:00:00.000000'),
(20, 1, 2, 'hi', '0000-00-00 00:00:00.000000'),
(21, 1, 3, 'hi', '0000-00-00 00:00:00.000000'),
(22, 1, 2, 'd', '0000-00-00 00:00:00.000000'),
(23, 1, 2, 'hi', '0000-00-00 00:00:00.000000'),
(24, 1, 2, 'hi', '0000-00-00 00:00:00.000000'),
(25, 1, 2, 'hi', '0000-00-00 00:00:00.000000'),
(26, 1, 2, 'hi', '2021-12-15 04:27:57.350241'),
(27, 1, 3, 'hi', '2021-12-15 04:28:24.164025'),
(28, 1, 2, 'hi', '2021-12-15 04:28:37.463601'),
(29, 1, 6, 'hi', '2021-12-15 04:33:09.396617'),
(30, 1, 2, 'hi', '2021-12-15 04:40:37.470918'),
(31, 1, 3, 'hi', '2021-12-15 04:41:49.643945'),
(32, 1, 2, 'hi', '2021-12-15 04:47:01.558660'),
(33, 1, 3, 'hi', '2021-12-15 04:47:09.030612'),
(34, 1, 2, 'hi', '2021-12-15 04:47:21.113353'),
(35, 2, 1, 'f', '2021-12-15 04:50:08.936478'),
(36, 2, 1, 'f', '2021-12-15 04:50:22.386525'),
(37, 1, 2, 'hi', '2021-12-15 08:14:07.928649'),
(38, 2, 1, 'oi', '2021-12-15 08:31:13.328545'),
(39, 1, 2, 'hi', '2021-12-15 08:31:25.760361'),
(40, 2, 1, 'okok', '2021-12-15 08:31:30.725547'),
(41, 1, 2, 'hi', '2021-12-15 08:34:16.917902'),
(42, 1, 2, 'hi', '2021-12-15 08:51:25.030278'),
(43, 1, 2, 'hi', '2021-12-15 08:54:00.023130'),
(44, 1, 2, 'lam gi day', '2021-12-15 08:54:03.967484'),
(45, 2, 1, 'co lam gi dau', '2021-12-15 08:56:00.021092'),
(46, 1, 2, 'tai sao khong lam gi', '2021-12-15 08:56:31.962461'),
(47, 2, 1, 'ok lam gi day', '2021-12-15 08:56:40.539276'),
(48, 1, 2, 'ukm', '2021-12-15 08:57:08.949985'),
(49, 1, 3, 'alo', '2021-12-15 08:58:34.511384'),
(50, 1, 3, 'alo', '2021-12-15 08:58:43.296052'),
(51, 3, 1, 'goi gi day', '2021-12-15 08:59:52.998650'),
(52, 1, 6, 'alo', '2021-12-15 09:11:27.689887'),
(53, 1, 6, 'hi', '2021-12-15 09:13:42.097839'),
(54, 1, 6, 'hi', '2021-12-15 09:13:48.662762'),
(55, 1, 6, 'd', '2021-12-15 09:17:33.465742'),
(56, 1, 6, 'loi dau', '2021-12-15 09:17:36.960510'),
(57, 1, 3, 'alo', '2021-12-16 03:37:22.913366'),
(58, 1, 2, 'hi', '2021-12-16 03:37:38.526510'),
(59, 2, 1, 'alo', '2021-12-16 03:38:30.914175'),
(60, 1, 2, 'chat nhanh phet', '2021-12-16 03:38:40.556064'),
(61, 1, 2, 'ok', '2021-12-18 06:28:57.343656'),
(62, 2, 1, 'khong co gi', '2021-12-18 06:29:15.924434'),
(63, 1, 6, 'alo a', '2021-12-18 06:52:33.397729'),
(64, 3, 1, 'oi', '2021-12-18 06:56:16.845156'),
(65, 1, 3, 'khong gi', '2021-12-18 06:56:31.610591'),
(66, 2, 1, 'okok', '2021-12-22 10:12:04.830127'),
(67, 3, 1, 'hi', '2021-12-22 10:12:09.469150'),
(68, 2, 1, 'lam gi day', '2021-12-22 10:12:18.150007'),
(69, 3, 1, 'lam gi day', '2021-12-22 10:12:24.306102'),
(70, 1, 6, 'hi', '2021-12-22 15:20:06.165150'),
(71, 1, 6, 'ok bạn', '2021-12-22 15:20:09.387201'),
(72, 1, 6, 'ok b', '2021-12-22 15:20:16.995350'),
(73, 1, 6, 'lam gi', '2021-12-22 15:20:23.718922'),
(74, 1, 6, 'hi', '2021-12-22 15:20:43.959282'),
(75, 1, 6, 'hi', '2021-12-22 15:20:45.851189'),
(76, 1, 6, 'alo', '2021-12-22 15:21:56.507926'),
(77, 1, 6, 'ko', '2021-12-22 15:22:16.828228'),
(78, 1, 6, 'hi', '2021-12-22 15:23:42.298666'),
(79, 1, 6, 'lam gi day', '2021-12-22 15:23:53.829126'),
(80, 1, 6, 'sao lai khong duoc', '2021-12-22 15:24:06.029966'),
(81, 1, 6, 'hi', '2021-12-22 15:25:10.494934'),
(82, 1, 6, 'alo', '2021-12-22 15:25:17.496734'),
(83, 1, 3, 'alo', '2021-12-22 15:27:43.149995'),
(84, 1, 2, 'alo', '2021-12-22 15:27:54.014621'),
(85, 1, 2, 'ok', '2021-12-22 15:27:57.498250'),
(86, 1, 6, 'ok', '2021-12-22 15:28:06.095476'),
(87, 1, 6, 'd', '2021-12-22 15:28:08.851706'),
(88, 2, 4, 'oi', '2021-12-24 16:08:13.269596'),
(89, 2, 4, 'oi', '2021-12-24 16:08:15.102304'),
(90, 2, 4, 'oi', '2021-12-24 16:08:17.741486'),
(91, 1, 2, 'ok', '2021-12-24 16:09:35.142811'),
(92, 2, 1, 'alo', '2021-12-24 16:09:39.503541'),
(93, 2, 4, 'ko nhe chat ngon day', '2021-12-24 16:11:37.988161'),
(94, 4, 2, 'hi', '2021-12-24 16:13:20.613786'),
(95, 4, 2, 'hi', '2021-12-24 16:13:25.896011'),
(96, 2, 4, 'okok', '2021-12-24 16:13:33.080334');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_codevrify`
--

CREATE TABLE `tbl_codevrify` (
  `id` int(11) NOT NULL,
  `phomenumber` int(11) NOT NULL,
  `code` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_codevrify`
--

INSERT INTO `tbl_codevrify` (`id`, `phomenumber`, `code`) VALUES
(1, 982691474, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comment`
--

CREATE TABLE `tbl_comment` (
  `id` int(11) NOT NULL,
  `id_user` int(200) NOT NULL,
  `content_cm` varchar(200) NOT NULL,
  `createdate_cm` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_comment`
--

INSERT INTO `tbl_comment` (`id`, `id_user`, `content_cm`, `createdate_cm`) VALUES
(1, 1, 'bài viết rất hay', '2021-10-12 17:00:00'),
(9, 4, 'bài viết rất không hay tối rất thích bài viết', '2021-10-25 15:15:00'),
(10, 4, 'bài viết rất không hay tối rất thích bài viết', '2021-10-25 15:22:00'),
(11, 4, 'bài viết rất không hay tối rất thích bài viết', '2021-10-25 15:22:00'),
(12, 4, 'bài viết hay đấy nhưng tôi không thích nhé bạn', '2021-10-25 15:23:00'),
(13, 4, 'bài viết hay đấy nhưng tôi không thích nhé bạn', '2021-10-25 15:23:00'),
(14, 4, 'bài viết hay đấy nhưng tôi không thích nhé bạn', '2021-10-25 15:25:00'),
(15, 4, 'bài viết hay đấy nhưng tôi không thích nhé bạn', '2021-10-25 15:29:00'),
(16, 4, 'bài viết hay đấy nhưng tôi không thích nhé bạn', '2021-10-25 15:29:00'),
(17, 4, 'bài viết hay đấy nhưng tôi không thích nhé bạn', '2021-10-25 15:30:00'),
(18, 4, 'bài viết hay đấy nhưng tôi không thích nhé bạn', '2021-10-25 15:38:00'),
(20, 5, 'them  moi 1 comment nhe ah ban', '2021-12-22 04:11:31'),
(21, 5, 'bai viet moi', '2021-12-22 04:16:12'),
(22, 5, 'bai viet moi duoc chưa', '2021-12-22 04:16:49'),
(24, 5, 'test loi comment nay', '2021-12-22 04:21:15'),
(25, 5, 'sua them nhe', '2021-12-22 07:05:28'),
(27, 5, 'toi co binh luon moi 9999999999', '2021-12-24 14:39:13'),
(28, 5, 'toi co binh luon moi 9999999999', '2021-12-24 14:39:39'),
(29, 5, 'toi co binh luon moi 9999999999', '2021-12-24 15:55:40');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_conversation`
--

CREATE TABLE `tbl_conversation` (
  `id` int(11) NOT NULL,
  `id_user_A` int(11) NOT NULL,
  `Id_user_B` int(11) NOT NULL,
  `list_id_chat` varchar(200) NOT NULL,
  `create_date` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_conversation`
--

INSERT INTO `tbl_conversation` (`id`, `id_user_A`, `Id_user_B`, `list_id_chat`, `create_date`) VALUES
(1, 1, 2, '46,47,48,58,59,60,61,62,66,68,84,85,91,92,', '2021-12-24 16:09:39.508050'),
(10, 1, 3, '33,49,50,51,57,64,65,67,69,83,', '2021-12-22 15:27:43.155286'),
(15, 2, 4, '88,93,94,95,96,', '2021-12-24 16:13:33.090325');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_friend`
--

CREATE TABLE `tbl_friend` (
  `id` int(11) NOT NULL,
  `id_user_a` int(11) NOT NULL,
  `id_user_b` int(11) NOT NULL,
  `date_friend` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_friend`
--

INSERT INTO `tbl_friend` (`id`, `id_user_a`, `id_user_b`, `date_friend`) VALUES
(1, 1, 2, '2021-10-31 03:40:21'),
(2, 1, 3, '2021-10-31 03:40:21'),
(4, 6, 1, '2021-10-31 08:34:33'),
(5, 1, 7, '2021-12-23 10:22:55'),
(6, 4, 2, '2021-12-24 16:07:31');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_post`
--

CREATE TABLE `tbl_post` (
  `id` int(11) NOT NULL,
  `id_user` int(5) NOT NULL,
  `content_post` varchar(200) NOT NULL,
  `media` varchar(200) NOT NULL,
  `id_list_user_cm` varchar(200) NOT NULL,
  `id_list_user_like` varchar(200) NOT NULL,
  `url_post` varchar(200) NOT NULL,
  `date_create` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_post`
--

INSERT INTO `tbl_post` (`id`, `id_user`, `content_post`, `media`, `id_list_user_cm`, `id_list_user_like`, `url_post`, `date_create`) VALUES
(10, 2, 'bài viêt có id là 1 đã được chỉnh sửa', 'link media', '1,9,10,11,12,13,20,21,22,24,25,', '1,2,3,5,', '2/new url', ''),
(11, 1, 'day la bai veit moi cua van linh rat hay ', 'link media', '14,', '0', '1/new url', ''),
(12, 1, 'cam thay gi do rat la gi do ', 'link media', '15,16,17,', '2,1,5,', '1/new url', ''),
(13, 1, 'nguoi co id la 1 da them 1 bai viet ve con bo rat hay ', 'link media', '0', '', '1/new url', ''),
(14, 2, 'toi nhin thay một cái gì đó rất là gì toi rat cam sux ki lam ', 'link media', '18,', '', '2/new url', ''),
(15, 2, 'bai viet nay se la bai viet id 15 nhe ', 'link media', '0', '0', '2/new url', ''),
(16, 2, 'bai viet nay se la bai viet id 16 nhe', 'link media', '0', '0', '2/new url', ''),
(17, 2, 'lam on hay like bai viet nay cho toi, bai viet lai thay hay va ham dan, plz toi ', 'link media', '0', '5,', '2/new url', ''),
(18, 2, 'toi phai viet them nhie bai nũa ', 'link media', '0', '0', '2/new url', ''),
(19, 2, 'Máy quay dường như đang chậm lại, ', 'link media', '0', '0', '2/new url', ''),
(20, 2, 'Thầy Nguyễn Văn Tâm - từng dạy Toán trường THCS Chợ Chu cũng là người thầy được ', 'link media', '0', '0', '2/new url', ''),
(21, 8, 'Bài văn xúc động người đọc bởi cảm xúc chân thành từ chính tình cảm của con dành cho người cha tần tảo của mình. ', 'link media', '0', '0', '8/new url', ''),
(22, 8, 'PC-Covid bắt đầu được triển khai tại một số tỉnh thành', 'link media', '0', '0', '8/new url', ''),
(23, 8, 'Facebook bị Anh phạt gần 70 triệu USD trong thương vụ mua Giphy, còn CEO Mark Zuckerberg sắp phải điều trần tại Mỹ và đối mặt kiện tụng. ', 'link media', '0', '0', '8/new url', ''),
(24, 8, 'Oppo tự thiết kế chip', 'link media', '0', '0', '8/new url', ''),
(25, 8, 'Doanh nghiệp Việt giải bài toán đầu tư chăm sóc khách hàng', 'link media', '0', '0', '8/new url', ''),
(26, 8, 'Công ty Facebook sắp đổi tên', 'link media', '0', '0', '8/new url', ''),
(27, 4, 'Jack Ma ra nước ngoài lần đầu sau hơn một năm', 'link media', '0', '0', '4/new url', ''),
(28, 4, 'Facebook \'khai thác\' người dùng thế nào', 'link media', '0', '0', '4/new url', ''),
(29, 4, 'Hacker dùng Tinder \'săn\' nạn nhân Bitcoin', 'link media', '0', '0', '4/new url', ''),
(30, 4, 'id post 30', 'link media', '0', '0', '4/new url', ''),
(32, 4, 'id post new', 'link media', '0', '0', '4/new url', ''),
(33, 4, 'bài viêt có id là 1 đã được chỉnh sửa', 'link media', '0', '0', '4/new url', ''),
(34, 4, 'id post', 'link media', '0', '0', '4/new url', ''),
(36, 5, 'string', 'link media', '0', '0', '/new url5', ''),
(37, 5, 'string', 'link media', '0', '0', '/new url5', ''),
(38, 5, 'string', 'link media', '0', '0', '/new url5', ''),
(39, 5, 'bai viet moi nhe ae', 'link media', '0', '0', '/new url5', ''),
(40, 5, 'trung toi co 1 bai viet moi nhe', 'link media', '0', '0', '/new url5', ''),
(41, 5, 'trung toi co 1 bai viet moi nhe1', 'link media', '0', '0', '/new url5', ''),
(42, 14, 'day la 1 bai viet moi aaaaaaaaaaaaaaaaaaaa', 'link media', '0', '0', '/new url14', ''),
(43, 14, 'day la 1 bai viet moi bbbbbbbbbbbbbb', 'link media', '027,28,', '', '/new url14', '1640356156634'),
(44, 14, 'toi dang edit xong 12333', 'link media', '029,', '0', '/new url14', '1640357559110');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_requested_friend`
--

CREATE TABLE `tbl_requested_friend` (
  `id` int(11) NOT NULL,
  `id_user_A` int(11) NOT NULL,
  `id_user_B` int(11) NOT NULL,
  `createdate_requested` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_role`
--

CREATE TABLE `tbl_role` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_role`
--

INSERT INTO `tbl_role` (`id`, `name`) VALUES
(0, 'user'),
(1, 'admin'),
(3, 'superadmin');

-- --------------------------------------------------------

--
-- Table structure for table `tb_block_diary`
--

CREATE TABLE `tb_block_diary` (
  `id` int(11) NOT NULL,
  `id_blockA` int(11) NOT NULL,
  `id_blockB` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `name_user` varchar(50) NOT NULL,
  `pass_user` varchar(15) NOT NULL,
  `sdt_user` varchar(10) NOT NULL,
  `linkavatar_user` varchar(200) NOT NULL,
  `token` varchar(200) NOT NULL,
  `set_request_friend` varchar(300) NOT NULL,
  `get_requested_friend` varchar(300) NOT NULL,
  `linkuser` varchar(200) NOT NULL,
  `online` int(2) NOT NULL,
  `isactive` int(2) NOT NULL,
  `lastlogin` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `role` int(11) NOT NULL,
  `described` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `name_user`, `pass_user`, `sdt_user`, `linkavatar_user`, `token`, `set_request_friend`, `get_requested_friend`, `linkuser`, `online`, `isactive`, `lastlogin`, `role`, `described`, `address`) VALUES
(1, 'Nguyễn Văn Linh', 'khongm222', '0982691474', '/link/anh/hamdan', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2YW5saW5oaGgiLCJzdWIiOiIwOTgyNjkxNDc0IiwiaWF0IjoxNjQwMjc3MDgxNTI3LCJleHAiOm51bGx9.CVR9qVnFq-TpPOfL5S_i85mVBDmAHSmddbQTBOXmPi0', '', '', '', 0, 0, '2021-12-24 16:53:23', 2, 'thật thà, nghiêm túc', 'Tân Hưng - Sóc Sơn - Hà Nội'),
(2, 'Lại Văn Hoàn', 'vanhoan', '0982691470', '/link/anh/hamdan', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2YW5ob2FuIiwic3ViIjoiMDk4MjY5MTQ3MCIsImlhdCI6MTY0MDM2MTY5MzkwMSwiZXhwIjpudWxsfQ.9D-gR3_JmuXxjEaJXmHcx4bwQmx9cPzFfyHR1mxAxq4', '', '', '', 0, 1, '2021-12-24 16:26:01', 0, 'thật thà, nghiêm túc', 'Ninh Bình'),
(3, '', 'vandong', '0982691471', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2YW5kb25nIiwic3ViIjoiMDk4MjY5MTQ3MSIsImlhdCI6MTYzNDgzMjQxMDMwNSwiZXhwIjpudWxsfQ.K6cumfVo9JRVxS3424fYL1zLOWBZV72grueBPrjyPa0', '', '', '', 0, 0, '2021-12-22 16:46:39', 1, '', ''),
(4, '', 'vandond', '0982691473', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2YW5kb25kIiwic3ViIjoiMDk4MjY5MTQ3MyIsImlhdCI6MTYzNTIxMTQxNzY4OCwiZXhwIjpudWxsfQ.fNE9B-XIOVR6OhRtWOjCyy66ftICyWpsmG1lFwvlRfE', '', '5,', '', 0, 0, '2021-10-31 03:18:00', 0, '', ''),
(5, '', 'vanquan', '0982691472', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2YW5xdWFuIiwic3ViIjoiMDk4MjY5MTQ3MiIsImlhdCI6MTY0MDA2MDIwNTk0MCwiZXhwIjpudWxsfQ.itC16EM-_wmFUF4VdNciFEJNVe4kzpzAtkmzK7fy4Yg', '4,', '', '', 0, 1, '2021-12-22 18:01:16', 0, '', ''),
(6, '', 'vanquan1', '0982691476', '', '', '', '', '', 0, 0, '2021-10-31 03:18:00', 0, '', ''),
(7, '', 'vanvan1', '0982691478', '', '', '', '', '', 0, 0, '2021-10-31 03:18:00', 0, '', ''),
(8, '', 'vanvan1', '0982691480', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2YW52YW4xIiwic3ViIjoiMDk4MjY5MTQ4MCIsImlhdCI6MTYzNDg5NDUzNzI1MCwiZXhwIjpudWxsfQ.P_f5rydaAS2CZIXcUR1Lb9LQivX6PiZd3DPatn7VRuI', '', '', '', 0, 0, '2021-10-31 03:18:00', 0, '', ''),
(9, '', 'vanvan1', '0982691488', '', '', '', '', '', 0, 0, '2021-12-18 09:53:10', 1, '', ''),
(13, '', 'vanvan1', '0982691491', '', '', '', '', '', 0, 0, '2021-12-20 17:28:17', 0, '', ''),
(14, '', 'vanvan1', '0982691490', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2YW52YW4xIiwic3ViIjoiMDk4MjY5MTQ5MCIsImlhdCI6MTY0MDM1NDg5NTIzMiwiZXhwIjpudWxsfQ.yEdR2Wt5Grp151_noYPA86jTUZa9tgHKReLBdQHQW-0', '', '', '', 0, 0, '2021-12-24 14:08:15', 0, '', ''),
(15, '', 'vanvan1', '0102030405', '', '', '', '', '', 0, 0, '2021-12-24 17:08:12', 0, '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_blocks`
--
ALTER TABLE `tbl_blocks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_chat`
--
ALTER TABLE `tbl_chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_codevrify`
--
ALTER TABLE `tbl_codevrify`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_comment`
--
ALTER TABLE `tbl_comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_conversation`
--
ALTER TABLE `tbl_conversation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_friend`
--
ALTER TABLE `tbl_friend`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_post`
--
ALTER TABLE `tbl_post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `tbl_requested_friend`
--
ALTER TABLE `tbl_requested_friend`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_role`
--
ALTER TABLE `tbl_role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_block_diary`
--
ALTER TABLE `tb_block_diary`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_blocks`
--
ALTER TABLE `tbl_blocks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_chat`
--
ALTER TABLE `tbl_chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `tbl_codevrify`
--
ALTER TABLE `tbl_codevrify`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_comment`
--
ALTER TABLE `tbl_comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `tbl_conversation`
--
ALTER TABLE `tbl_conversation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_friend`
--
ALTER TABLE `tbl_friend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_post`
--
ALTER TABLE `tbl_post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `tbl_requested_friend`
--
ALTER TABLE `tbl_requested_friend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tbl_role`
--
ALTER TABLE `tbl_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tb_block_diary`
--
ALTER TABLE `tb_block_diary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
