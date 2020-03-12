package com.app.OOS.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.ResponseBody;

import com.app.OOS.domain.Box;
import com.app.OOS.domain.Mtcpart;

import com.app.OOS.domain.Orders;
import com.app.OOS.domain.Zhuangxiang_box;
import com.app.OOS.service.BaozhuangService;


@Controller
public class BaozhuangController {

	@Autowired
	BaozhuangService baozhuangService;
	@ResponseBody
	@RequestMapping("/baozhuang")
	public  Map<String, Object> baozhuang(){
		
		Map<String, Object> map = new HashMap<String, Object>();
		List<Orders> list = baozhuangService.baozhuang();
		
		map.put("status", 200);
		map.put("tol", 1);
		map.put("list", list);
		map.put("message", "审核订单");
		return map;
	}
	
	
	
	@ResponseBody
	@RequestMapping("/mtc")
	public  Map<String, Object> baozhuang1(){
		
		Map<String, Object> map = new HashMap<String, Object>();
		List<Mtcpart> list = baozhuangService.mtc();
		
		map.put("status", 200);
		map.put("tol", 1);
		map.put("list", list);
		map.put("message", "包装审核");
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/box")
	public  Map<String, Object> box(){
		
		Map<String, Object> map = new HashMap<String, Object>();
		List<Box> list = baozhuangService.box();
		
		map.put("status", 200);
		map.put("tol", 1);
		map.put("list", list);
		map.put("message", "包装审核");
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/updateStatus3")
	public  Map<String, Object> updateStatus3(int box_id, int userId, int num, int order_id){
		
		Map<String, Object> map = new HashMap<String, Object>();
		baozhuangService.updateStatus3(box_id,userId,num,order_id);
		
		
		map.put("message", "装箱审核");
		return map;
	}
	
	
	@ResponseBody
	@RequestMapping("/selectZhuangxiang_Box")
	public  Map<String, Object> selectZhuangxiang_Box(){
		
		Map<String, Object> map = new HashMap<String, Object>();
		List<Zhuangxiang_box> list = baozhuangService.selectZhuangxiang_Box();
		
		map.put("status", 200);
		map.put("tol", 1);
		map.put("list", list);
		map.put("message", "审核订单");
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/updateStatus4")
	public  Map<String, Object> updateStatus4(int order_id){
		
		Map<String, Object> map = new HashMap<String, Object>();
		 baozhuangService.updateStatus4(order_id);
		map.put("message", "审核订单");
		return map;
	}
}
