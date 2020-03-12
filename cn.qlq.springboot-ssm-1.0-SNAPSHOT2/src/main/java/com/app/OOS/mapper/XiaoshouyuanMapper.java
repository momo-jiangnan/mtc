package com.app.OOS.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.app.OOS.domain.Orders;

@Mapper
public interface XiaoshouyuanMapper {
	@Select("select * from orders where status=1")
	public List<Orders> checkdingdan();
	
	@Update("update orders set status=2 where order_id=#{order_id}")
	public void updateStatus1(@Param("order_id")int order_id);
	
	@Select("select * from orders where status=2")
	public List<Orders> checkdingdan2();
	
	@Update("update orders set status=3 where order_id=#{order_id}")
	public void updateStatus2(@Param("order_id")int order_id);
}
