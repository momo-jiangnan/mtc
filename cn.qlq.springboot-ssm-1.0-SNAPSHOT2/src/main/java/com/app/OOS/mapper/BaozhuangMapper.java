package com.app.OOS.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.app.OOS.domain.Box;
import com.app.OOS.domain.Mtcpart;

import com.app.OOS.domain.Orders;
import com.app.OOS.domain.Zhuangxiang_box;

@Mapper
public interface BaozhuangMapper {

	@Select("select * from orders where status=3")
	public List<Orders> baozhuang();
	
	@Select("select * from mtcpart ")
	public List<Mtcpart> mtc();
	
	@Select("select * from box")
	public List<Box> box();
	
	
	@Update("update orders set status=4 where order_id=#{order_id}")
	public void updateStatus3(@Param("order_id")int order_id);
	
	@Insert("insert into zhuangxiang(box_id,userId,num,order_id) values(#{box_id},#{userId},#{num},#{order_id})")
	public void insertZhuangxiang(@Param("box_id")int box_id,@Param("userId")int userId,@Param("num")int num,@Param("order_id")int order_id);
	
	
	@Select("select * from zhuangxiang,box where zhuangxiang.box_id=box.box_id and s=0")
	public List<Zhuangxiang_box> selectZhuangxiang_Box();
	
	@Update("update zhuangxiang set s=1 where order_id=#{order_id}")
	public void updateStatus4(@Param("order_id")int order_id);
	
}
