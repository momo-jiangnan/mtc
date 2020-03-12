package com.app.OOS.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import com.app.OOS.domain.Orders;
import com.app.OOS.service.AdminService;

@Controller
public class AdminController {
	@Autowired
	AdminService adminService;
	@ResponseBody
	@RequestMapping("/selectOrders")
	public  Map<String, Object> selectOrders(){
		
		Map<String, Object> map = new HashMap<String, Object>();
		List<Orders> list = adminService.selectOrders();
		
		map.put("status", 200);
		map.put("tol", 1);
		map.put("list", list);
		map.put("message", "所有订单");
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/insertUser")
	public  Map<String, Object> insertUser(int userId, String userName, String password, int type){
		
		Map<String, Object> map = new HashMap<String, Object>();
		adminService.insertUser(userId,userName,password,type);
		
		
		map.put("message", "所有订单");
		return map;
	}
	
}
