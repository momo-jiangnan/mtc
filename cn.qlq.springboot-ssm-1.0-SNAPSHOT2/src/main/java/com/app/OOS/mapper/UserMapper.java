package com.app.OOS.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.app.OOS.domain.User;
@Mapper
public interface UserMapper {
	//用户登陆
	@Select("select * from user where userId=#{userId} and password=#{password} and type=#{type}")
	public User selectUser(User user);
}
