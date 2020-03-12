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
	var T =	table.render({
	    elem: '#checkdingdan'
	    ,height: 420
	    ,url: '/checkdingdan' //数据接口
	    ,title: '审核订单'
	    ,page: true //开启分页
	    ,limit:5
	    ,limits:[5,10,15,20]
	    ,toolbar: 'default' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
	    ,totalRow: true //开启合计行
	    ,response : {
            statusCode : 200
            // 重新规定成功的状态码为 200，table 组件默认为 0
        }
	    ,parseData : function(res) { // res 即为原始返回的数据
            return {
                "count" : res.tol,
                "code" : res.status, // 解析接口状态
                "msg" : res.message, // 解析提示文本
                "data" : res.list
                // 解析数据列表
            };
        }
	    ,cols: [[ //表头
	      {type: 'checkbox', fixed: 'left'}
	      ,{field: 'order_id', title: '订单号',align:'center'}
	      ,{field: 'userId', title: '客户ID',align:'center'}
	      ,{field: 'a_num', title: 'A型号(辆)',align:'center'}
	      ,{field: 'b_num', title: 'B型号(辆)',align:'center'}
	      ,{fixed: 'right', title:'操作',align:'center', toolbar: '#barDemo'}
	    ]]
	  });
		 //表格事件条
		 table.on('tool(checkdingdan)', function(obj){
	            var data=obj.data; 
	            console.log(data);
	            var order_id = data.order_id;
	            console.log(order_id);
	            if(obj.event=='edit'){
	            	$.ajax({
             		url:"/updateStatus1",
             		dataType: 'json',
                     type: 'post',
                     data:{order_id:order_id},
                     success: function () {
                    	 T.reload();
                     	layer.msg("通过");
                     },
                     error: function () {
                        layer.msg("系统错误1");
                     }
                 })
	            }else if(obj.event=='del'){
	            		T.reload();
	                    layer.msg("不通过");
	                    
	            }
	            	})
		  
		
		 
	})
})