package com.app.OOS.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.OOS.domain.Box;
import com.app.OOS.domain.Mtcpart;

import com.app.OOS.domain.Orders;
import com.app.OOS.domain.Zhuangxiang_box;
import com.app.OOS.mapper.BaozhuangMapper;


@Service
public class BaozhuangService {
	@Autowired
	BaozhuangMapper baozhuangMapper;
	public List<Orders> baozhuang(){
		List<Orders> list = baozhuangMapper.baozhuang();
		return list;
	}
	
	public List<Mtcpart> mtc() {
		List<Mtcpart> list = baozhuangMapper.mtc();
		return list;
	}
	
	
	public List<Box> box() {
		List<Box> list = baozhuangMapper.box();
		return list;
	}
	
	public void  updateStatus3(int box_id, int userId, int num, int order_id) {
		baozhuangMapper.insertZhuangxiang(box_id, userId, num, order_id);
		baozhuangMapper.updateStatus3(order_id);
	}
	public void  updateStatus4(int order_id) {
		
		baozhuangMapper.updateStatus4(order_id);
	}
	
	public List<Zhuangxiang_box> selectZhuangxiang_Box(){
		List<Zhuangxiang_box> list=baozhuangMapper.selectZhuangxiang_Box();
		return list;
	}
}
