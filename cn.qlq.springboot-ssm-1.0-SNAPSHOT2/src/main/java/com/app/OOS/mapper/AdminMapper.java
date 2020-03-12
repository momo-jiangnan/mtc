package com.app.OOS.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.app.OOS.domain.Orders;

@Mapper
public interface AdminMapper {
	@Select("select * from orders")
	public List<Orders> selectOrders();
	
	@Insert("insert into user(userId,userName,password,type) values(#{userId},#{userName},#{password},#{type})")
	public void insertUser(@Param("userId")int userId,@Param("userName")String userName,@Param("password")String password,@Param("type")int type);
}
