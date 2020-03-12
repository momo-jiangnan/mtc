package com.app.OOS.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.OOS.domain.SelectOrder;
import com.app.OOS.mapper.KehuMapper;

@Service
public class KehuService {
	@Autowired
	KehuMapper kehuMapper;
	public String insertOrder(int order_id,int A_num,int B_num,Object object) {
		kehuMapper.insertOrder(order_id, A_num, B_num, object);
		String msg="ok";
		return msg;
		
	}
	
	public List<SelectOrder> selectOrders(Object object){
		List<SelectOrder> list=kehuMapper.selectOrders(object);
		return list;
	}
}
