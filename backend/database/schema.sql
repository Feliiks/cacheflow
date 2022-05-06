USE sf_homes;

CREATE TABLE `user` (
  `cacheflow_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `cacheflow_created_at` date DEFAULT NULL,
  `cacheflow_updated_at`date DEFAULT NULL,
  PRIMARY KEY (`cacheflow_id`),
  UNIQUE KEY `email` (`email`)
);

CREATE TABLE `company` (
  `cacheflow_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `domain` varchar(255) DEFAULT NULL,
  `cacheflow_created_at` date DEFAULT NULL,
  `cacheflow_updated_at`date DEFAULT NULL,
  PRIMARY KEY (`cacheflow_id`),
  UNIQUE KEY `domain` (`domain`)
);

CREATE TABLE `user_company` (
  `cacheflow_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_cacheflow_id` int(11) DEFAULT NULL,
  `company_cacheflow_id` int(11) DEFAULT NULL,
  `cacheflow_created_at` date DEFAULT NULL,
  `cacheflow_updated_at` date DEFAULT NULL,
  PRIMARY KEY (`cacheflow_id`),
  KEY `user_cacheflow_id` (`user_cacheflow_id`),
  KEY `company_cacheflow_id` (`company_cacheflow_id`),
  CONSTRAINT `user_company_ibfk_1` FOREIGN KEY (`user_cacheflow_id`) REFERENCES `user` (`cacheflow_id`),
  CONSTRAINT `user_company_ibfk_2` FOREIGN KEY (`company_cacheflow_id`) REFERENCES `company` (`cacheflow_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `users` (
  `cacheflow_id` int NOT NULL AUTO_INCREMENT,
  `sale_type` varchar(255) DEFAULT NULL,
  `sold_date` date DEFAULT NULL,
  `property_type` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zip` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `beds` int DEFAULT NULL, 
  `baths` decimal(10,2) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `square_feet` int DEFAULT NULL, 
  `lot_size` int DEFAULT NULL, 
  `year_built` int DEFAULT NULL,
  `days_on_market` int DEFAULT NULL,
  `cost_per_square_foot` int DEFAULT NULL,
  `hoa_month` int DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `next_open_house_start_time` date DEFAULT NULL,
  `next_open_house_end_time` date DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `mls_number` varchar(255) DEFAULT NULL,
  `favorite` varchar(10) DEFAULT NULL,
  `interested` varchar(10) DEFAULT NULL,
  `longitude` varchar(10) DEFAULT NULL,
  `latitude` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mls_number` (`mls_number`)
);
