package com.app.OOS.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.OOS.domain.Orders;
import com.app.OOS.mapper.XiaoshouyuanMapper;

@Service
public class CheckdingdanService {
	@Autowired
	XiaoshouyuanMapper xiaoshouyuanMapper;
	public List<Orders> checkdingdan(){
		List<Orders> list = xiaoshouyuanMapper.checkdingdan();
		return list;
	}
	
	public void updateStatus1(int order_id) {
		xiaoshouyuanMapper.updateStatus1(order_id);
	}
	public List<Orders> checkdingdan2(){
		List<Orders> list = xiaoshouyuanMapper.checkdingdan2();
		return list;
	}
	
	public void updateStatus2(int order_id) {
		xiaoshouyuanMapper.updateStatus2(order_id);
	}
	
}
