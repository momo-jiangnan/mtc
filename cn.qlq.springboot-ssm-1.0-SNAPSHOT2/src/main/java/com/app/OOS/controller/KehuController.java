package com.app.OOS.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.app.OOS.domain.SelectOrder;

import com.app.OOS.service.KehuService;

@Controller
public class KehuController {
	@Autowired
	KehuService kehuService;
	
//新增课程
	@ResponseBody
	@RequestMapping("/insertOrder")
	public  Map<String, Object> insertOrder(HttpServletRequest request,@RequestParam("order_id")int order_id,@RequestParam("A_num")int A_num,@RequestParam("B_num")int B_num) {
		
		HttpSession httpSession=request.getSession();
		
		String msg=kehuService.insertOrder(order_id, A_num, B_num, httpSession.getAttribute("userId"));
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("msg",msg);
		return map;
	}
	
	
	@ResponseBody
	@RequestMapping("/selectOrder")
	public  Map<String, Object> selectUsers(HttpServletRequest request) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		HttpSession httpSession=request.getSession();
		List<SelectOrder> list=kehuService.selectOrders(httpSession.getAttribute("userId"));
		
		map.put("status", 200);
		map.put("tol", 1);
		map.put("list", list);
		map.put("message", "订单详情");
		return map;
	}
	
}
