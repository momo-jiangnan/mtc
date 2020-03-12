$(function() {
	layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element', 'slider'], function(){
		 var laydate = layui.laydate //日期
		  ,laypage = layui.laypage //分页
		  ,layer = layui.layer //弹层
		  ,table = layui.table //表格
		  ,carousel = layui.carousel //轮播
		  ,upload = layui.upload //上传
		  ,element = layui.element //元素操作
		  ,slider = layui.slider //滑块
	var T= table.render({
	    elem:'#selectOrder'
	    ,height: 420
	    ,url: '/selectOrder' //数据接口
	    ,title: '下单货单表'
	  
	  
	    ,toolbar: 'default' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
	    ,totalRow: true //开启合计行
	    ,response : {
           statusCode : 200// 重新规定成功的状态码为 200，table 组件默认为 0
       }
	    ,parseData : function(res) { // res 即为原始返回的数据
	    
           return {
               "count" : res.tol,
               "code" : res.status, // 解析接口状态
               "msg" : res.message, // 解析提示文本
               "data" : res.list // 解析数据列表
           };
       }
	    ,cols: [[ //表头
	      
	      {field:'a_num', title: '型号A',align:'center'}
	       ,{field:'b_num', title:'型号B',align:'center'}
	      ,{field: 'userName', title:'订单人',align:'center'}
	    ]]
	  });
	})
	
	
})