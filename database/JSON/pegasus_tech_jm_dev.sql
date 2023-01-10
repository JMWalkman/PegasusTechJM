CREATE DATABASE  IF NOT EXISTS `pegasus_tech_jm_dev` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `pegasus_tech_jm_dev`;
-- MariaDB dump 10.19  Distrib 10.4.27-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: pegasus_tech_jm_dev
-- ------------------------------------------------------
-- Server version	10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Portátiles'),(2,'PC de mesa'),(3,'Monitores'),(4,'Periféricos');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturers`
--

DROP TABLE IF EXISTS `manufacturers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manufacturers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `manufacturer` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturers`
--

LOCK TABLES `manufacturers` WRITE;
/*!40000 ALTER TABLE `manufacturers` DISABLE KEYS */;
INSERT INTO `manufacturers` VALUES (1,'AMD'),(2,'Intel'),(3,'Nvidia'),(4,'Asus'),(5,'HP'),(6,'Lenovo'),(7,'Apple'),(8,'Dell'),(9,'Keychron');
/*!40000 ALTER TABLE `manufacturers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_lines`
--

DROP TABLE IF EXISTS `product_lines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_lines` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `manufacturer_id` int(11) DEFAULT NULL,
  `line` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_lines`
--

LOCK TABLES `product_lines` WRITE;
/*!40000 ALTER TABLE `product_lines` DISABLE KEYS */;
INSERT INTO `product_lines` VALUES (1,1,'Ryzen'),(2,1,'Radeon RX'),(3,2,'12th Gen'),(4,2,'11th Gen'),(5,2,'10th Gen'),(6,3,'RTX'),(7,3,'GTX'),(8,7,'Mac Mini'),(9,7,'MacBook Air'),(10,7,'MacBook Pro'),(11,7,'iMac'),(12,9,'K1'),(13,9,'K2'),(14,9,'K3'),(15,9,'K5');
/*!40000 ALTER TABLE `product_lines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `line_id` int(11) DEFAULT NULL,
  `variation` varchar(30) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `description` bigint(20) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `stock` bigint(20) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `images` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,6,'Avalanche 2500',1,0,9167741,87,71,8,'defaultProductImage.png'),(2,14,'Sierra 1500',3,0,360339,57,31,3,'defaultProductImage.png'),(3,13,'Spyder',1,0,4854949,82,37,5,'defaultProductImage.png'),(4,6,'Viper',1,0,2892512,63,344,2,'defaultProductImage.png'),(5,4,'MP4-12C',4,0,7266582,78,237,10,'defaultProductImage.png'),(6,3,'Montero',3,0,8021722,59,215,2,'defaultProductImage.png'),(7,14,'Prelude',2,0,3609219,17,380,4,'defaultProductImage.png'),(8,3,'Journey',2,0,7328653,8,209,3,'defaultProductImage.png'),(9,11,'IS',2,0,7044536,85,441,8,'defaultProductImage.png'),(10,6,'Jetta',4,0,3477949,8,18,0,'defaultProductImage.png'),(11,14,'Yaris',4,0,1467529,54,384,3,'defaultProductImage.png'),(12,1,'XK Series',1,0,9182651,32,405,8,'defaultProductImage.png'),(13,2,'Yukon',2,0,882739,42,250,1,'defaultProductImage.png'),(14,15,'M6',1,0,7016812,80,206,4,'defaultProductImage.png'),(15,7,'Sierra 3500',2,0,6743875,81,379,8,'defaultProductImage.png'),(16,13,'Challenger',2,0,2437914,14,4,0,'defaultProductImage.png'),(17,7,'Prius Plug-in',2,0,6210055,3,481,8,'defaultProductImage.png'),(18,7,'Tempo',4,0,5439516,21,412,8,'defaultProductImage.png'),(19,6,'LS',1,0,8732380,34,487,9,'defaultProductImage.png'),(20,13,'600',3,0,2292000,32,270,8,'defaultProductImage.png');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `first_name` text DEFAULT NULL,
  `last_name` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `password` text DEFAULT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `gender` text DEFAULT NULL,
  `address` text DEFAULT NULL,
  `title` text DEFAULT NULL,
  `token` text DEFAULT NULL,
  `authenticated` text DEFAULT 'false',
  `profile_image` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (0,'Jose','Munoz','josemanuel.tmn@gmail.com','123456',3012801368,'Sin Definir','Sin Definir','user','i4p6kfvjh71gmce2i44','false','defaultUserImage.png'),(1,'Sherwood','Agg','sagg0@mtv.com','avDGo2CgCGu',4601015442,'Male','04551 Del Sol Center','Operator','Por Definir','true','defaultUserImage.png'),(2,'North','Shimoni','nshimoni1@census.gov','8ZDhe3u',9045836007,'Other','629 Rigney Road','User','Por Definir','true','defaultUserImage.png'),(3,'Kaela','Wrankling','kwrankling2@ed.gov','Lnqe2E',5622389780,'Female','30 Lillian Pass','Operator','Por Definir','true','defaultUserImage.png'),(4,'Gregor','Quinn','gquinn3@canalblog.com','k9xB4Rdg',1179189438,'None','None','User','Por Definir','true','defaultUserImage.png'),(5,'Dione','Klement','dklement4@pcworld.com','mI3Z34cw3erZ',4642993309,'None','None','Admin','Por Definir','true','defaultUserImage.png'),(6,'Livvy','Saltern','lsaltern5@dot.gov','0HQORps',9716699545,'Male','7372 Farragut Avenue','Admin','Por Definir','true','defaultUserImage.png'),(7,'Jaclyn','Waite','jwaite6@ucsd.edu','wGXJc9',6719325911,'Other','83 Iowa Drive','User','Por Definir','true','defaultUserImage.png'),(8,'Abby','Dewdeny','adewdeny7@wsj.com','1Z0xnPnl',4081764560,'Other','657 East Plaza','User','Por Definir','true','defaultUserImage.png'),(9,'Tremaine','Spoure','tspoure8@disqus.com','dprHn86LG',2322779417,'None','None','Operator','Por Definir','true','defaultUserImage.png'),(10,'Reggis','Sherbourne','rsherbourne9@flickr.com','OoFWUE',1707600756,'Female','5793 Bunker Hill Junction','User','Por Definir','true','defaultUserImage.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-09 22:59:28
