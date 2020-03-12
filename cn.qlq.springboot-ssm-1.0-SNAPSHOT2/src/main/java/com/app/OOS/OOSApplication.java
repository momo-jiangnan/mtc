package com.app.OOS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication

@ServletComponentScan
public class OOSApplication {

	public static void main(String[] args) {
		SpringApplication.run(OOSApplication.class, args);
	}

}
