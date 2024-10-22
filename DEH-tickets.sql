-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: bwh1r0f2mxgu8hnh0qpy-mysql.services.clever-cloud.com:3306
-- Tiempo de generación: 16-10-2024 a las 19:10:41
-- Versión del servidor: 8.0.22-13
-- Versión de PHP: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bwh1r0f2mxgu8hnh0qpy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asientos`
--

CREATE TABLE `asientos` (
  `asiento_id` int NOT NULL,
  `numero_asiento` varchar(10) DEFAULT NULL,
  `estado` varchar(20) DEFAULT 'Disponible',
  `usuario_id` int DEFAULT NULL,
  `escenario_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `asientos`
--

INSERT INTO `asientos` (`asiento_id`, `numero_asiento`, `estado`, `usuario_id`, `escenario_id`) VALUES
(1, 'A1', 'Reservado', 70, NULL),
(2, '1-2', 'Reservado', 10, NULL),
(3, '1-3', 'Reservado', 228, NULL),
(4, '1-4', 'Reservado', 10, NULL),
(5, '1-5', 'Reservado', 228, NULL),
(6, '1-6', 'Reservado', 10, NULL),
(7, '1-7', 'Reservado', 10, NULL),
(8, '1-8', 'Reservado', NULL, NULL),
(9, '1-9', 'Reservado', 10, NULL),
(10, '1-10', 'Reservado', 10, NULL),
(11, '1-11', 'Reservado', 231, NULL),
(12, '1-12', 'Reservado', 231, NULL),
(13, '1-13', 'Reservado', 10, NULL),
(14, '1-14', 'Reservado', 10, NULL),
(15, '1-15', 'Reservado', NULL, NULL),
(16, '2-1', 'Disponible', NULL, NULL),
(17, '2-2', 'Disponible', NULL, NULL),
(18, '2-3', 'Reservado', 10, NULL),
(19, '2-4', 'Disponible', NULL, NULL),
(20, '2-5', 'Disponible', NULL, NULL),
(21, '2-6', 'Disponible', NULL, NULL),
(22, '2-7', 'Reservado', 70, NULL),
(23, '2-8', 'Reservado', 246, NULL),
(24, '2-9', 'Disponible', NULL, NULL),
(25, '2-10', 'Disponible', NULL, NULL),
(26, '2-11', 'Disponible', NULL, NULL),
(27, '2-12', 'Disponible', NULL, NULL),
(28, '2-13', 'Disponible', NULL, NULL),
(29, '2-14', 'Disponible', NULL, NULL),
(30, '2-15', 'Disponible', NULL, NULL),
(31, '2-16', 'Disponible', NULL, NULL),
(32, '2-17', 'Disponible', NULL, NULL),
(33, '2-18', 'Disponible', NULL, NULL),
(34, '2-19', 'Disponible', NULL, NULL),
(35, '2-20', 'Disponible', NULL, NULL),
(36, '2-21', 'Disponible', NULL, NULL),
(37, '2-22', 'Disponible', NULL, NULL),
(38, '2-23', 'Disponible', NULL, NULL),
(39, '2-24', 'Disponible', NULL, NULL),
(40, '2-25', 'Reservado', 10, NULL),
(41, '2-26', 'Reservado', 10, NULL),
(42, '2-27', 'Reservado', 230, NULL),
(43, '2-28', 'Disponible', NULL, NULL),
(44, '2-29', 'Disponible', NULL, NULL),
(45, '2-30', 'Disponible', NULL, NULL),
(46, '3-1', 'Reservado', 227, NULL),
(47, '3-2', 'Reservado', 227, NULL),
(48, '3-3', 'Reservado', 227, NULL),
(49, '3-4', 'Reservado', 246, NULL),
(50, '3-5', 'Disponible', NULL, NULL),
(51, '3-6', 'Disponible', NULL, NULL),
(52, '3-7', 'Reservado', 10, NULL),
(53, '3-8', 'Reservado', 10, NULL),
(54, '3-9', 'Reservado', 240, NULL),
(55, '3-10', 'Reservado', 240, NULL),
(56, '3-11', 'Disponible', NULL, NULL),
(57, '3-12', 'Disponible', NULL, NULL),
(58, '3-13', 'Disponible', NULL, NULL),
(59, '3-14', 'Disponible', NULL, NULL),
(60, '3-15', 'Disponible', NULL, NULL),
(61, '3-16', 'Reservado', 227, NULL),
(62, '3-17', 'Disponible', NULL, NULL),
(63, '3-18', 'Disponible', NULL, NULL),
(64, '3-19', 'Reservado', 227, NULL),
(65, '3-20', 'Reservado', 10, NULL),
(66, '4-1', 'Disponible', NULL, NULL),
(67, '4-2', 'Disponible', NULL, NULL),
(68, '4-3', 'Disponible', NULL, NULL),
(69, '4-4', 'Disponible', NULL, NULL),
(70, 'A1', 'Reservado', 70, NULL),
(71, '4-6', 'Disponible', NULL, NULL),
(72, '4-7', 'Disponible', NULL, NULL),
(73, '4-8', 'Disponible', NULL, NULL),
(74, '4-9', 'Disponible', NULL, NULL),
(75, '4-10', 'Disponible', NULL, NULL),
(76, '4-11', 'Disponible', NULL, NULL),
(77, '4-12', 'Disponible', NULL, NULL),
(78, '4-13', 'Disponible', NULL, NULL),
(79, '4-14', 'Disponible', NULL, NULL),
(80, '4-15', 'Disponible', NULL, NULL),
(81, '4-16', 'Disponible', NULL, NULL),
(82, '4-17', 'Disponible', NULL, NULL),
(83, '4-18', 'Disponible', NULL, NULL),
(84, '4-19', 'Disponible', NULL, NULL),
(85, '4-20', 'Disponible', NULL, NULL),
(86, '4-21', 'Disponible', NULL, NULL),
(87, '4-22', 'Disponible', NULL, NULL),
(88, '4-23', 'Disponible', NULL, NULL),
(89, '4-24', 'Disponible', NULL, NULL),
(90, '4-25', 'Disponible', NULL, NULL),
(91, '4-26', 'Disponible', NULL, NULL),
(92, '4-27', 'Disponible', NULL, NULL),
(93, '4-28', 'Reservado', 10, NULL),
(94, '4-29', 'Reservado', 10, NULL),
(95, '4-30', 'Reservado', 10, NULL),
(96, '5-1', 'Reservado', 227, NULL),
(97, '5-2', 'Reservado', 227, NULL),
(98, '5-3', 'Reservado', 246, NULL),
(99, '5-4', 'Disponible', NULL, NULL),
(100, '5-5', 'Disponible', NULL, NULL),
(101, '5-6', 'Disponible', NULL, NULL),
(102, '5-7', 'Disponible', NULL, NULL),
(103, '5-8', 'Disponible', NULL, NULL),
(104, '5-9', 'Disponible', NULL, NULL),
(105, '5-10', 'Disponible', NULL, NULL),
(106, '5-11', 'Disponible', NULL, NULL),
(107, '5-12', 'Disponible', NULL, NULL),
(108, '5-13', 'Reservado', 10, NULL),
(109, '5-14', 'Reservado', 10, NULL),
(110, '5-15', 'Reservado', 10, NULL),
(111, '5-16', 'Disponible', NULL, NULL),
(112, '5-17', 'Disponible', NULL, NULL),
(113, '5-18', 'Disponible', NULL, NULL),
(114, '5-19', 'Disponible', NULL, NULL),
(115, '5-20', 'Disponible', NULL, NULL),
(116, '6-1', 'Disponible', NULL, NULL),
(117, '6-2', 'Disponible', NULL, NULL),
(118, '6-3', 'Disponible', NULL, NULL),
(119, '6-4', 'Disponible', NULL, NULL),
(120, '6-5', 'Disponible', NULL, NULL),
(121, '6-6', 'Disponible', NULL, NULL),
(122, '6-7', 'Disponible', NULL, NULL),
(123, '6-8', 'Disponible', NULL, NULL),
(124, '6-9', 'Disponible', NULL, NULL),
(125, '6-10', 'Disponible', NULL, NULL),
(126, '6-11', 'Disponible', NULL, NULL),
(127, '6-12', 'Reservado', NULL, NULL),
(128, '6-13', 'Reservado', NULL, NULL),
(129, '6-14', 'Disponible', NULL, NULL),
(130, '6-15', 'Disponible', NULL, NULL),
(131, '6-16', 'Disponible', NULL, NULL),
(132, '6-17', 'Disponible', NULL, NULL),
(133, '6-18', 'Disponible', NULL, NULL),
(134, '6-19', 'Disponible', NULL, NULL),
(135, '6-20', 'Disponible', NULL, NULL),
(136, '6-21', 'Disponible', NULL, NULL),
(137, '6-22', 'Disponible', NULL, NULL),
(138, '6-23', 'Disponible', NULL, NULL),
(139, '6-24', 'Reservado', NULL, NULL),
(140, '6-25', 'Disponible', NULL, NULL),
(141, '6-26', 'Disponible', NULL, NULL),
(142, '6-27', 'Reservado', NULL, NULL),
(143, '6-28', 'Disponible', NULL, NULL),
(144, '6-29', 'Disponible', NULL, NULL),
(145, '6-30', 'Disponible', NULL, NULL),
(146, '7-1', 'Disponible', NULL, NULL),
(147, 'a1', 'Reservado', 1, NULL),
(148, '8-1', 'Disponible', NULL, NULL),
(149, '8-2', 'Disponible', NULL, NULL),
(150, '8-3', 'Disponible', NULL, NULL),
(151, '8-4', 'Disponible', NULL, NULL),
(152, '8-5', 'Disponible', NULL, NULL),
(153, '8-6', 'Disponible', NULL, NULL),
(154, '8-7', 'Disponible', NULL, NULL),
(155, '8-8', 'Disponible', NULL, NULL),
(156, '8-9', 'Disponible', NULL, NULL),
(157, '8-10', 'Disponible', NULL, NULL),
(158, '9-1', 'Disponible', NULL, NULL),
(159, '9-2', 'Disponible', NULL, NULL),
(160, '9-3', 'Disponible', NULL, NULL),
(161, '9-4', 'Disponible', NULL, NULL),
(162, '9-5', 'Disponible', NULL, NULL),
(163, '9-6', 'Disponible', NULL, NULL),
(164, '9-7', 'Disponible', NULL, NULL),
(165, '9-8', 'Disponible', NULL, NULL),
(166, '9-9', 'Disponible', NULL, NULL),
(167, '9-10', 'Disponible', NULL, NULL),
(168, '10-1', 'Disponible', NULL, NULL),
(169, '11-1', 'Disponible', NULL, NULL),
(170, '12-1', 'Disponible', NULL, NULL),
(171, '13-1', 'Reservado', 233, NULL),
(172, '13-2', 'Reservado', 233, NULL),
(173, '13-3', 'Reservado', 233, NULL),
(174, '13-4', 'Disponible', NULL, NULL),
(175, '13-5', 'Reservado', 231, NULL),
(176, '13-6', 'Reservado', 231, NULL),
(177, '13-7', 'Reservado', 231, NULL),
(178, '13-8', 'Reservado', 231, NULL),
(179, '13-9', 'Disponible', NULL, NULL),
(180, '13-10', 'Disponible', NULL, NULL),
(181, '13-11', 'Disponible', NULL, NULL),
(182, '13-12', 'Disponible', NULL, NULL),
(183, '13-13', 'Disponible', NULL, NULL),
(184, '13-14', 'Disponible', NULL, NULL),
(185, '13-15', 'Disponible', NULL, NULL),
(186, '13-16', 'Disponible', NULL, NULL),
(187, '13-17', 'Disponible', NULL, NULL),
(188, '13-18', 'Disponible', NULL, NULL),
(189, '13-19', 'Disponible', NULL, NULL),
(190, '13-20', 'Disponible', NULL, NULL),
(191, '13-21', 'Disponible', NULL, NULL),
(192, '13-22', 'Disponible', NULL, NULL),
(193, '13-23', 'Disponible', NULL, NULL),
(194, '13-24', 'Disponible', NULL, NULL),
(195, '13-25', 'Disponible', NULL, NULL),
(196, '13-26', 'Disponible', NULL, NULL),
(197, '13-27', 'Disponible', NULL, NULL),
(198, '13-28', 'Disponible', NULL, NULL),
(199, '13-29', 'Disponible', NULL, NULL),
(200, '13-30', 'Disponible', NULL, NULL),
(201, '13-31', 'Disponible', NULL, NULL),
(202, '13-32', 'Disponible', NULL, NULL),
(203, '13-33', 'Disponible', NULL, NULL),
(204, '13-34', 'Disponible', NULL, NULL),
(205, '13-35', 'Disponible', NULL, NULL),
(206, '13-36', 'Disponible', NULL, NULL),
(207, '13-37', 'Disponible', NULL, NULL),
(208, '13-38', 'Disponible', NULL, NULL),
(209, '13-39', 'Disponible', NULL, NULL),
(210, '13-40', 'Disponible', NULL, NULL),
(211, '13-41', 'Disponible', NULL, NULL),
(212, '13-42', 'Disponible', NULL, NULL),
(213, '13-43', 'Disponible', NULL, NULL),
(214, '13-44', 'Disponible', NULL, NULL),
(215, '13-45', 'Disponible', NULL, NULL),
(216, '13-46', 'Disponible', NULL, NULL),
(217, '13-47', 'Disponible', NULL, NULL),
(218, '13-48', 'Disponible', NULL, NULL),
(219, '13-49', 'Disponible', NULL, NULL),
(220, '13-50', 'Disponible', NULL, NULL),
(221, '13-51', 'Disponible', NULL, NULL),
(222, '13-52', 'Disponible', NULL, NULL),
(223, '13-53', 'Disponible', NULL, NULL),
(224, '13-54', 'Disponible', NULL, NULL),
(225, '13-55', 'Disponible', NULL, NULL),
(226, '13-56', 'Disponible', NULL, NULL),
(227, '13-57', 'Disponible', NULL, NULL),
(228, '13-58', 'Disponible', NULL, NULL),
(229, '13-59', 'Disponible', NULL, NULL),
(230, '13-60', 'Disponible', NULL, NULL),
(231, '13-61', 'Disponible', NULL, NULL),
(232, '13-62', 'Disponible', NULL, NULL),
(233, '13-63', 'Disponible', NULL, NULL),
(234, '13-64', 'Disponible', NULL, NULL),
(235, '13-65', 'Disponible', NULL, NULL),
(236, '13-66', 'Disponible', NULL, NULL),
(237, '13-67', 'Disponible', NULL, NULL),
(238, '13-68', 'Disponible', NULL, NULL),
(239, '13-69', 'Disponible', NULL, NULL),
(240, '13-70', 'Disponible', NULL, NULL),
(241, '13-71', 'Disponible', NULL, NULL),
(242, '13-72', 'Disponible', NULL, NULL),
(243, '13-73', 'Disponible', NULL, NULL),
(244, '13-74', 'Disponible', NULL, NULL),
(245, '13-75', 'Disponible', NULL, NULL),
(246, '13-76', 'Disponible', NULL, NULL),
(247, '13-77', 'Disponible', NULL, NULL),
(248, '13-78', 'Disponible', NULL, NULL),
(249, '13-79', 'Disponible', NULL, NULL),
(250, '13-80', 'Disponible', NULL, NULL),
(251, '13-81', 'Disponible', NULL, NULL),
(252, '13-82', 'Disponible', NULL, NULL),
(253, '13-83', 'Disponible', NULL, NULL),
(254, '13-84', 'Disponible', NULL, NULL),
(255, '13-85', 'Disponible', NULL, NULL),
(256, '13-86', 'Disponible', NULL, NULL),
(257, '13-87', 'Disponible', NULL, NULL),
(258, '13-88', 'Disponible', NULL, NULL),
(259, '13-89', 'Disponible', NULL, NULL),
(260, '13-90', 'Disponible', NULL, NULL),
(261, '13-91', 'Disponible', NULL, NULL),
(262, '13-92', 'Disponible', NULL, NULL),
(263, '13-93', 'Disponible', NULL, NULL),
(264, '13-94', 'Disponible', NULL, NULL),
(265, '13-95', 'Disponible', NULL, NULL),
(266, '13-96', 'Disponible', NULL, NULL),
(267, '13-97', 'Disponible', NULL, NULL),
(268, '13-98', 'Disponible', NULL, NULL),
(269, '13-99', 'Disponible', NULL, NULL),
(270, '13-100', 'Disponible', NULL, NULL),
(271, '14-1', 'Disponible', NULL, NULL),
(272, '14-2', 'Disponible', NULL, NULL),
(273, '15-1', 'Disponible', NULL, NULL),
(274, '15-2', 'Disponible', NULL, NULL),
(275, '16-1', 'Disponible', NULL, NULL),
(276, '16-2', 'Disponible', NULL, NULL),
(277, '17-1', 'Disponible', NULL, NULL),
(278, '17-2', 'Disponible', NULL, NULL),
(279, '17-3', 'Disponible', NULL, NULL),
(280, '17-4', 'Disponible', NULL, NULL),
(281, '17-5', 'Disponible', NULL, NULL),
(282, '18-1', 'Disponible', NULL, NULL),
(283, '18-2', 'Disponible', NULL, NULL),
(284, '19-1', 'Disponible', NULL, NULL),
(285, '19-2', 'Disponible', NULL, NULL),
(286, '20-1', 'Reservado', 70, NULL),
(287, '20-2', 'Reservado', 70, NULL),
(288, '20-3', 'Disponible', NULL, NULL),
(289, '20-4', 'Reservado', 70, NULL),
(290, '20-5', 'Disponible', NULL, NULL),
(291, '20-6', 'Disponible', NULL, NULL),
(292, '20-7', 'Disponible', NULL, NULL),
(293, '20-8', 'Disponible', NULL, NULL),
(294, '20-9', 'Disponible', NULL, NULL),
(295, '20-10', 'Disponible', NULL, NULL),
(296, '20-11', 'Disponible', NULL, NULL),
(297, '20-12', 'Disponible', NULL, NULL),
(298, '20-13', 'Disponible', NULL, NULL),
(299, '20-14', 'Reservado', 70, NULL),
(300, '20-15', 'Disponible', NULL, NULL),
(301, '20-16', 'Disponible', NULL, NULL),
(302, '20-17', 'Reservado', 123, NULL),
(303, '20-18', 'Reservado', 123, NULL),
(304, '20-19', 'Disponible', NULL, NULL),
(305, '20-20', 'Disponible', NULL, NULL),
(306, '20-21', 'Disponible', NULL, NULL),
(307, '20-22', 'Disponible', NULL, NULL),
(308, '20-23', 'Disponible', NULL, NULL),
(309, '20-24', 'Disponible', NULL, NULL),
(310, '20-25', 'Disponible', NULL, NULL),
(311, '20-26', 'Disponible', NULL, NULL),
(312, '20-27', 'Disponible', NULL, NULL),
(313, '20-28', 'Disponible', NULL, NULL),
(314, '20-29', 'Disponible', NULL, NULL),
(315, '20-30', 'Disponible', NULL, NULL),
(316, '20-31', 'Disponible', NULL, NULL),
(317, '20-32', 'Disponible', NULL, NULL),
(318, '20-33', 'Disponible', NULL, NULL),
(319, '20-34', 'Disponible', NULL, NULL),
(320, '20-35', 'Disponible', NULL, NULL),
(321, '20-36', 'Disponible', NULL, NULL),
(322, '20-37', 'Disponible', NULL, NULL),
(323, '20-38', 'Disponible', NULL, NULL),
(324, '20-39', 'Disponible', NULL, NULL),
(325, '20-40', 'Disponible', NULL, NULL),
(326, '20-41', 'Disponible', NULL, NULL),
(327, '20-42', 'Disponible', NULL, NULL),
(328, '20-43', 'Disponible', NULL, NULL),
(329, '20-44', 'Disponible', NULL, NULL),
(330, '20-45', 'Disponible', NULL, NULL),
(331, '20-46', 'Disponible', NULL, NULL),
(332, '20-47', 'Disponible', NULL, NULL),
(333, '20-48', 'Disponible', NULL, NULL),
(334, '20-49', 'Disponible', NULL, NULL),
(335, '20-50', 'Disponible', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistentes`
--

CREATE TABLE `asistentes` (
  `asistente_id` int NOT NULL,
  `usuario_id` int DEFAULT NULL,
  `evento_id` int DEFAULT NULL,
  `estado_inscripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `asistentes`
--

INSERT INTO `asistentes` (`asistente_id`, `usuario_id`, `evento_id`, `estado_inscripcion`) VALUES
(1, 1, 1, NULL),
(2, 2, 2, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `categoria_id` int NOT NULL,
  `nombre` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`categoria_id`, `nombre`) VALUES
(1, 'Tecnología'),
(2, 'Educación'),
(3, 'Entretenimiento'),
(4, 'Deportes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `comentario_id` int NOT NULL,
  `usuario_id` int DEFAULT NULL,
  `evento_id` int DEFAULT NULL,
  `comentario` text,
  `fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`comentario_id`, `usuario_id`, `evento_id`, `comentario`, `fecha`) VALUES
(2, 79, 1, 'Excelente servicio del evento', '2024-07-10 00:00:00'),
(3, 79, 1, 'Este es un comentario de prueba', '2024-07-10 00:00:00'),
(4, 79, 1, 'Este es un comentario de prueba', '2024-08-17 03:08:35'),
(15, 1, 1, 'Buen evento', '2024-07-10 00:00:00'),
(16, 70, 1, 'buen evento ', '2024-08-18 22:17:30'),
(17, 70, 1, 'ya ', '2024-08-18 22:18:21'),
(18, 42, 1, 'g', '2024-08-19 16:41:09'),
(37, 190, 1, 'hola', '2024-08-21 00:00:00'),
(46, 231, 1, 'este es el comentado de germán xd', '2024-08-22 00:00:00'),
(47, 233, 49, 'que emoción, me gusta este evento', '2024-08-22 00:00:00'),
(51, 233, 1, 'Hola evento', '2024-08-22 13:41:03'),
(52, 10, 49, 'sis', '2024-08-22 00:00:00'),
(53, 246, 1, 'hola ', '2024-09-19 00:00:00'),
(54, 190, 1, 'hola', '2024-09-20 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `errores_logs`
--

CREATE TABLE `errores_logs` (
  `log_id` int NOT NULL,
  `usuario_id` int DEFAULT NULL,
  `mensaje` text,
  `fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `errores_logs`
--

INSERT INTO `errores_logs` (`log_id`, `usuario_id`, `mensaje`, `fecha`) VALUES
(1, 1, 'Error al cargar la página de eventos.', '2024-07-23 01:44:06'),
(2, 2, 'Error al procesar el pago.', '2024-07-23 01:44:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `escenario`
--

CREATE TABLE `escenario` (
  `escenario_id` int NOT NULL,
  `asiento` int DEFAULT NULL,
  `forma` enum('Redondo','Cuadrado','Triangular') DEFAULT NULL,
  `evento_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `escenario`
--

INSERT INTO `escenario` (`escenario_id`, `asiento`, `forma`, `evento_id`) VALUES
(1, 15, 'Cuadrado', 1),
(2, 30, 'Redondo', 2),
(4, 30, 'Cuadrado', 7),
(5, 20, 'Cuadrado', 25),
(10, 1, 'Cuadrado', 46),
(11, 1, 'Triangular', 47),
(12, 1, 'Cuadrado', 48),
(13, 100, 'Cuadrado', 49),
(18, 2, 'Redondo', 61),
(19, 2, 'Redondo', 62),
(20, 50, 'Redondo', 63);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `evento_id` int NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_termino` date DEFAULT NULL,
  `organizador_id` int DEFAULT NULL,
  `categoria_id` int DEFAULT NULL,
  `ubicacion` varchar(255) DEFAULT NULL,
  `max_per` int DEFAULT NULL,
  `estado` enum('Pendiente','Aprobado','Rechazado') DEFAULT 'Pendiente',
  `fecha_autorizacion` datetime DEFAULT NULL,
  `autorizado_por` int DEFAULT NULL,
  `validacion_id` int DEFAULT NULL,
  `tipo_evento` int NOT NULL DEFAULT '1',
  `descripcion` varchar(250) NOT NULL DEFAULT 'descripcion',
  `requerimientos` varchar(250) DEFAULT 'requerimientos',
  `precio` float DEFAULT '0',
  `escenario` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`evento_id`, `nombre`, `fecha_inicio`, `fecha_termino`, `organizador_id`, `categoria_id`, `ubicacion`, `max_per`, `estado`, `fecha_autorizacion`, `autorizado_por`, `validacion_id`, `tipo_evento`, `descripcion`, `requerimientos`, `precio`, `escenario`) VALUES
(1, 'Conferencia de tecnología', '2024-09-08', '2024-09-10', 3, 1, 'UTP Maxcanú', 15, 'Aprobado', '2024-07-01 10:00:00', 1, 1, 1, 'descripcion', 'requerimientos', 0, 1),
(2, 'Taller de Programación', '2024-08-17', '2024-08-17', 3, 1, 'Centro de Convenciones', 30, 'Aprobado', '2024-05-01 10:00:00', 2, 1, 1, 'descripcion', 'requerimientos', 0, 1),
(7, 'Concierto Espinoza Paz', '2024-08-20', '2024-08-20', NULL, 3, 'Maxcanu', 30, 'Aprobado', NULL, NULL, NULL, 1, 'descripcion', 'requerimientos', 0, 1),
(25, 'Expo Gastronomica', '2024-08-13', '2024-08-13', NULL, 3, 'Universidad tecnologica del poniente', 20, 'Aprobado', NULL, NULL, NULL, 1, 'descripcion', 'requerimientos', 0, 1),
(38, 'Comic con', '2023-08-10', '2023-08-12', NULL, 1, 'Siglo XXI, Mérida', 60, 'Aprobado', NULL, NULL, NULL, 1, 'descripcion', 'requerimientos', 0, 1),
(46, 'Prueba mejorando el diseño', '2024-08-18', '2024-08-19', NULL, 2, 'Mérida, Yucatán', 1, 'Pendiente', NULL, NULL, NULL, 1, 'descripcion', 'requerimientos', 0, 1),
(47, 'Partido de la selección', '2024-08-27', '2024-08-28', NULL, 4, 'Mérida, Yucatán', 1, 'Pendiente', NULL, NULL, NULL, 1, 'descripcion', 'requerimientos', 0, 1),
(48, 'Evento sobre Pruebas2', '2024-08-19', '2024-08-20', NULL, 3, 'Mérida, Yucatán', 1, 'Rechazado', NULL, NULL, NULL, 1, 'descripcion', 'requerimientos', 120, 1),
(49, 'Graduacion ingenieria 2025', '2025-11-12', '2025-11-12', NULL, 1, 'UTP Maxcanú', 100, 'Aprobado', NULL, NULL, NULL, 1, 'descripcion', 'requerimientos', 0, 1),
(61, 'HolaTest', '2024-09-01', '2024-09-20', NULL, 1, 'Merida', 2, 'Pendiente', NULL, NULL, NULL, 1, 'descripcion', 'requerimientos', 0, 1),
(62, 'brawl stars', '2024-09-02', '2024-09-04', NULL, 1, 'merida', 2, 'Pendiente', NULL, NULL, NULL, 1, 'descripcion', 'requerimientos', 0, 1),
(63, 'Concierto de Rock', '2025-10-20', '2025-10-20', NULL, 1, 'Auditorio Nacional', 5000, 'Pendiente', NULL, NULL, NULL, 2, 'Un increíble concierto de rock con bandas internacionales.', 'requerimientos', 300, 1),
(64, 'Concierto de Rock', '2025-10-20', '2025-10-20', NULL, 1, 'Auditorio Nacional', 5000, 'Pendiente', NULL, NULL, NULL, 2, 'Un increíble concierto de rock con bandas internacionales.', 'requerimientos', 300, 1),
(67, 'Concierto irvin', '2024-11-25', '2024-11-23', 243, 3, 'Ciudad de toluca', 5000, 'Pendiente', NULL, NULL, 2, 1, 'Un concierto de rock actualizado con bandas internacionales.', 'Sonido profesional actualizado, iluminación especial', 180, 2),
(68, 'por el amor de dios busquen una base de datos', '2024-11-22', '2024-11-23', 243, 3, 'Ciudad de México', 5000, 'Pendiente', NULL, NULL, 2, 1, 'Un concierto de rock actualizado con bandas internacionales.', 'Sonido profesional actualizado, iluminación especial', 180, 2),
(69, 'Concierto de Rock', '2024-11-20', '2024-11-21', 243, 2, 'Ciudad de México', 5000, 'Pendiente', NULL, NULL, 2, 1, 'Un concierto de rock con bandas internacionales.', 'requerimientos', 150, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horarios`
--

CREATE TABLE `horarios` (
  `horario_id` int NOT NULL,
  `evento_id` int DEFAULT NULL,
  `hora_inicio` time DEFAULT NULL,
  `hora_fin` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `horarios`
--

INSERT INTO `horarios` (`horario_id`, `evento_id`, `hora_inicio`, `hora_fin`) VALUES
(1, 1, '09:00:00', '11:00:00'),
(2, 1, '20:00:00', '22:00:00'),
(3, 2, '09:00:00', '10:00:00'),
(10, 63, '18:00:00', '20:00:00'),
(11, 63, '20:30:00', '22:00:00'),
(12, 64, '18:00:00', '20:00:00'),
(13, 64, '20:30:00', '22:00:00'),
(22, 67, '18:00:00', '20:00:00'),
(24, 68, '18:00:00', '20:00:00'),
(25, 69, '19:00:00', '21:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `imagen_id` int NOT NULL,
  `usuario_id` int DEFAULT NULL,
  `evento_id` int DEFAULT NULL,
  `imagen_url` varchar(255) DEFAULT NULL,
  `tipo_img` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`imagen_id`, `usuario_id`, `evento_id`, `imagen_url`, `tipo_img`) VALUES
(1, 1, 1, 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1),
(2, 2, 2, 'https://images.pexels.com/photos/7897470/pexels-photo-7897470.jpeg?auto=compress&cs=tinysrgb&w=600', 0),
(5, NULL, 7, 'https://www.leon-mexico.com/wp-content/uploads/2024/01/1400x728px-15.jpg', 0),
(23, NULL, 25, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0),
(36, NULL, 38, 'https://trekmovie.com/wp-content/uploads/2023/09/nycc23-stu-head.jpg', 0),
(44, NULL, 46, 'https://images.pexels.com/photos/1181265/pexels-photo-1181265.jpeg?auto=compress&cs=tinysrgb&w=600', 0),
(45, NULL, 47, 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600', 0),
(46, NULL, 48, 'https://i.scdn.co/image/ab6761610000e5ebd642648235ebf3460d2d1f6a', 0),
(47, NULL, 49, 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0),
(55, NULL, 61, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOVqL9m-GmDdmxv_AglVhxstLnEmDz50Uxg&s', 0),
(56, NULL, 62, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5lqUq7l70SxuDedk72cd68lSKRDBlhHvQpQ&usqp=CAU', 0),
(57, NULL, 63, 'https://example.com/imagen_concierto.jpg', 0),
(58, NULL, 64, 'https://example.com/imagen_concierto.jpg', 0),
(61, NULL, 67, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729046048/tbo0futh4qp1niarrwwp.jpg', 1),
(62, NULL, 68, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729045301/gzzjrjlxgpvxnktp9bwa.jpg', 0),
(63, NULL, 69, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729046343/l5yjogknjivi66st18ya.jpg', 1),
(64, NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729048778/a43jmx5svhomfnlxfqzw.jpg', 0),
(65, NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729049011/nsynaxu6zwq7jwss6mdo.jpg', 0),
(66, NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729049083/zglimttqbz70hbsllcam.jpg', 0),
(67, NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729049309/nbmn0lmsii2nvzirh1vc.jpg', 0),
(68, NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729049310/x6ge2afv4urdtyjbkej9.jpg', 0),
(69, NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729049331/hkoerldcdocs7aikuroj.jpg', 0),
(70, NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729049401/kwdfkaiefcpedlkh5red.jpg', 0),
(71, NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729049560/tlf1dindnsyrqmospgdk.jpg', 0),
(72, NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729049813/kt36mwhsdvmvvf7rasjw.jpg', 0),
(73, NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729050020/uy5mangbj4osso3wbn0d.jpg', 0),
(74, NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729050180/e7x8aqjbgvcqwwb9bwh2.jpg', 0),
(75, NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729050440/xdfbnymbob3rjeo5mjea.jpg', 0),
(76, 2, 67, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729050902/e0girgojaxpnnnppaeia.jpg', 0),
(77, 2, 69, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729050965/srctzowx2uttmgh24idu.jpg', 0),
(78, 2, 69, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729051151/ffmyuccwqqrwnfre0yh5.webp', 0),
(79, 2, 25, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729052217/mxxrcxordiw7venzypgu.jpg', 0),
(80, 2, 25, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729052216/sqmoad0scfwpdzjtfenz.webp', 0),
(81, 2, 68, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729052534/ljob6sa5mxptxl6owfhh.jpg', 0),
(82, 2, 68, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729052930/hsyarvkj5putyne3ln6m.jpg', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `membresia`
--

CREATE TABLE `membresia` (
  `membresia_id` int NOT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `descripcion` text,
  `costo` decimal(10,2) DEFAULT NULL,
  `meses` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `membresia`
--

INSERT INTO `membresia` (`membresia_id`, `tipo`, `descripcion`, `costo`, `meses`) VALUES
(2, 'Premium', 'Acceso completo a todos los eventos y contenido exclusivo.', 799.99, 2),
(3, 'VIP', 'Acceso completo y preferente a todos los eventos y contenido.', 200.00, 1),
(5, 'Gratis', 'Evento Gratuito', 0.00, 0),
(19, 'PRUEBA', '10 meses', 10000.00, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificaciono`
--

CREATE TABLE `notificaciono` (
  `notificacion_id` int NOT NULL,
  `usuario_id` int NOT NULL,
  `mensaje` varchar(255) NOT NULL,
  `fecha_envio` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `notificaciono`
--

INSERT INTO `notificaciono` (`notificacion_id`, `usuario_id`, `mensaje`, `fecha_envio`) VALUES
(1, 1, 'bienvenido a digital event', '2024-07-23 18:19:55'),
(2, 1, 'Notification message', '2024-07-25 00:10:00'),
(3, 1, 'Notification message', '2024-07-25 01:17:54'),
(4, 1, 'Notification message', '2024-07-25 05:10:27'),
(5, 10, 'Bienvenido a Digital Event Hub', '2024-07-27 22:30:30'),
(6, 1, 'Notification message', '2024-08-19 20:47:37');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `pago_id` int NOT NULL,
  `monto` decimal(10,2) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `usuario_id` int DEFAULT NULL,
  `evento_id` int DEFAULT NULL,
  `f_inicio_ep` datetime DEFAULT NULL,
  `f_FIN_ep` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`pago_id`, `monto`, `fecha`, `usuario_id`, `evento_id`, `f_inicio_ep`, `f_FIN_ep`) VALUES
(1, 50.00, NULL, NULL, 1, NULL, NULL),
(2, 50.00, NULL, NULL, 1, NULL, NULL),
(3, 29.00, NULL, NULL, 2, NULL, NULL),
(4, 29.00, NULL, NULL, 2, NULL, NULL),
(7, 900.00, NULL, NULL, 7, NULL, NULL),
(8, 5000.00, '2024-08-16', 10, 1, NULL, NULL),
(9, 5000.00, '2024-08-16', 10, 1, NULL, NULL),
(10, 99.99, NULL, NULL, 25, NULL, NULL),
(11, 99.99, NULL, NULL, 25, NULL, NULL),
(12, 5000.00, '2024-08-16', 1, 1, NULL, NULL),
(15, 5000.00, '2024-08-16', 1, 1, NULL, NULL),
(16, 5000.00, '2024-08-16', 1, 1, NULL, NULL),
(17, 5000.00, '2024-08-16', 1, 1, NULL, NULL),
(18, 5000.00, '2024-08-16', 1, 1, NULL, NULL),
(19, 5000.00, '2024-08-17', 1, 1, NULL, NULL),
(20, 5000.00, '2024-08-17', 1, 1, NULL, NULL),
(21, 1000.00, '2024-08-17', 70, 1, NULL, NULL),
(22, 1000.00, '2024-08-17', 70, 1, NULL, NULL),
(23, 1000.00, '2024-08-17', 70, 1, NULL, NULL),
(24, 1000.00, '2024-08-17', 70, 1, NULL, NULL),
(25, 1000.00, '2024-08-17', 70, 1, NULL, NULL),
(26, 1000.00, '2024-08-17', 70, 2, NULL, NULL),
(27, 1000.00, '2024-08-17', 70, 1, NULL, NULL),
(28, 1000.00, '2024-08-17', 70, 1, NULL, NULL),
(29, 1000.00, '2024-08-17', 70, 2, NULL, NULL),
(30, 1000.00, '2024-08-17', 70, 1, NULL, NULL),
(31, 1000.00, '2024-08-17', 70, 1, NULL, NULL),
(32, 1000.00, '2024-08-17', 70, 1, NULL, NULL),
(33, 1000.00, '2024-08-17', 70, 1, NULL, NULL),
(34, 1000.00, '2024-08-17', 70, 1, NULL, NULL),
(35, 1000.00, '2024-08-18', 70, 1, NULL, NULL),
(36, 1000.00, '2024-08-18', 70, 1, NULL, NULL),
(37, 1000.00, '2024-08-18', 70, 2, NULL, NULL),
(38, 1000.00, '2024-08-18', 70, 2, NULL, NULL),
(39, 5000.00, '2024-08-18', 1, 1, NULL, NULL),
(40, 5000.00, '2024-08-18', 1, 1, NULL, NULL),
(41, 1000.00, '2024-08-18', 70, 1, NULL, NULL),
(42, 1000.00, '2024-08-18', 70, 1, NULL, NULL),
(43, 1000.00, '2024-08-18', 70, 1, NULL, NULL),
(44, 1000.00, '2024-08-18', 70, 1, NULL, NULL),
(45, 5000.00, '2024-08-18', 1, 1, NULL, NULL),
(46, 5000.00, '2024-08-18', 1, 1, NULL, NULL),
(47, 5000.00, '2024-08-18', 1, 1, NULL, NULL),
(48, 5000.00, '2024-08-18', 1, 1, NULL, NULL),
(49, 5000.00, '2024-08-18', 1, 1, NULL, NULL),
(50, 1000.00, '2024-08-18', 1, 1, NULL, NULL),
(51, 5000.00, '2024-08-18', 1, 1, NULL, NULL),
(54, 2900.00, '2024-08-19', 1, 1, NULL, NULL),
(55, 5000.00, '2024-08-19', 1, 1, NULL, NULL),
(56, 2900.00, '2024-08-19', 1, 1, NULL, NULL),
(57, 30000.00, '2024-08-19', 1, 1, NULL, NULL),
(58, 30000.00, '2024-08-19', 1, 1, NULL, NULL),
(59, 5000.00, '2024-08-19', 1, 1, NULL, NULL),
(60, 5000.00, '2024-08-19', 1, 1, NULL, NULL),
(61, 5000.00, '2024-08-19', 1, 1, NULL, NULL),
(62, 5000.00, '2024-08-19', 1, 1, NULL, NULL),
(63, 2900.00, '2024-08-19', 1, 1, NULL, NULL),
(64, 2900.00, '2024-08-19', 1, 1, NULL, NULL),
(65, 2900.00, '2024-08-19', 1, 1, NULL, NULL),
(66, 2900.00, '2024-08-19', 1, 1, NULL, NULL),
(67, 5000.00, '2024-08-19', 1, 1, NULL, NULL),
(68, 5000.00, '2024-08-19', 1, 1, NULL, NULL),
(69, 5000.00, '2024-08-19', 1, 1, NULL, NULL),
(70, 5000.00, '2024-08-19', 1, 1, NULL, NULL),
(71, 10.00, NULL, NULL, 46, NULL, NULL),
(72, 10.00, NULL, NULL, 47, NULL, NULL),
(73, 12.00, NULL, NULL, 48, NULL, NULL),
(74, 1000.00, '2024-08-19', 70, 2, NULL, NULL),
(75, 1000.00, '2024-08-19', 70, 2, NULL, NULL),
(76, 5000.00, '2024-08-20', 1, 1, NULL, NULL),
(77, 5000.00, '2024-08-20', 1, 1, NULL, NULL),
(78, 5000.00, '2024-08-20', 1, 1, NULL, NULL),
(79, 5000.00, '2024-08-20', 1, 1, NULL, NULL),
(80, 1000.00, '2024-08-20', 70, 1, NULL, NULL),
(81, 10000.00, '2024-08-20', 70, 1, NULL, NULL),
(82, 2900.00, '2024-08-20', 1, 1, NULL, NULL),
(83, 5000.00, '2024-08-20', 1, 1, NULL, NULL),
(84, 5000.00, '2024-08-20', 1, 1, NULL, NULL),
(85, 5000.00, '2024-08-20', 1, 1, NULL, NULL),
(86, 5000.00, '2024-08-20', 1, 1, NULL, NULL),
(87, 5000.00, '2024-08-20', 1, 1, NULL, NULL),
(88, 5000.00, '2024-08-20', 1, 1, NULL, NULL),
(89, 2900.00, '2024-08-20', 1, 1, NULL, NULL),
(90, 5000.00, '2024-08-20', 1, 1, NULL, NULL),
(91, 5000.00, '2024-08-20', 1, 1, NULL, NULL),
(92, 5000.00, '2024-08-21', 1, 1, NULL, NULL),
(93, 5000.00, '2024-08-21', 1, 1, NULL, NULL),
(94, 5000.00, '2024-08-21', 1, 1, NULL, NULL),
(95, 5000.00, '2024-08-21', 1, 1, NULL, NULL),
(96, 5000.00, '2024-08-21', 1, 1, NULL, NULL),
(97, 5000.00, '2024-08-21', 1, 1, NULL, NULL),
(98, 5000.00, '2024-08-21', 1, 1, NULL, NULL),
(99, 5000.00, '2024-08-21', 1, 1, NULL, NULL),
(100, 5000.00, '2024-08-21', 1, 1, NULL, NULL),
(101, 10000.00, '2024-08-21', 1, 1, NULL, NULL),
(104, 5000.00, '2024-08-21', 79, 38, NULL, NULL),
(105, 9999.00, '2024-08-21', 1, 1, NULL, NULL),
(106, 5000.00, '2024-08-21', 1, 1, NULL, NULL),
(107, 5000.00, '2024-08-21', 1, 1, NULL, NULL),
(108, 5000.00, '2024-08-21', 10, 1, NULL, NULL),
(109, 500000.00, '2024-08-21', 1, 1, NULL, NULL),
(110, 5000.00, '2024-08-21', 1, 1, NULL, NULL),
(111, 5000.00, '2024-08-21', 1, 1, NULL, NULL),
(112, 5000.00, '2024-08-21', 1, 1, NULL, NULL),
(113, 5000.00, '2024-08-21', 1, 1, NULL, NULL),
(114, 5000.00, '2024-08-21', 1, 1, NULL, NULL),
(115, 2900.00, '2024-08-22', 1, 1, NULL, NULL),
(116, 500000.00, '2024-08-22', 10, 38, NULL, NULL),
(117, 500000.00, '2024-08-22', 10, 38, NULL, NULL),
(118, 2900.00, '2024-08-22', 1, 1, NULL, NULL),
(119, 500000.00, '2024-08-22', 1, 1, NULL, NULL),
(120, 5000.00, '2024-08-22', 1, 1, NULL, NULL),
(121, 5000.00, '2024-08-22', 1, 1, NULL, NULL),
(122, 5000.00, '2024-08-22', 1, 1, NULL, NULL),
(123, 2900.00, '2024-08-22', 1, 1, NULL, NULL),
(124, 5000.00, '2024-08-22', 1, 1, NULL, NULL),
(125, 5000.00, '2024-08-22', 1, 1, NULL, NULL),
(126, 5000.00, '2024-08-22', 1, 1, NULL, NULL),
(127, 5000.00, '2024-08-22', 10, 1, NULL, NULL),
(128, 1.00, NULL, NULL, 49, NULL, NULL),
(129, 2900.00, '2024-08-22', 1, 1, NULL, NULL),
(131, 10000.00, '2024-08-22', 70, 1, NULL, NULL),
(132, 5000.00, '2024-08-22', 1, 1, NULL, NULL),
(133, 5000.00, '2024-08-22', 10, 1, NULL, NULL),
(134, 5000.00, '2024-08-22', 1, 1, NULL, NULL),
(135, 100.00, '2024-08-22', 233, 49, NULL, NULL),
(136, 5000.00, '2024-08-22', 79, 49, NULL, NULL),
(137, 5000.00, '2024-08-22', 1, 1, NULL, NULL),
(138, 5000.00, '2024-08-22', 79, 49, NULL, NULL),
(139, 5000.00, '2024-08-22', 79, 49, NULL, NULL),
(140, 5000.00, '2024-08-22', 1, 1, NULL, NULL),
(141, 5000.00, '2024-08-22', 1, 1, NULL, NULL),
(142, 5000.00, '2024-08-22', 1, 1, NULL, NULL),
(143, 5000.00, '2024-08-22', 1, 1, NULL, NULL),
(144, 5000.00, '2024-08-22', 1, 1, NULL, NULL),
(145, 10000.00, '2024-08-22', 233, 1, NULL, NULL),
(146, 5000.00, '2024-08-22', 1, 1, NULL, NULL),
(154, 10.00, NULL, NULL, 61, NULL, NULL),
(155, 10.00, NULL, NULL, 62, NULL, NULL),
(156, 100.00, NULL, NULL, 63, NULL, NULL),
(157, 5000.00, '2024-09-13', 242, 38, NULL, NULL),
(161, 5000.00, '2024-09-19', 246, 7, NULL, NULL),
(162, 5000.00, '2024-09-19', 1, 1, NULL, NULL),
(166, 5000.00, '2024-09-20', 1, 1, NULL, NULL),
(167, 5000.00, '2024-09-20', 1, 1, NULL, NULL),
(168, 2900.00, '2024-09-20', 1, 1, NULL, NULL),
(169, 2900.00, '2024-09-20', 1, 1, NULL, NULL),
(170, 2900.00, '2024-09-20', 1, 1, NULL, NULL),
(171, 5000.00, '2024-09-20', 1, 1, NULL, NULL),
(172, 0.00, '2024-09-20', 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `permiso_id` int NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `permisos`
--

INSERT INTO `permisos` (`permiso_id`, `nombre`) VALUES
(1, 'Crear evento'),
(2, 'Editar evento'),
(3, 'Eliminar evento'),
(4, 'Ver usuarios'),
(5, 'Editar usuarios'),
(6, 'Eliminar usuarios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `rol_id` int NOT NULL,
  `nombre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`rol_id`, `nombre`) VALUES
(1, 'Administrador'),
(2, 'Usuario'),
(3, 'Organizador'),
(4, 'Asistente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles_permisos`
--

CREATE TABLE `roles_permisos` (
  `rol_id` int NOT NULL,
  `permiso_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `roles_permisos`
--

INSERT INTO `roles_permisos` (`rol_id`, `permiso_id`) VALUES
(1, 1),
(1, 2),
(1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tickets`
--

CREATE TABLE `tickets` (
  `ticket_id` int NOT NULL,
  `info` varchar(300) DEFAULT NULL,
  `code` varchar(60) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `id_horario` int DEFAULT NULL,
  `pago_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tickets`
--

INSERT INTO `tickets` (`ticket_id`, `info`, `code`, `status`, `id_horario`, `pago_id`) VALUES
(1, 'info', 'AS3452SA7', 1, 1, NULL),
(2, 'info', 'AS34R2TA8', 1, 2, NULL),
(3, 'Ticket para evento prueba', 'UTP-DEH-2024-2024-10-13-7f030813', 1, 1, NULL),
(4, 'Ticket prueba', 'UTP-DEH-2024-10-13-1bc65433', 0, 2, 172);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `ticket_event_view`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `ticket_event_view` (
`ticket_id` int
,`code` varchar(60)
,`status` tinyint(1)
,`hora_inicio` time
,`hora_fin` time
,`evento_nombre` varchar(100)
,`ubicacion` varchar(255)
,`descripcion` varchar(250)
,`evento_id` int
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tokens`
--

CREATE TABLE `tokens` (
  `token_id` int NOT NULL,
  `usuario_id` int DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `expiracion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tokens`
--

INSERT INTO `tokens` (`token_id`, `usuario_id`, `token`, `expiracion`) VALUES
(1, 1, 'token123', '2024-08-01 10:00:00'),
(2, 2, 'token456', '2024-09-01 10:00:00'),
(3, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sIjoxLCJpYXQiOjE3MjE3NjcxMTMsImV4cCI6MTcyMTc3MDcxM30.1e45C9_Rg1p_BB4jsTXFl7TrHnbYTzvH2n94XkfuC6Q', '2024-07-23 15:38:33'),
(4, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sIjoxLCJpYXQiOjE3MjE3NjcxMTMsImV4cCI6MTcyMTc3MDcxM30.1e45C9_Rg1p_BB4jsTXFl7TrHnbYTzvH2n94XkfuC6Q', '2024-07-23 15:38:33'),
(5, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sIjoxLCJpYXQiOjE3MjE3NjcxMTMsImV4cCI6MTcyMTc3MDcxM30.1e45C9_Rg1p_BB4jsTXFl7TrHnbYTzvH2n94XkfuC6Q', '2024-07-23 15:38:33'),
(6, 6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwicm9sIjozLCJpYXQiOjE3MjE3Njc2ODUsImV4cCI6MTcyMTc3MTI4NX0._uI4ibmLf9Ic8Eql-4PMitt4cVFC0QvThSuhIz_3xkY', '2024-07-23 15:48:05'),
(7, 11, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInJvbCI6MSwiaWF0IjoxNzIxODk3MDA2LCJleHAiOjE3MjE5MDA2MDZ9.GpuNctNHG2HlwOK-plaBd6iUJY7gn59VfET8VEuj5es', '2024-07-25 09:43:26'),
(8, 11, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInJvbCI6MSwiaWF0IjoxNzIxOTAyODY1LCJleHAiOjE3MjE5MDY0NjV9.EJQ2idxJ6Uk2r1OKFtcfr2p_1TIJW4HMBl9TXqfXgvA', '2024-07-25 11:21:05'),
(9, 11, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInJvbCI6MSwiaWF0IjoxNzIxOTAyODY1LCJleHAiOjE3MjE5MDY0NjV9.EJQ2idxJ6Uk2r1OKFtcfr2p_1TIJW4HMBl9TXqfXgvA', '2024-07-25 11:21:05'),
(10, 109, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA5LCJyb2wiOjIsImlhdCI6MTcyMjg5Njg4OSwiZXhwIjoxNzIyOTAwNDg5fQ.jBv64jxYzQsHH3vALuMv9TNBSyKKGlIMYTm3ArkIK54', '2024-08-05 23:28:09'),
(11, 109, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA5LCJyb2wiOjIsImlhdCI6MTcyMjg5Njg4OSwiZXhwIjoxNzIyOTAwNDg5fQ.jBv64jxYzQsHH3vALuMv9TNBSyKKGlIMYTm3ArkIK54', '2024-08-05 23:28:09'),
(12, 145, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQ1LCJyb2wiOjMsImlhdCI6MTcyMzE0NTQyMiwiZXhwIjoxNzIzMTQ5MDIyfQ.hK7WwCW1g85AG_vLRNFWNrJ5exKwJIeHDdmYXqn-tNg', '2024-08-08 20:30:22'),
(13, 145, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQ1LCJyb2wiOjMsImlhdCI6MTcyMzE0NTQyMiwiZXhwIjoxNzIzMTQ5MDIyfQ.hK7WwCW1g85AG_vLRNFWNrJ5exKwJIeHDdmYXqn-tNg', '2024-08-08 20:30:22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usuario_id` int NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `rol_id` int DEFAULT NULL,
  `membresia_id` int DEFAULT NULL,
  `activo` tinyint(1) DEFAULT '1',
  `last_name` varchar(255) DEFAULT NULL,
  `resetPasswordExpire` date DEFAULT NULL,
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `fotoPerfil` varchar(255) DEFAULT NULL,
  `fecha_membresia` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usuario_id`, `nombre`, `email`, `contrasena`, `telefono`, `rol_id`, `membresia_id`, `activo`, `last_name`, `resetPasswordExpire`, `resetPasswordToken`, `fotoPerfil`, `fecha_membresia`) VALUES
(1, 'Juan Pérez', 'juan.perez@example.com', '$2b$10$IJAqk1ORz9DocBW9cxkHWu2Gw6nG3YCvLOx8syDyyj4mKlsZ.G9bS', '1234567890', 1, 2, 1, 'Perez', NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729044769/bhukbzebn58bxhpfohnt.jpg', NULL),
(2, 'Maria García', 'maria.garcia@12example.com', '$2b$10$aGF58TCWr9bRIw3Sqj5Q3eU09XIkPYZDK/vN6HZaNZGPRqdjf4B0a', '9971079785', 2, NULL, 1, 'Garcia', NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1729044423/ibkzqkgxi7fmtk8byx7s.jpg', NULL),
(3, 'Carlos Francisco', 'carlos.lopez@example.com', '$2b$10$pF4gae8ZlgJKFmyPUHkIVO7fgcUm.DYuGAF5nIDbcf/k0S5viFC2.', '1122334455', 3, 3, 1, 'Lopez Can', NULL, NULL, 'https://www.pngkit.com/png/detail/888-8880443_personas-png.png', NULL),
(4, 'Alan', 'alan@gmail.com', '$2b$10$5SIgk4ygEhvfMqo7UVKj1O1q4atWF2aeeLPVnaPGqIEqvVFc0qx.2', '123456789', 1, NULL, 1, 'Perez', NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1722714641/igmqnjox2tex2jgsa6uy.png', NULL),
(5, 'Jose', 'jose@gmail.com', '$2b$10$7AqJIGk3zQTCcxsSmqCIZ.RSqD5rwWASCCxG1RWcCTu.hSkivJyuy', '123456789', 1, NULL, 1, 'Perez', NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1722721825/gzrb7ifnpdw7li6fuwvy.png', NULL),
(6, 'oscar', 'oscar@gmail.com', '$2b$10$2tox2IhPXrYZlWEigPxJQOTN5wwLxSsZPtTVoFaoBXHJLpFRWDK56', '456', 2, 2, 1, 'nuevo_apellido', NULL, NULL, 'nueva_url', NULL),
(8, 'prueba', 'prueba999@gmail.com', '$2b$10$2sxAedjJpx/8eqrfDzyawevisTxLhmnYk8jIJUgyO6y0O.hxfyMk.', '929388383832', 1, NULL, 1, 'pruebayus', NULL, NULL, NULL, NULL),
(10, 'Pablo Antonio', 'whitesoft84@gmail.com', '$2b$10$Gx3N1S2EZco93vG.dlImLOkJipoQg.iPlhfpIQ/Hmiqxyv3wCl/g6', '9991973826', 2, NULL, 1, 'Vega Castañeda ', NULL, NULL, '/data/user/0/com.example.digital_event_hub/app_flutter/1000001755.jpg', NULL),
(11, 'Pepito', 'pepito@gmail.com', '$2b$10$1vRf53LP1nfYVNKdBZ4QFejOO0.7NpSxmg3GDsTy0muPBWBjPnYtK', '92828229', 1, NULL, 1, 'pepito2', NULL, NULL, NULL, NULL),
(12, 'prueba2', 'prueba@gmail.com', '$2b$10$7gZkI72yUXA59zXV9abRk.6uQAOYKn/DuG8i0obO/KYxQHw8eY6Iu', '0123123412', 1, NULL, 1, 'wwww', NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1722024719/sprjnwphmxzxzqeg2v9j.jpg', NULL),
(15, 'prueba3', 'pruebas@gmail.com', '$2b$10$swk97BHGozDl27LgknnuMuBBBKGg8WTvUhFLPN/exrH5RQB7ZIINC', '01234567890', 1, NULL, 1, 'prueba', NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1722025662/zfbvda2ney0kwn4fkirb.jpg', NULL),
(16, 'Codigo', 'codigo@gmail.com', '$2b$10$n7QFUtkXmobwFj82j0qjneneWwYHBOHlWLDohUVq5j9UEmuoCB45C', '12345', 1, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(17, 'ejemplo2', 'xd@gmail.com', '$2b$10$cfjRACns8lpLxz6kg9dS9.InQsD1iLIRcXtQWOvrRMwYhmyvM9GS.', '123', 1, NULL, 1, 'xd', NULL, NULL, NULL, NULL),
(19, 'ejemplo3', 'ejemplo3@gmail.com', '$2b$10$PSaTMuMfWakYOgtN2YUgMe972hVD3IwxSr.cvb9Oyuxwg.aXmixFG', '12345', 1, NULL, 1, 'ejemploxd', NULL, NULL, NULL, NULL),
(20, 'ejemplo5', 'ejemplo5@gmail.com', '$2b$10$1.qGfLcotVMmYDqCKGIC4urNbwMW3YWS3gqUlC4VUQtJA4sfVqNOG', '12345', 1, NULL, 1, 'Dzul', NULL, NULL, NULL, NULL),
(21, 'prueba4', 'josegonzalo1290@gmail.com', '$2b$10$x3lRaB1PCCBW6YdroOnMV.WnpeEHYX1O/189K/xkdeMJqYwA/N0xu', '9995169934', 1, NULL, 1, 'ee', '2024-08-06', 'dc48b3e90eda36547c78bf6db71c317f561ea209d46c07e9fd752faf9e98e1cf', NULL, NULL),
(22, 'prueba5', 'josegonzalodzuluc1290@gmail.com', '$2b$10$wdzGx6QrktGh7y/NXHw8f.dOvJg44F3syCmPjCPVeHdqFI9fQeqyu', '9995169934', 1, NULL, 1, 'ee', '2024-09-14', '7ba7679b36417c8d1e9fe1fe94929cffa4bb1d5b38dabda8a2093f99cbed0a66', NULL, NULL),
(28, 'prueba6', 'prueba6@gmail.com', '$2b$10$voSit6.AJwt0GTWzT38TE.wpMQFg.Mb14jkZKK/VSG7kdOf4ut7UK', '1234567890', 1, NULL, 1, 'ee', NULL, NULL, NULL, NULL),
(30, 'prueba7', 'prueba7@gmail.com', '$2b$10$6K8oi4dqZslPpmeqhBy16eii0nrx0pfc05kOu604DYs6q9vdcG9Ka', '1234567890', 1, NULL, 1, 'ee', NULL, NULL, NULL, NULL),
(37, 'prueba4', 'pruba@gmail.com', '$2b$10$78ciK5Vfx/sEVTAp9YOh2.2igeP7KOC7IaKK4vIgJo19PPwjy7Vpe', '9995169934', 1, NULL, 1, 'ee', NULL, NULL, NULL, NULL),
(41, 'Rodrigo', 'rodrigo@gmail.com', '$2b$10$FApzFeLuTwTRsK0NNtKxBu8DdsAictC6RvvSdtBWOtXMksmyFsNCK', '9971136746', 1, NULL, 1, 'Moo', NULL, NULL, NULL, NULL),
(42, 'Jasiel Fer.', 'jasiel@gmail.com', '$2b$10$z3Wbxqzpjuz/k0I8PUjR3eWQB2JsOaP1Dpvm6kqh3zWVaTVUZOkpq', '9999999999', 2, NULL, 1, 'Chin', NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1724100092/xilhrt1l2eexycfiv95s.jpg', NULL),
(43, 'Amiel', 'amiel@gmail.com', '$2b$10$NHbghjVFb815qDu8vqsSguDMfs4K9BGbQZC7zLX11IleNZzFHoaxG', '9999999999', 3, NULL, 1, 'Kantún', NULL, NULL, NULL, NULL),
(44, 'Alejandro', 'alejandro@gmail.com', '$2b$10$YxXbH5xm.C5UUx96brDDMe5SpeD8uujGWAjDu1ftxrDROLUB7/jz.', '9999999999', 2, NULL, 1, 'Canul', NULL, NULL, NULL, NULL),
(45, 'pueba13', 'pruebas12@gmail.com', '$2b$10$9YHN.mhFfC2A5q52/mx0Iu8rhkEbmp2/g41zd95u/t.ggwXqPvEXK', '1234556789', 2, NULL, 1, 'ee', NULL, NULL, NULL, NULL),
(47, 'Prueba9', 'prueba99@gmail.com', '$2b$10$eR2Exc8KKa6KxFv2NUbzHuoD0udGj982hsVve0iRz5.EjGoG1HhGm', '99999999', 2, NULL, 1, 'Prueba', NULL, NULL, NULL, NULL),
(48, 'Teodosio', 'teo@gmail.com', '$2b$10$OC4XQVGHHX4wogmfT6T7XObjZG6.lv9DpdOcKNgQPGjlLJM0etyiS', '9999999999', 2, NULL, 1, 'Lopez', NULL, NULL, NULL, NULL),
(49, 'German', 'german@gmail.com', '$2b$10$TmVR99RHz9ntQIrnl7CFSOiMu89TqyLPeTDW8Enfu5FyqBrSc6ji2', '6543167890', 2, NULL, 1, 'Sima', NULL, NULL, NULL, NULL),
(52, 'Samuel', 'sam@gmail.com', '$2b$10$.g.PKytyWDpgvgJ10MKzN.gZZFbCR2DKWRwxGsD4zbMewhOIXTulC', '4321567893', 2, NULL, 1, 'Perez', NULL, NULL, NULL, NULL),
(58, 'Francio', 'francio@gmail.com', '$2b$10$c3ezLIvjLICrj8jmczaHperzoDy0opNgvLYUt5vrw23ZqNY/l8w7y', '1234567890', 2, NULL, 1, 'Perez', NULL, NULL, NULL, NULL),
(60, 'Hector', 'xobived354@foraro.com', '$2b$10$F993oMrPbZXG2/VjBiDPqOx8.KezP.iPM5OwET11Jar2sTQpKDju.', '12345', 2, NULL, 1, 'ejemplo', '2024-08-03', '58795e5eac256057d8f747db60b5abeed5bb379d3b22cf586d4abd408721704d', NULL, NULL),
(62, 'Brayan', 'alejandrocanultamay@gmail.com', '$2b$10$Z7jyQ8Pj/Hjj6h8WqoadZ.W9H3Tl8bCw54ti1yWCBHG6ECQvoaNDu', '9961091192', 2, NULL, 1, 'Tamal', NULL, NULL, 'https://w7.pngwing.com/pngs/916/294/png-transparent-tweety-gangster-looney-tunes-character-gangsta-gun-weapon-mafia-boss-smoking.png', NULL),
(64, 'julio', 'julio@gmail.com', '$2b$10$yw29eKChl5MiPz5tg0g3Ie3f.780wOR6CXmbPZVPeH3l6VH3ueXES', '8754372312', 2, NULL, 1, 'Gómez', NULL, NULL, NULL, NULL),
(65, 'Juan', 'Juan@gmail.com', '$2b$10$aUeViK1isVR/o1RvtCNNj.a2R2tmnmSGIGoHfXIG7gpArsKXSYeXq', '12345', 2, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(66, 'yahir', 'yahirp@gmail.com', '$2b$10$NgCSGvBqrY6fIIA2TROZxu8UK14knLyTbqfIO7.LSv8PZrCc75h0K', '123', 2, NULL, 1, 'perez', NULL, NULL, NULL, NULL),
(67, 'usuarioejemplo', 'usere@gmail.com', '$2b$10$CsvmDos7tjfag3HNyr1vEu.alUQZTUoMb68BuWV6qEES936OhTTkS', '12345', 2, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(68, 'miguel', 'miguel@gmail.com', '$2b$10$SC8zM0uS3zjEvy7BjIHDEOu8RSirt7L.NfdnZVFB6fLfaPRNg0pt.', '12345', 2, NULL, 1, 'gomez', NULL, NULL, NULL, NULL),
(69, 'antonio', 'antonio@gmail.com', '$2b$10$13dh2MCRe7c3zydMUqERmeiZp8cH.L7koIswenXSKSUiMNRYBTiZu', '12345', 2, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(70, 'David', 'cendavid919@gmail.com', '$2b$10$IEQPR.X9HTVzi1F87wI5Y.sBH7t/yw98cr5lHNPMWCV74D.zTiP4e', '9971334404', 2, NULL, 1, 'Cen', '2024-10-17', '690f7aef7d32805079687b34f35d7645ff594963c395f440190275586e5a06de', 'https://res.cloudinary.com/dkdapj1br/image/upload/v1724217053/vlre0c5xlyoyd88p5ytl.jpg', NULL),
(71, 'nicol', 'nicol@gmail.com', '$2b$10$xBTcixs19eqJWeCUxsf3ku2jjzQgP78HGAeQfDjvGL1Pe1dtbfx7C', '9971345678', 3, NULL, 1, 'hernandez', NULL, NULL, NULL, NULL),
(74, 'nicol', 'hernandeznicol@gmail.com', '$2b$10$pdXkUUm15yxprpBW.kG3uuk.s1R68Fi7WfbmJ9Siv0N7I590jkFhe', '9971345678', 2, NULL, 1, 'hernandez', NULL, NULL, NULL, NULL),
(75, 'Edgar', 'edgar78@gmail.com', '$2b$10$8ydUIRaBp17wXy5TTYIFpeLyXkx/s8rY9AHO3sKAzKqzRjgWwE5gm', '9971324567', 3, NULL, 1, 'Mena', NULL, NULL, NULL, NULL),
(76, 'Edgar', 'edgarmena78@gmail.com', '$2b$10$HWSZGN7cCsWaH00bPIOZ8e4aUFLLyKy6f0FncQkLGy9o3FlrpWzZW', '9971324567', 3, NULL, 1, 'Mena', NULL, NULL, NULL, NULL),
(77, 'esli', 'esli@gmail.com', '$2b$10$94hV71uN/sM0oJU7YqndJOEPQ3ASO6NNYyD3U8vwgxer9FCaBeQO.', '9971426790', 3, NULL, 1, 'veja', NULL, NULL, NULL, NULL),
(78, 'bruno', 'bruno124@gmail.com', '$2b$10$cSkBxE8/Jqzr6FVm13ay2OALga1HPB0hA38A5t6uYYKFUFKFC0hlC', '9971456789', 3, NULL, 1, 'mars', NULL, NULL, NULL, NULL),
(79, 'Jose Gonzalo', 'gonzalo@gmail.com', '$2b$10$qlhuG48a/eRprY3rSi2wBODmm3FvY5Frgo5nMPtIIAxTfhcuPR07a', '97776996', 2, NULL, 1, 'Dzul', NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1724088416/lwviikvhihtaxadm33pp.jpg', NULL),
(80, 'roberto', 'roberto@gmail.com', '$2b$10$0A9A0JzicsKw.qtc1RviS.Wt3AunP1uIH5f86Xy9Dlg4OiLV/jJpy', '12345', 3, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(83, 'juan', 'juanlo@gmail.com', '$2b$10$zb9vm/.2G2kPycXGajnLcu1SfaLM0FDOKu04oNHfYK.bnOXH2Cera', '12345', 3, NULL, 1, 'lopez', NULL, NULL, NULL, NULL),
(84, 'Pepe chan', 'pepe@gmail.com', '$2b$10$E2LayiIZH3RIV8Gp7PI7bur8k/mw3YSbXQ5bKUmZkxo1Xxx69hgzS', 'dad', 2, NULL, 1, 'Can', NULL, NULL, NULL, NULL),
(85, 'ejemplonombre', 'ejemplocorreo@gmail.com', '$2b$10$JDrXn0fJOweag36hybksIer5EQKDxu1UwJCPn1a6s9k28DSW1tkFK', '12345', 3, NULL, 1, 'ejemploapellido', NULL, NULL, NULL, NULL),
(88, 'D', 'd@gmail.com', '$2b$10$w16MSFicteoeb/ATthFK7uoeK.3k4Edz7qEioR9Q8TEX7g3aXucUC', '9995169934', 3, NULL, 1, 'j', NULL, NULL, NULL, NULL),
(89, 'uuuu', 'bon@gmail.com', '$2b$10$wxb1OQK.XP0wBsQhnazoiuD846jjbfUNVtv9iBC3gVkV1EvyiejmS', '1234567890', 3, NULL, 1, 'ee', NULL, NULL, NULL, NULL),
(91, 'f', '6@gmail.com', '$2b$10$cbmV8/f6Q/Haa6CJ.Bz97.eK3Sh9pq9n6jkSsvc.NdBHYOrZDIpni', '1234567890', 2, NULL, 1, 'j', NULL, NULL, NULL, NULL),
(94, 'r', 'h@gmail.com', '$2b$10$4xjptus1hJg/a2oLNxOXmu/cteMBTjWwXEUmKOZmndH6ov6LRJJ6G', '1234567890', 2, NULL, 1, 'ee', NULL, NULL, NULL, NULL),
(96, 'hg', 'jg@gmail.com', '$2b$10$QDFnBVhLhmVF44ruNmuYMunlY7lW33Udrho9iua8y6ut5hcbzN8ke', '1234567890', 2, NULL, 1, 'ee', NULL, NULL, NULL, NULL),
(100, 'j', 'h1@gmail.com', '$2b$10$N8Wso1OeytzoFOrK48rtp.ssWNAU4Pc2jJlLIqjYU2fpIxcge3tvy', '1234567890', 2, NULL, 1, 'ee', NULL, NULL, NULL, NULL),
(101, 'j', 'e@gmail.com', '$2b$10$uBECOQuXvr9wYPSdtMvE0OH/12PuKhp4duYyMEp96AuopXog9UGS6', '1234567890', 2, NULL, 1, 'ee', NULL, NULL, NULL, NULL),
(103, 'u', 'u@gmail.com', '$2b$10$WYRyHiShHqDhQ4..QgHid.UwX9BRAfMDdf/r15zFOZEEmxJyx5AxW', '1234567890', 2, NULL, 1, 'e', NULL, NULL, NULL, NULL),
(107, 'xd', 'xd12@gmail.com', '$2b$10$Q8l9csuVTPg.c2Qbaul2gOyYk1V39SrXFZ5Ip.B96n8a1JsCNshe2', '12345', 3, NULL, 1, 'xd', NULL, NULL, NULL, NULL),
(108, 'Chritian', 'christian@gmail.com', '$2b$10$C3u/4pl9UNH0Ksv3JJLhK.3EL84.UnrPxHtcE1Je7xJDUdRbReLxO', '9999999', 3, NULL, 1, 'Yahir', NULL, NULL, NULL, NULL),
(109, 'Prueba o', 'pruebao99@ggmail.com', '$2b$10$jLC/UVZ1yXb9e.2sNPeVjeKSCazlhEDD9zoCZ/fplcJKpsaOyINjy', '999999999', 2, NULL, 1, 'prueba', NULL, NULL, NULL, NULL),
(110, 'mario', 'gonzalo6@gmail.com', '$2b$10$MSgeukg412YMaHyjrgyJ2O9p/eDl3jP3NoOIhYiPI6TsCuHGMBVjm', '1234567890', 2, NULL, 1, 'hernandez', NULL, NULL, NULL, NULL),
(111, 'mario', 'gonzalouc6@gmail.com', '$2b$10$6kxb5BfjPpdiUh91AD9RAOb0qFmsPyUhbU/PBlkyAEi0DiYOsS/Se', '1234567890', 2, NULL, 1, 'Bross', NULL, NULL, NULL, NULL),
(112, 'mario', 'mario@gmail.com', '$2b$10$VzQssH0KLbNvjEK9W/7iMeHoqBXieB8ejdA4UTl1X1uncPH.0stpq', '1234567890', 2, NULL, 1, 'Brosstr', NULL, NULL, NULL, NULL),
(113, 'mario', 'mario@123gmail.com', '$2b$10$.L0TJIBKErYL7Nmg3M12xu3jdi/A7JgdHdL9r4JG6S0DXhS4quyPO', '1234567890', 3, NULL, 1, 'Brosster', NULL, NULL, 'https://www.pngkit.com/png/detail/888-8880443_personas-png.png', NULL),
(116, 'Alan alejando', 'mendez@gmail.com', '$2b$10$tL8ImNXsm6/EqFIweafzR.eV70j/GCXINirvB1Hl2/BA1o644fsUa', '9998887651', 2, NULL, 1, 'Méndez perez', NULL, NULL, NULL, NULL),
(117, 'joseliz', 'joseliz@gmail.com', '$2b$10$GYhvjH9rgy7CLstqsk2jquKuO04yoNprYoMAg/1rg/jNMlUSOmnK.', '1234567890', 3, NULL, 1, 'ee', NULL, NULL, 'https://www.pngkit.com/png/detail/888-8880443_personas-png.png', NULL),
(118, 'mario', 'mario123@gmail.com', '$2b$10$tV3qgv0wMKvQ4.fk3nNo4.C4mdxeKbNiQnseUw92N0fw.8p/I0hyS', '1234567890', 3, NULL, 1, 'Brosstr', NULL, NULL, 'https://www.pngkit.com/png/detail/888-8880443_personas-png.png', NULL),
(119, 'mario', 'mario12324@gmail.com', '$2b$10$YxhGknaRtO5.H9qpjtx2aeJk1bN0oH.DZG0y/2mC.O1OiIbjKq8lW', '1234567890', 3, NULL, 1, 'franco', NULL, NULL, 'https://www.pngkit.com/png/detail/888-8880443_personas-png.png', NULL),
(120, 'marta', 'dianitza026@gmail.com', '$2b$10$KFveqHDB80tF22oruUmbIuDKUI7em7zr6oZTrz7yHPB4xDvgJ9XF6', '1234567890', 3, NULL, 1, 'Ernandez', NULL, NULL, 'https://flyclipart.com/thumbs/free-women-pointing-left-images-transparent-free-women-photo-commercial-use-1217032.png', NULL),
(121, 'chalog', 'chalog@gmail.com', '$2b$10$JdGLhmyYmsQGqqrA.BLBrOc24rii0XzdheYou2o1HsjYSKvhaEflC', '12345', 2, NULL, 1, 'ejemolo', NULL, NULL, NULL, NULL),
(123, 'Germán ', 'germansima28@gmail.com', '$2b$10$ODyhOacbcZz3CRjiKRJ1wuOri0.jr85t2cmlKkhQYfMa73oxRCEdK', '9961051496', 2, 2, 1, 'Sima', NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhF1XTWHbXNPlG7KhjRnYDvjiVa-N_j_nY4c-Itp6Di1FmmzYBBy791uU&s=10', NULL),
(129, 'bronco', 'rivas@gmail.com', '$2b$10$RpLJV.P.XYkh/oK.KsyDe.5VNl7oHf4hsNZeaqr4ZB326geRdABG6', '12345678', 3, NULL, 1, 'Rivas', NULL, NULL, NULL, NULL),
(141, 'ojeda', 'rivasojeda@gmail.com', '$2b$10$JEWbv.V4Mi9ZNr6zjl0AvO4.uytGlfBnRHfhUjUyZcQy80fHUAMBS', '12345678', 3, NULL, 1, 'Rivas', NULL, NULL, NULL, NULL),
(142, 'adner', 'adner@gmail.com', '$2b$10$QtOg9s3lmlO3AQ3SF7U45.wMKFOHTK7SpkPEqMF7qHMw6IoKBv4jS', '1234567890', 2, NULL, 1, 'sanchez', NULL, NULL, NULL, NULL),
(143, 'Irvin', 'irvinvazquez422@gmail.com', '$2a$10$gKwaADYyn7eVRXTJzmJFGOSS6LuEVzKVwPfoyObqGBSXWMPMQi8J2', '555-1234', 3, NULL, 1, 'Vazquez', NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1723145308/w5hr0isjswnjwcp6kr5x.jpg', NULL),
(145, 'jesus', 'jv343061@gmail.com', '$2a$10$OTTbHSKDAT8RV0A9jukHT.OYKw63TaZZx3u2HwPAMcMkUHwdn6TOO', '555-1234', 3, NULL, 1, 'Vazquez', NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1723133157/is1re93l1tecdwgkuurn.png', NULL),
(146, 'irvin', 'jv3430614@gmail.com', '$2a$10$9v7/dYwGOJJDOJuqcAyE3eux1Kxm4Bm8UXHL8OBPOY4hwP60C4brC', '9991099665', 2, NULL, 1, 'vasques', NULL, NULL, NULL, NULL),
(147, 'irvin', 'jv343062@gmail.com', '$2a$10$dAI/7QcqGZE7laCiaHGf1.w5CyngpKjOxcP6X4CLEWqDRD3itbUk2', '9991099665', 2, NULL, 1, 'vasques', NULL, NULL, NULL, NULL),
(148, 'irvin', 'jv343065@gmail.com', '$2a$10$c.N7tRGxQCSVs0KdDUIyu.IxKdDxRpSG7RdPQdS/aE0on9vqsy05u', '9991099665', 2, NULL, 1, 'vasques', NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1723146175/pzab7hh1sdgh1iqreg29.jpg', NULL),
(149, 'maximo', 'jv343069@gmail.com', '$2a$10$WKCErioTSVtDlSR/3kEjg.vs2cJfXqyerlKK1EZW2KGhFQ6yfZC1m', '9991099665', 2, NULL, 1, 'vasques', NULL, NULL, NULL, NULL),
(150, 'irvin', 'jv3430698@gmail.com', '$2a$10$dWBJahnnNykO7GAY3QL/GuALvZs0QC7jbXXWQApFxs4pmxabzp7.G', '9991099665', 2, NULL, 1, 'vasques', NULL, NULL, NULL, NULL),
(151, 'ana', 'jv3461@gmail.com', '$2a$10$Ep4R94OJeQDvnY9ODpE9zuxIHAjt5SxSpWKji3O2uTwhTmIR6M84i', '9991099665', 2, NULL, 1, 'suarez', NULL, NULL, NULL, NULL),
(152, 'joan', 'jv3@gmail.com', '$2a$10$gGsUzicqTwKHR4SZiGRXk.QKyiCssh5HQf8ya1ZJa9/gNil2OVVPy', '9991099665', 2, NULL, 1, 'vasques', NULL, NULL, NULL, NULL),
(153, 'irvin', 'example@gmail.com', '$2a$10$VPO8158hwNMEcaS0Zhj8EeQXmWXk9GbwXO38aKvufNqnRmHE8Y36y', '9991099665', 2, NULL, 1, 'vasques', NULL, NULL, NULL, NULL),
(155, 'jose', 'example98@gmail.com', '$2a$10$Z/ILO8zQUTMVp1pQ.HZKjeKHQlF5or96EN0u2La7GuqVT0/0e2bZG', '9991099665', 2, NULL, 1, 'vasques', NULL, NULL, NULL, NULL),
(156, 'juan', 'jv988@gmail.com', '$2a$10$IZIkd3GvZeuGvVqdIOSICugPfwz6ALyqqdOyPqVc1y4w2gQ/zluTC', '9991099665', 2, NULL, 1, 'vasques', NULL, NULL, NULL, NULL),
(158, 'maximo', 'j061@gmail.com', '$2a$10$a0YzUkB36MOoCETwswvrQu8U8QPYez07DO.h47chFGvcel9lEI2MK', '9991099665', 2, NULL, 1, 'vasques', NULL, NULL, NULL, NULL),
(159, 'juan', 'perro1@gmail.com', '$2a$10$3PoCp1XY3DK/SmTszjDUheKCANBc7JKsVEriOb/Mm.eIVRFjcC1z2', '9991099665', 2, NULL, 1, 'vasques', NULL, NULL, NULL, NULL),
(160, 'juan', 'pat@gmail.com', '$2a$10$kl6WU1j8t6OpOe3oiXU/MewKcuIM.9qAMTQ3ERH4K2MMZW/EytnE.', '9991099665', 2, NULL, 1, 'vasques', NULL, NULL, NULL, NULL),
(161, 'pancho', 'pancho1@gmail.com', '$2a$10$9dF4ucLZTeMlXgBgaglia.41tAEAS47at2RPH65IEBmmWJLhdGbAK', '9991099665', 2, NULL, 1, 'vasques', NULL, NULL, NULL, NULL),
(162, 'jesus', 'pqa@gmail.com', '$2a$10$aT7EdEtQydmKMyxDrY1BVOqsxXRhaCKIwcO.OjNDwmVTJATfSk7.W', '9991099665', 2, NULL, 1, 'suarez', NULL, NULL, NULL, NULL),
(163, 'paola', 'hernan1@gmail.com', '$2a$10$KD1iThOVv8MaI1K4fh4JQuY6k1Sf80MbKHoq.d3f7r6uTAEz6jiB2', '9991099665', 2, NULL, 1, 'suarez', NULL, NULL, NULL, NULL),
(164, 'nana', 'nana@gmail.com', '$2a$10$sM8ykrhZN7cANTaF0EbyNOELgYv2o3Q6UNaNSC/BrUK2WORaFM34O', '9991099665', 2, NULL, 1, 'vasques', NULL, NULL, NULL, NULL),
(165, 'hernan', 'hola1@gmail.com', '$2a$10$x9hDzuoUoO5oW0kDE0/QsejM/sf6uB2IsU0tarMVlsncSwxcbIN96', '9991099665', 2, NULL, 1, 'vasques', NULL, NULL, NULL, NULL),
(166, 'prueba pagos', 'pagos66@gmail.com ', '$2b$10$2E3Pj6OVEz06iN.9t8PrxOqotLATEhYQZ2cTnQ4rVomKpHb.Z10Ne', '9999887766', 3, NULL, 1, 'pagos', NULL, NULL, NULL, NULL),
(167, 'prueba pagos', 'pagos10@gmail.com', '$2b$10$xsKwcZwd3k5uckTEJBi2eOt6XD4V42bxsCHGjMOrF4K7/ciHvKyfe', '9999887766', 3, NULL, 1, 'pagos', NULL, NULL, NULL, NULL),
(171, 'German ', 'germansima8@gmail.com', '$2b$10$9T86BpZFZZQEa7gES6mk9e55dLbfrnQWoPZWy6D0mOU8QRQ2GBir.', '9961051496', 2, NULL, 1, 'Sima', NULL, NULL, NULL, NULL),
(172, 'lalo', 'lalo@gmail.com', '$2b$10$PnO3g5WZKfw4j9YODpUsEubiDtwDxYxPQvsEwqlV/BcRTJr88jrJO', '12345', 2, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(173, 'Antonio', 'antoniop8@gmail.com', '$2b$10$Svg25Df77IFgjDZOvihPSuEsXreAeyZrIP6C.OU0V4zFpNJFX9zya', '12345', 2, NULL, 1, 'perez', NULL, NULL, NULL, NULL),
(174, 'Ismael', 'ismael@gmail.com', '$2b$10$HF9sVMSMXedH3Qza9wNQh.B0h3u19VmY9iOXZGQbhnFmYJXPqUMrK', '12345', 2, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(175, 'Brandon', 'brandon@gmail.com', '$2b$10$Z.M0OqPL9ZTrHpEkovxZYeZWnQOdM4F4HPjYIDGpmuU/x3LWILuSa', '12345', 2, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(176, 'ejemploregistro', 'ejemplore@gmail.com', '$2b$10$bu.wq.5x/Arv6Aixo6PAH.7hAZ2XeoTix10juXpBWFc1mLCsaKB2u', '12345', 2, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(178, 'xd', 'xdre@gmail.com', '$2b$10$E2QKi.n04BLYsgpNoohWQex/pchROtfFGzAx1cu3tN7vPJwzzstz.', '12345', 2, NULL, 1, 'xd', NULL, NULL, NULL, NULL),
(179, 'prueba87', 'prueba87@gmail.com', '$2b$10$dkiFhpQoNiOCvqsgblk91enk6hrJFGxAtRkrn9chMiUJtmzYKFKq6', '8877665544', 2, NULL, 1, 'pruebas', NULL, NULL, NULL, NULL),
(180, 'prueba87', 'prueba92@gmail.com', '$2b$10$cB0ah2R8nm5.RyJodsdyROb75Ax3T.CMwIo6FXMBsDQCFcxdJZiCa', '8877665544', 3, NULL, 1, 'pruebas', NULL, NULL, NULL, NULL),
(185, 'Christian', 'christianChan@gmail.com', '$2b$10$K2QOWQyf6ktiWGefMPxZh.j88pvqtsN.8KiuvoDRI3/1wGB4pPhmu', '9999999999', 3, NULL, 1, 'Chan', NULL, NULL, NULL, NULL),
(186, 'Alonso', 'alonso@gmail.com', '$2b$10$mmpRwq5hojlvozTc2Dw6R.HMy95HfSgJm70tZSw8vRkx7DWgdNT4S', '12345', 3, NULL, 1, 'perez', NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1723231849/m4cmlqnxcifgfheav5ty.jpg', NULL),
(187, 'AlonsoE', 'alonsoe@gmail.com', '$2b$10$qELa/DBxbox9QhLfxQg4f.4AzCdgqNXFyf0zjUfC29Ss7LAZYJslu', '12345', 3, NULL, 1, 'perez', NULL, NULL, NULL, NULL),
(188, 'AlonsoEA', 'alonsoea@gmail.com', '$2b$10$7ot0QhW..2.Qcn2p1ghgPukTsezz4M7VV3lzBdDtmoqhKFLUtPXce', '12345', 3, NULL, 1, 'ejemplo', NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1723232968/ldl31byfbuwvak1wwmj1.jpg', NULL),
(189, 'Alonsoq', 'alonso1@gmail.com', '$2b$10$fZFUXyrlxrjnXPO6avJFreci8dAQlYKsQ/PG6R/QkYt5uLN9U1N5G', '12345', 3, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(190, 'Samuel de Jesús', 'samuejemplo@gmail.com', '$2b$10$w/ya9fBpm7dKKuJ6ObzZheyzHuKBJZgk.6oi3jODc9aXThzkonRX2', '12345', 2, NULL, 1, 'pech', NULL, NULL, 'https://images.hdqwalls.com/download/goku-dragon-ball-super-anime-5k-2a-2048x2048.jpg', NULL),
(194, 'oscara', 'oscaral@gmail.com', '$2b$10$r7k6yy0cq/JX1df6dL./YepbMLAyC9IKKgaGVSXc9CUXH8cBt0e7m', '12345', 2, NULL, 1, 'alonso', NULL, NULL, NULL, NULL),
(195, 'ejempplo200', 'ejemplo200@gmail.com', '$2b$10$qmzPP4bX292YmYeO5lQrr.C1HfksmQrKHAiiyknqdWus26EdfrYfq', '12345', 2, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(196, 'joel', 'joel@gmail.com', '$2b$10$99Nok6WDOdfX0aD.2QNLzuO7AIExu7pBlcHAAHC25dnjGqDEhBKx6', '12345', 2, NULL, 1, 'joel', NULL, NULL, NULL, NULL),
(197, 'ejempo500', 'ejemplo500@gmail.com', '$2b$10$.2RX/Nn4KHnBqG2HZcukj.Bnm8xcKlrMxxCQdq6wXlPsKbVvWkuk6', '12345', 2, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(198, 'ejemplo700', 'ejemplo70@gmail.com', '$2b$10$qm1PTN07cntlZHf4qpw/Ie5X1Q4qABXHUocLAs2yKRL8r8w5acRCe', '12345', 2, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(199, 'ejemplo90', 'ejemplo90@gmail.com', '$2b$10$qjs0Aj2gLk4CgHHmYq9nCuqkt78VfdPlh4rU..FTVpZKHvpTqnK3i', '12345', 2, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(200, 'ejemplo10', 'ejemplo10@gmail.com', '$2b$10$G1Y4L4DrnbpO3iV0oDs.LOW/pO77kwgNOX.F.6k29iPyxyUn7eC6q', '12345', 2, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(201, 'ejemplo15', 'ejemplo15@gmail.com', '$2b$10$koi.6Cwa5jB2JQ67d.cc6uej7K/mG9v6n8Kys8mJAtCLrq2sVLod6', '12345', 2, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(202, 'ejemplo20', 'ejemplo20@gmail.com', '$2b$10$902kirMSGhFzHV/MG53eNeBCGCSA2RqPKKj1YL/AzZvqWIpHMxs8K', '12345', 2, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(203, 'ejemplo19', 'ejemplo19@gmail.com', '$2b$10$6GgsJsnP16i.DOV6c7qeBecWHd2sTmngxTSf2C7vYQQRlXp9Iskke', '12345', 2, NULL, 1, 'ejemplo', NULL, NULL, NULL, NULL),
(204, 'dar', 'a@gmail.com', '$2b$10$bUJsEZVYx2ucsaYhZX3hT.KDLrgr.pILnYKcOeVy.aQmXKQbvNKWe', '9999999999999', 2, NULL, 1, 'dot', NULL, NULL, NULL, NULL),
(205, 'a', 'a1@gmail.com', '$2b$10$97Xk5siGa3/vShwawDhrPO2/AIQ6kVHqinIPas6f5buztZnNCbB5.', '9999999', 2, NULL, 1, 'a', NULL, NULL, NULL, NULL),
(206, 'registronuevo', 'registronuevo@gmail.com', '$2b$10$knmxAqdOe7VNG8j5pjXj3uoed2flgY1EutqM9Wsdq10PxIiL2366W', '12345', 2, NULL, 1, 'registro', NULL, NULL, NULL, NULL),
(210, 'Paulina', 'organizador09@gmail.com', '$2b$10$lTGX7q/0i.EYC5uU9wzVNuL/wxQ.qvcGcBDTAEa/wbXjYSYm9rMsS', '9998765423', 2, NULL, 1, 'Prueba', NULL, NULL, NULL, NULL),
(215, 'Jose ', 'jchimoo789@gmail.com', '$2b$10$kkKGmpJn41y9605duC5dkOg4Gmff3pf2OZ9R6VdiQ/cjMmhdQVCTq', '997123456799', 2, NULL, 1, 'chi', NULL, NULL, NULL, NULL),
(226, 'j', 'jc@gmail.com', '$2b$10$4odeveULtsFPobFkR7doj.mlpxifc9QX3zXpz2kaXXGaNNMZ2GCEq', '9971425599', 2, NULL, 1, 'c', NULL, NULL, NULL, NULL),
(227, 'El Mas Capito', 'elmascapito@gmail.com', '$2b$10$kBtYtfSzyZ20BASKSN5hc.a2cRuiDu68IIwnNsGgeXnM0MpBkHYYS', '182863863', 2, NULL, 1, 'Obvio', NULL, NULL, NULL, NULL),
(228, 'pedro', 'pedro@gmail.com', '$2b$10$ykHnml1bbCa9wYCv5uY3u.3jvIqOBwC2pLv18VQhub4rh0K5qP89a', '1234567890', 2, NULL, 1, 'pablo', NULL, NULL, NULL, NULL),
(229, 'Santiago', 'cendavid6@gmail.com', '$2b$10$yQtivJDsbhMGOik7Q4usruruMsFNh3zSOq.IZO2EDxbdGgkmiaioi', '9992986081', 1, NULL, 1, 'Pool', NULL, NULL, NULL, NULL),
(230, 'jose', 'jchimoo78@gmail.com', '$2b$10$feVbA7G8zdJQkuhB7QFZm.xInsUio8ZhdPfRQYL9Rq3ICJkCTH1oS', '9971425599', 2, NULL, 1, 'chi', NULL, NULL, NULL, NULL),
(231, 'German', 'josegermansima100@gmail.com', '$2b$10$A3JrVVHcRYRBOb.vAqzR/Om/D88K3s23IHiCw/N3sGQqIIsRPExzy', '9961051496', 2, NULL, 1, 'Garmendia', NULL, NULL, 'null', NULL),
(232, 'nose', 'elmascapito2', '$2b$10$mgtjkXUkNbZnSiqXNkRXSeczOy0xQVYgy963XSNU4Zlk2Tf16iG3W', '82827272', 2, NULL, 1, 'elmascapito2', '2024-08-23', '580f0d0be76e2605e0821392efcf766e9f8ce8998ad42c50529660a19debb516', '/data/user/0/com.example.digital_event_hub/app_flutter/1000006514.jpg', NULL),
(233, 'alberto', 'rowanojedakumul@gmail.com', '$2b$10$1UbKmMzvL9q.Fcwm1drHXeO5h67QKRs4ZlhvHOOukfpmDbSMFiwTq', '99888182737', 2, NULL, 1, 'hesus', NULL, NULL, 'https://res.cloudinary.com/dkdapj1br/image/upload/v1724355366/mjlxq3kso3knbk1hhf2i.jpg', NULL),
(234, 'YisusPro', 'yisusadmin123@gmail.com', '$2b$10$FlHViG8dudDBpUtNwWpUcegPXZphtEaON7USCy2HP4Dfe/mulRxQa', '123456', 3, 19, 1, 'La cabra', NULL, NULL, NULL, '2025-07-18 01:13:55'),
(235, 'Paolo', 'yisussuperadmin@gmail.com', '$2b$10$pMsRvmeqOR35GYY7I2WGLOSFcQPChgBz50793uWvNBraGmJI8Pa2q', '23232', 1, 2, 1, 'Pro', NULL, NULL, NULL, NULL),
(236, 'yisuscliente@gmail.com', 'yisuscliente@gmail.com', '$2b$10$3KmSX11T9w1Blt0B9Gj15uqTU0l6RlwNFiIOuUGygrfF9Nc1OZwOa', '123123123', 3, 3, 1, 'yisuscliente@gmail.com', NULL, NULL, NULL, NULL),
(237, 'test1000', 'test1000@gmail.com', '$2b$10$4QMPK7Np0qDcmAvXV4hcku/QzgHzNYEWc2ZJxqBOsoUJmlpSN0nQW', '12121', 3, 3, 1, 'test1000', NULL, NULL, NULL, NULL),
(238, 'nosejajja', 'nosej@gmail.com', '$2b$10$VJjDJTJo18XzFRg84FxR9uklB1XI3r3oeaUlhBk0rsk1Jz/s48YoG', '122132', 2, NULL, 1, 'nosejajja', NULL, NULL, NULL, NULL),
(240, 'Pepe', 'ppgmez@gmail.com', '$2b$10$Za1PiJFfZB9i3Av5YuFY4eQz6JGSqpvPMKsH9scHVWAnr04k9U2cC', '9892039944', 2, NULL, 1, 'Gomez', NULL, NULL, NULL, NULL),
(241, 'Camus', 'rekek96657@ofionk.com', '$2b$10$wtgCYW/QF6jQfpqW5zTaneHXgss2OivfmQpFElS7D5mWAthytRC4O', '9996181422', 2, NULL, 1, 'Pruebas', NULL, NULL, NULL, NULL),
(242, 'jose', 'jose@ 156gmail.com', '$2b$10$bDrSZMJkijs5lgX5/PgOWu7uWBi7Mk4sOtxI8uR2wDnbj3HfRSx2W', '1234567890', 2, NULL, 1, 'dzul', NULL, NULL, NULL, NULL),
(243, 'toby', 'toby@gmail.com', '$2b$10$0zi6dPyTup4seKKAUXjxBOrggmESAYG.hZ.h51wK86zT5ar4goJuu', '12233', 3, 19, 1, 'yb', NULL, NULL, NULL, '2025-07-18 03:32:16'),
(246, 'juan de jesus', 'juandejedus@gmail.com', '$2b$10$T7IucuDqs8NMzn3.h5Ixdu9Fe1x5uakh6HzvFQZXA.8NFWQX3nXPK', '23456789012', 2, NULL, 1, 'pepe', NULL, NULL, '/data/user/0/com.example.digital_event_hub/app_flutter/1000001804.png', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_membresias`
--

CREATE TABLE `usuario_membresias` (
  `id_usuario_membresia` int NOT NULL,
  `id_usuario` int DEFAULT NULL,
  `id_membresia` int DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT CURRENT_TIMESTAMP,
  `fecha_fin` datetime DEFAULT NULL,
  `nombre_plan` varchar(100) DEFAULT NULL,
  `confirmacion_compra` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario_membresias`
--

INSERT INTO `usuario_membresias` (`id_usuario_membresia`, `id_usuario`, `id_membresia`, `fecha_inicio`, `fecha_fin`, `nombre_plan`, `confirmacion_compra`) VALUES
(2, 143, 5, '2024-08-08 15:15:45', '2024-12-31 23:59:59', 'Plan Básico', 1),
(4, 145, 5, '2024-08-08 15:39:16', '2024-08-06 23:59:59', 'Plan Básico', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `validacion`
--

CREATE TABLE `validacion` (
  `validacion_id` int NOT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `comentarios` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `validacion`
--

INSERT INTO `validacion` (`validacion_id`, `estado`, `comentarios`) VALUES
(1, 'Aprobado', 'Validado por el sistema.'),
(2, 'Pendiente', 'En espera de revisión.'),
(3, 'Rechazado', 'No cumple con los requisitos.');

-- --------------------------------------------------------

--
-- Estructura para la vista `ticket_event_view`
--
DROP TABLE IF EXISTS `ticket_event_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`ug2pwvx9bo99xznl`@`%` SQL SECURITY DEFINER VIEW `ticket_event_view`  AS SELECT `t`.`ticket_id` AS `ticket_id`, `t`.`code` AS `code`, `t`.`status` AS `status`, `h`.`hora_inicio` AS `hora_inicio`, `h`.`hora_fin` AS `hora_fin`, `e`.`nombre` AS `evento_nombre`, `e`.`ubicacion` AS `ubicacion`, `e`.`descripcion` AS `descripcion`, `e`.`evento_id` AS `evento_id` FROM ((`tickets` `t` join `horarios` `h` on((`t`.`id_horario` = `h`.`horario_id`))) join `eventos` `e` on((`h`.`evento_id` = `e`.`evento_id`))) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asientos`
--
ALTER TABLE `asientos`
  ADD PRIMARY KEY (`asiento_id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `fk_escenario` (`escenario_id`);

--
-- Indices de la tabla `asistentes`
--
ALTER TABLE `asistentes`
  ADD PRIMARY KEY (`asistente_id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `evento_id` (`evento_id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`categoria_id`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`comentario_id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `evento_id` (`evento_id`);

--
-- Indices de la tabla `errores_logs`
--
ALTER TABLE `errores_logs`
  ADD PRIMARY KEY (`log_id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `escenario`
--
ALTER TABLE `escenario`
  ADD PRIMARY KEY (`escenario_id`),
  ADD KEY `evento_id` (`evento_id`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`evento_id`),
  ADD KEY `organizador_id` (`organizador_id`),
  ADD KEY `categoria_id` (`categoria_id`),
  ADD KEY `fk_eventos_autorizado_por` (`autorizado_por`),
  ADD KEY `fk_validacion_id` (`validacion_id`);

--
-- Indices de la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`horario_id`),
  ADD KEY `evento_id` (`evento_id`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`imagen_id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `evento_id` (`evento_id`);

--
-- Indices de la tabla `membresia`
--
ALTER TABLE `membresia`
  ADD PRIMARY KEY (`membresia_id`);

--
-- Indices de la tabla `notificaciono`
--
ALTER TABLE `notificaciono`
  ADD PRIMARY KEY (`notificacion_id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`pago_id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `evento_id` (`evento_id`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`permiso_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`rol_id`);

--
-- Indices de la tabla `roles_permisos`
--
ALTER TABLE `roles_permisos`
  ADD PRIMARY KEY (`rol_id`,`permiso_id`),
  ADD KEY `permiso_id` (`permiso_id`);

--
-- Indices de la tabla `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`ticket_id`),
  ADD KEY `id_horario` (`id_horario`),
  ADD KEY `fk_pago` (`pago_id`);

--
-- Indices de la tabla `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`token_id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuario_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `rol_id` (`rol_id`),
  ADD KEY `membresia_id` (`membresia_id`);

--
-- Indices de la tabla `usuario_membresias`
--
ALTER TABLE `usuario_membresias`
  ADD PRIMARY KEY (`id_usuario_membresia`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_membresia` (`id_membresia`);

--
-- Indices de la tabla `validacion`
--
ALTER TABLE `validacion`
  ADD PRIMARY KEY (`validacion_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asientos`
--
ALTER TABLE `asientos`
  MODIFY `asiento_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=336;

--
-- AUTO_INCREMENT de la tabla `asistentes`
--
ALTER TABLE `asistentes`
  MODIFY `asistente_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `categoria_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `comentario_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de la tabla `errores_logs`
--
ALTER TABLE `errores_logs`
  MODIFY `log_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `escenario`
--
ALTER TABLE `escenario`
  MODIFY `escenario_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `evento_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT de la tabla `horarios`
--
ALTER TABLE `horarios`
  MODIFY `horario_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `imagen_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT de la tabla `membresia`
--
ALTER TABLE `membresia`
  MODIFY `membresia_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `notificaciono`
--
ALTER TABLE `notificaciono`
  MODIFY `notificacion_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `pago_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=174;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `permiso_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `rol_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tickets`
--
ALTER TABLE `tickets`
  MODIFY `ticket_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tokens`
--
ALTER TABLE `tokens`
  MODIFY `token_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuario_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=248;

--
-- AUTO_INCREMENT de la tabla `usuario_membresias`
--
ALTER TABLE `usuario_membresias`
  MODIFY `id_usuario_membresia` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `validacion`
--
ALTER TABLE `validacion`
  MODIFY `validacion_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asientos`
--
ALTER TABLE `asientos`
  ADD CONSTRAINT `Asientos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_escenario` FOREIGN KEY (`escenario_id`) REFERENCES `escenario` (`escenario_id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `asistentes`
--
ALTER TABLE `asistentes`
  ADD CONSTRAINT `Asistentes_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Asistentes_ibfk_2` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`evento_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `Comentarios_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Comentarios_ibfk_2` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`evento_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `errores_logs`
--
ALTER TABLE `errores_logs`
  ADD CONSTRAINT `Errores_Logs_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `escenario`
--
ALTER TABLE `escenario`
  ADD CONSTRAINT `Escenario_ibfk_1` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`evento_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD CONSTRAINT `Eventos_ibfk_2` FOREIGN KEY (`organizador_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Eventos_ibfk_4` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`categoria_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_eventos_autorizado_por` FOREIGN KEY (`autorizado_por`) REFERENCES `usuarios` (`usuario_id`),
  ADD CONSTRAINT `fk_validacion_id` FOREIGN KEY (`validacion_id`) REFERENCES `validacion` (`validacion_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD CONSTRAINT `horarios_ibfk_1` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`evento_id`);

--
-- Filtros para la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD CONSTRAINT `Imagenes_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Imagenes_ibfk_2` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`evento_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `notificaciono`
--
ALTER TABLE `notificaciono`
  ADD CONSTRAINT `NotificacionO_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`);

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `Pagos_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Pagos_ibfk_3` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`evento_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `roles_permisos`
--
ALTER TABLE `roles_permisos`
  ADD CONSTRAINT `Roles_Permisos_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`rol_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Roles_Permisos_ibfk_2` FOREIGN KEY (`permiso_id`) REFERENCES `permisos` (`permiso_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `fk_pago` FOREIGN KEY (`pago_id`) REFERENCES `pagos` (`pago_id`),
  ADD CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`id_horario`) REFERENCES `horarios` (`horario_id`);

--
-- Filtros para la tabla `tokens`
--
ALTER TABLE `tokens`
  ADD CONSTRAINT `Tokens_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `Usuarios_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`rol_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Usuarios_ibfk_2` FOREIGN KEY (`membresia_id`) REFERENCES `membresia` (`membresia_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario_membresias`
--
ALTER TABLE `usuario_membresias`
  ADD CONSTRAINT `fk_Usuario_Membresias_Membresia` FOREIGN KEY (`id_membresia`) REFERENCES `membresia` (`membresia_id`),
  ADD CONSTRAINT `fk_Usuario_Membresias_Usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`usuario_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
