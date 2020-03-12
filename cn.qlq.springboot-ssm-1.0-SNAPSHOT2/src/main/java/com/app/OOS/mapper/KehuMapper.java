package com.app.OOS.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.app.OOS.domain.SelectOrder;

@Mapper
public interface KehuMapper {
//下单
	@Insert("insert into orders(order_id,A_num,B_num,userId) values(#{order_id},#{A_num},#{B_num},#{userId})")
	public void insertOrder(@Param("order_id")int order_id,@Param("A_num")int A_num,@Param("B_num")int B_num,@Param("userId")Object object);
//查询订单
	@Select("select A_num,B_num,userName from orders,user where orders.userId=user.userId and orders.userId=#{userId}")
	public List<SelectOrder> selectOrders(@Param("userId")Object object);


}
