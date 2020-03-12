package com.app.OOS.controller;


import java.util.HashMap;
import java.util.Map;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.app.OOS.domain.User;
import com.app.OOS.service.UserService;

@Controller
public class UserController {
	@Autowired
	UserService userService;
	//登陆
	@ResponseBody
	@RequestMapping("/selectUser")
	public  Map<String, Integer> selectUser(int userId,String password,int type,HttpSession session,HttpServletRequest request) {
		User user = new User();
		user.setUserId(userId);
		user.setPassword(password);
		user.setType(type);
		Map<String, Integer> map = new HashMap<String, Integer>();
		User user2 = userService.selectUser(user);
		if(user2!=null) {
			map.put("msg", user2.getType());
			HttpSession httpSession=request.getSession();
    		
    		httpSession.setAttribute("userId", user2.getUserId());
    		httpSession.setAttribute("userPassword", user2.getPassword());
		}
		return map;
	}
	
}
