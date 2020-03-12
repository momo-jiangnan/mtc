package com.app.OOS.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.app.OOS.domain.Orders;

import com.app.OOS.service.CheckdingdanService;

@Controller
public class CheckdingdanController {
	@Autowired
	CheckdingdanService checkdingdanService;
	@ResponseBody
	@RequestMapping("/checkdingdan")
	public  Map<String, Object> checkdingdan(){
		
		Map<String, Object> map = new HashMap<String, Object>();
		List<Orders> list = checkdingdanService.checkdingdan();
		
		map.put("status", 200);
		map.put("tol", 1);
		map.put("list", list);
		map.put("message", "审核订单");
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/updateStatus1")
	public Map<String, Object>  updateStatus1(int order_id){
		Map<String, Object> map = new HashMap<String, Object>();
		checkdingdanService.updateStatus1(order_id);
		map.put("message", "审核订单");
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/checkdingdan2")
	public  Map<String, Object> checkdingdan2(){
		
		Map<String, Object> map = new HashMap<String, Object>();
		List<Orders> list = checkdingdanService.checkdingdan2();
		
		map.put("status", 200);
		map.put("tol", 1);
		map.put("list", list);
		map.put("message", "审核订单");
		return map;
	}
	
	
	
	@ResponseBody
	@RequestMapping("/updateStatus2")
	public Map<String, Object>  updateStatus2(int order_id){
		Map<String, Object> map = new HashMap<String, Object>();
		checkdingdanService.updateStatus2(order_id);
		map.put("message", "审核订单");
		return map;
	}
	
	
}
