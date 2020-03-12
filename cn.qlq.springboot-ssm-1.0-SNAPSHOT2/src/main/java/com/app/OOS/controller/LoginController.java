package com.app.OOS.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;




@Controller
public class LoginController {
	

	@RequestMapping("/Login")
	public String Login() {
		return "/login";
	}
	
	@RequestMapping("/kehu")
	public String Login1(HttpServletRequest request) {
		return "/kehu";
	}
	@RequestMapping("/xiaoshouyuan")
	public String LoginA(HttpServletRequest request) {
		return "/xiaoshouyuan";
	}
	@RequestMapping("/xiaoshoujingli")
	public String Login2(HttpServletRequest request) {
		return "/xiaoshoujingli";
	}
	@RequestMapping("/baozhuangyuan")
	public String Login3(HttpServletRequest request) {
		return "/baozhuangyuan";
	}
	@RequestMapping("/baozhuangjingli")
	public String Login4(HttpServletRequest request) {
		return "/baozhuangjingli";
	}
	@RequestMapping("/jizhuangxiangyuan")
	public String Login5(HttpServletRequest request) {
		return "/jizhuangxiangyuan";
	}
	
	@RequestMapping("/Admin")
	public String Login6(HttpServletRequest request) {
		return "/Admin";
	}
	  @RequestMapping("/Logout")
	    public String logout(HttpSession session) {
	    	session.invalidate();
	    	return "/Login";
	    }
}
