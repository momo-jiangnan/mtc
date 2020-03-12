package com.app.OOS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.OOS.domain.User;
import com.app.OOS.mapper.UserMapper;

@Service
public class UserService {
	@Autowired
	UserMapper userMapper;
	//登陆
	public User selectUser(User user) {
		User user1 = userMapper.selectUser(user);	
		return user1;
	}
}
