package com.app.OOS.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.OOS.domain.Orders;

import com.app.OOS.mapper.AdminMapper;

@Service
public class AdminService {
@Autowired
AdminMapper adminMapper;
public List<Orders> selectOrders(){
	List<Orders> list=adminMapper.selectOrders();
	return list;
}

public void insertUser(int userId, String userName, String password, int type) {
	adminMapper.insertUser(userId, userName, password, type);
}
}
