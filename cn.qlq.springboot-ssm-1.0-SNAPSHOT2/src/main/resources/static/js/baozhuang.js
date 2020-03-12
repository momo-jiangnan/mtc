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
	    elem:'#baozhuang'
	    ,height: 420
	    ,url: '/baozhuang' //数据接口
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
	      ,{field: 'userId', title:'订单人',align:'center'}
	      ,{fixed: 'right', title:'操作',align:'center', toolbar: '#barDemo'}
	    ]]
	  });
		 
		 
		 
		 
		 
		 
		 //表格事件条
		 table.on('tool(baozhuang)', function(obj){
	            var data=obj.data; 
	            console.log(data);
	            var order_id = data.order_id;
	            console.log(order_id);
	            $.ajax({
             		url:"/mtc",
             		dataType: 'json',
                     type: 'post',
                     data:{order_id:order_id},
                     success: function (res) {
                    	
                    var	A_Znum=data.a_num*res.list[0].partNum //A型号：主体：
                    var	A_ZW=res.list[0].width;
                    var	A_ZH=res.list[0].height;
                    var	A_ZL=res.list[0].length;
                    var	A_C1num=data.a_num*res.list[1].partNum //A型号：侧体1
                    var	A_C1W=res.list[1].width;
                    var	A_C1H=res.list[1].height;
                    var	A_C1L=res.list[1].length;
                    var	A_C2num=data.a_num*res.list[2].partNum //A型号：侧体2
                    var	A_C2W=res.list[2].width;
                    var	A_C2H=res.list[2].height;
                    var	A_C2L=res.list[2].length;
                    var	A_C3num=data.a_num*res.list[3].partNum //A型号：侧体3
                    var	A_C3W=res.list[3].width;
                    var	A_C3H=res.list[3].height;
                    var	A_C3L=res.list[3].length;
                    var	B_Znum=data.b_num*res.list[4].partNum //B型号：主体
                    var	B_ZW=res.list[4].width;
                    var	B_ZH=res.list[4].height;
                    var	B_ZL=res.list[4].length;
                    var	B_C1num=data.a_num*res.list[5].partNum //B型号：侧体1
                    var	B_C1W=res.list[5].width;
                    var	B_C1H=res.list[5].height;
                    var	B_C1L=res.list[5].length;
                    var	B_C2num=data.a_num*res.list[6].partNum //B型号：侧体2
                    var	B_C2W=res.list[6].width;
                    var	B_C2H=res.list[6].height;
                    var	B_C2L=res.list[6].length;
                    var	B_C3num=data.a_num*res.list[7].partNum //B型号：侧体3
                    var	B_C3W=res.list[7].width;
                    var	B_C3H=res.list[7].height;
                    var	B_C3L=res.list[7].length;
                    	console.log(B_C3L);
                    	$.ajax({
                     		url:"/box",
                     		dataType: 'json',
                             type: 'post',
                             
                             success: function (res) {
                            var	A_boxW=res.list[0].width;
                            var	A_boxH=res.list[0].height;
                            var	A_boxL=res.list[0].length;
                            
                            var	B_boxW=res.list[1].width;
                            var	B_boxH=res.list[1].height;
                            var	B_boxL=res.list[1].length;
                            
                            var	C_boxW=res.list[2].width;
                            var	C_boxH=res.list[2].height;
                            var	C_boxL=res.list[2].length;
                           
                            var A1=A_boxW/A_ZW;
                            var A2=A_boxH/A_ZH;
                            var A3=A_boxL/A_ZL;
                            var A_ZNUM=parseInt(A_Znum/(A1*A2*A3));
                            console.log(A_ZNUM);
                            if(A_Znum%(A1*A2*A3)!=0){
                            	A_ZNUM=A_ZNUM+1;//A型号主体需要1号箱子的个数
                            }
                            
                            var A4=A_boxW/A_C1W;
                            var A5=A_boxH/A_C1H;
                            var A6=A_boxL/A_C1L;
                            var AC1num=parseInt(A_C1num/(A4*A5*A6));
                            console.log(AC1num);
                            if(A_C1num%(A4*A5*A6)!=0){
                            	AC1num=AC1num+1;//A型号侧体1需要1号箱子的个数
                            }
                            
                            var A7=A_boxW/A_C2W;
                            var A8=A_boxH/A_C2H;
                            var A9=A_boxL/A_C2L;
                            var AC2num=parseInt(A_C2num/(A7*A8*A9));
                            console.log(AC2num);
                            if(A_C2num%(A7*A8*A9)!=0){
                            	AC2num=AC2num+1;//A型号侧体2需要1号箱子的个数
                            }
                            
                            var A10=A_boxW/A_C3W;
                            var A11=A_boxH/A_C3H;
                            var A12=A_boxL/A_C3L;
                            var AC3num=parseInt(A_C3num/(A10*A11*A12));
                            console.log(AC3num);
                            if(A_C3num%(A10*A11*A12)!=0){
                            	AC3num=AC3num+1;//A型号侧体3需要1号箱子的个数
                            }
                            
                         
                          
                          var B1=A_boxW/B_ZW;
                          var B2=A_boxH/B_ZH;
                          var B3=A_boxL/B_ZL;
                          var B_ZNUM=parseInt(B_Znum/(B1*B2*B3));
                          console.log(B_ZNUM);
                          if(B_Znum%(B1*B2*B3)!=0){
                          	B_ZNUM=B_ZNUM+1;//B型号主体需要1号箱子的个数
                          }
                          
                          var B4=A_boxW/B_C1W;
                          var B5=A_boxH/B_C1H;
                          var B6=A_boxL/B_C1L;
                          var BC1num=parseInt(B_C1num/(B4*B5*B6));
                          console.log(BC1num);
                          if(B_C1num%(B4*B5*B6)!=0){
                          	BC1num=BC1num+1;//B型号侧体1需要1号箱子的个数
                          }
                          
                          var B7=A_boxW/B_C2W;
                          var B8=A_boxH/B_C2H;
                          var B9=A_boxL/B_C2L;
                          var BC2num=parseInt(B_C2num/(B7*B8*B9));
                          console.log(BC2num);
                          if(B_C2num%(B7*B8*B9)!=0){
                          	BC2num=BC2num+1;//B型号侧体2需要1号箱子的个数
                          }
                          
                          var B10=A_boxW/B_C3W;
                          var B11=A_boxH/B_C3H;
                          var B12=A_boxL/B_C3L;
                          var BC3num=parseInt(B_C3num/(B10*B11*B12));
                          console.log(BC3num);
                          if(B_C3num%(B10*B11*B12)!=0){
                          	BC3num=BC3num+1;//B型号侧体3需要1号箱子的个数
                          }
                          
                        var numA= A_ZNUM+AC1num+AC2num+AC3num //1号箱子装A型号车需要的个数
                        var numB= B_ZNUM+BC1num+BC2num+BC3num //1号箱子装A型号车需要的个数
                        var first_num=numA+numB;//1号箱子装A+B型号总数
                        
                       
                        
                        var A1_1=B_boxW/A_ZW;
                        var A2_2=B_boxH/A_ZH;
                        var A3_3=B_boxL/A_ZL;
                        var A_ZNUM2=parseInt(A_Znum/(A1_1*A2_2*A3_3));
                        console.log(A_ZNUM2);
                        if(A_Znum%(A1_1*A2_2*A3_3)!=0){
                        	A_ZNUM2=A_ZNUM2+1;//A型号主体需要2号箱子的个数
                        }
                        
                        var A4_4=B_boxW/A_C1W;
                        var A5_5=B_boxH/A_C1H;
                        var A6_6=B_boxL/A_C1L;
                        var AC1num2=parseInt(A_C1num/(A4_4*A5_5*A6_6));
                        console.log(AC1num2);
                        if(A_C1num%(A4_4*A5_5*A6_6)!=0){
                        	AC1num2=AC1num2+1;//A型号侧体1需要2号箱子的个数
                        }
                        
                        var A7_7=B_boxW/A_C2W;
                        var A8_8=B_boxH/A_C2H;
                        var A9_9=B_boxL/A_C2L;
                        var AC2num2=parseInt(A_C2num/(A7_7*A8_8*A9_9));
                        console.log(AC2num2);
                        if(A_C2num%(A7_7*A8_8*A9_9)!=0){
                        	AC2num2=AC2num2+1;//A型号侧体2需要2号箱子的个数
                        }
                        
                        var A10_10=B_boxW/A_C3W;
                        var A11_11=B_boxH/A_C3H;
                        var A12_12=B_boxL/A_C3L;
                        var AC3num2=parseInt(A_C3num/(A10_10*A11_11*A12_12));
                        console.log(AC3num2);
                        if(A_C3num%(A10_10*A11_11*A12_12)!=0){
                        	AC3num2=AC3num2+1;//A型号侧体3 需要1号箱子的个数
                        }
                        
                     
                      
                      var B1_1=B_boxW/B_ZW;
                      var B2_2=B_boxH/B_ZH;
                      var B3_3=B_boxL/B_ZL;
                      var B_ZNUM2=parseInt(B_Znum/(B1_1*B2_2*B3_3));
                      console.log(B_ZNUM2);
                      if(B_Znum%(B1_1*B2_2*B3_3)!=0){
                      	B_ZNUM2=B_ZNUM2+1;//B型号主体需要2号箱子的个数
                      }
                      
                      var B4_4=B_boxW/B_C1W;
                      var B5_5=B_boxH/B_C1H;
                      var B6_6=B_boxL/B_C1L;
                      var BC1num2=parseInt(B_C1num/(B4_4*B5_5*B6_6));
                      console.log(BC1num2);
                      if(B_C1num%(B4_4*B5_5*B6_6)!=0){
                      	BC1num2=BC1num2+1;//B型号侧体1需要2号箱子的个数
                      }
                      
                      var B7_7=B_boxW/B_C2W;
                      var B8_8=B_boxH/B_C2H;
                      var B9_9=B_boxL/B_C2L;
                      var BC2num2=parseInt(B_C2num/(B7_7*B8_8*B9_9));
                      console.log(BC2num2);
                      if(B_C2num%(B7_7*B8_8*B9_9)!=0){
                      	BC2num2=BC2num2+1;//B型号侧体2需要2号箱子的个数
                      }
                      
                      var B10_10=B_boxW/B_C3W;
                      var B11_11=B_boxH/B_C3H;
                      var B12_12=B_boxL/B_C3L;
                      var BC3num2=parseInt(B_C3num/(B10_10*B11_11*B12_12));
                      console.log(BC3num2);
                      if(B_C3num%(B10_10*B11_11*B12_12)!=0){
                      	BC3num2=BC3num2+1;//B型号侧体3需要2号箱子的个数
                      } 
                        
                      var numA_A= A_ZNUM2+AC1num2+AC2num2+AC3num2 //2号箱子装A型号车需要的个数
                      var numB_B= B_ZNUM2+BC1num2+BC2num2+BC3num2 //2号箱子装A型号车需要的个数
                      var two_num=numA_A+numB_B;//2号箱子装A+B型号总数   
                        
                        
                        
                      var A1_1_1=C_boxW/A_ZW;
                      var A2_2_2=C_boxH/A_ZH;
                      var A3_3_3=C_boxL/A_ZL;
                      var A_ZNUM3=parseInt(A_Znum/(A1_1_1*A2_2_2*A3_3_3));
                      console.log(A_ZNUM3);
                      if(A_Znum%(A1_1_1*A2_2_2*A3_3_3)!=0){
                      	A_ZNUM3=A_ZNUM3+1;//A型号主体需要3号箱子的个数
                      }
                      
                      var A4_4_4=C_boxW/A_C1W;
                      var A5_5_5=C_boxH/A_C1H;
                      var A6_6_6=C_boxL/A_C1L;
                      var AC1num3=parseInt(A_C1num/(A4_4_4*A5_5_5*A6_6_6));
                      console.log(AC1num3);
                      if(A_C1num%(A4_4_4*A5_5_5*A6_6_6)!=0){
                      	AC1num3=AC1num3+1;//A型号侧体1需要3号箱子的个数
                      }
                      
                      var A7_7_7=C_boxW/A_C2W;
                      var A8_8_8=C_boxH/A_C2H;
                      var A9_9_9=C_boxL/A_C2L;
                      var AC2num3=parseInt(A_C2num/(A7_7_7*A8_8_8*A9_9_9));
                      console.log(AC2num3);
                      if(A_C2num%(A7_7_7*A8_8_8*A9_9_9)!=0){
                      	AC2num3=AC2num3+1;//A型号侧体2需要2号箱子的个数
                      }
                      
                      var A10_10_10=C_boxW/A_C3W;
                      var A11_11_11=C_boxH/A_C3H;
                      var A12_12_12=C_boxL/A_C3L;
                      var AC3num3=parseInt(A_C3num/(A10_10_10*A11_11_11*A12_12_12));
                      console.log(AC3num3);
                      if(A_C3num%(A10_10_10*A11_11_11*A12_12_12)!=0){
                      	AC3num3=AC3num3+1;//A型号侧体3 需要3号箱子的个数
                      }
                      
                   
                    
                    var B1_1_1=C_boxW/B_ZW;
                    var B2_2_2=C_boxH/B_ZH;
                    var B3_3_3=C_boxL/B_ZL;
                    var B_ZNUM3=parseInt(B_Znum/(B1_1_1*B2_2_2*B3_3_3));
                    console.log(B_ZNUM3);
                    if(B_Znum%(B1_1_1*B2_2_2*B3_3_3)!=0){
                    	B_ZNUM3=B_ZNUM3+1;//B型号主体需要2号箱子的个数
                    }
                    
                    var B4_4_4=C_boxW/B_C1W;
                    var B5_5_5=C_boxH/B_C1H;
                    var B6_6_6=C_boxL/B_C1L;
                    var BC1num3=parseInt(B_C1num/(B4_4_4*B5_5_5*B6_6_6));
                    console.log(BC1num3);
                    if(B_C1num%(B4_4_4*B5_5_5*B6_6_6)!=0){
                    	BC1num3=BC1num3+1;//B型号侧体1需要2号箱子的个数
                    }
                    
                    var B7_7_7=C_boxW/B_C2W;
                    var B8_8_8=C_boxH/B_C2H;
                    var B9_9_9=C_boxL/B_C2L;
                    var BC2num3=parseInt(B_C2num/(B7_7_7*B8_8_8*B9_9_9));
                    console.log(BC2num3);
                    if(B_C2num%(B7_7_7*B8_8_8*B9_9_9)!=0){
                    	BC2num3=BC2num3+1;//B型号侧体2需要2号箱子的个数
                    }
                    
                    var B10_10_10=C_boxW/B_C3W;
                    var B11_11_11=C_boxH/B_C3H;
                    var B12_12_12=C_boxL/B_C3L;
                    var BC3num3=parseInt(B_C3num/(B10_10_10*B11_11_11*B12_12_12));
                    console.log(BC3num3);
                    if(B_C3num%(B10_10_10*B11_11_11*B12_12_12)!=0){
                    	BC3num3=BC3num3+1;//B型号侧体3需要2号箱子的个数
                    } 
                      
                    var numA_A_A= A_ZNUM3+AC1num3+AC2num3+AC3num3 //3号箱子装A型号车需要的个数
                    var numB_B_B= B_ZNUM3+BC1num3+BC2num3+BC3num3 //3号箱子装A型号车需要的个数
                    var three_num=numA_A_A+numB_B_B;//3号箱子装A+B型号总数   
                        
                        console.log(data.userId);
                    if(obj.event=='edit1'){
    	            	$.ajax({
                 		url:"/updateStatus3",
                 		dataType: 'json',
                         type: 'post',
                         data:{order_id:order_id,
                        	 box_id:1,
                        	 userId:data.userId,
                        	 num:first_num},
                         success: function () {
                        	 T.reload();
                         	layer.msg("包装好，等审核！");
                         },
                         error: function () {
                            layer.msg("系统错误11");
                         }
                     })
    	            }else if(obj.event=='edit2'){
    	            	$.ajax({
    	             		url:"/updateStatus3",
    	             		dataType: 'json',
    	                     type: 'post',
    	                     data:{order_id:order_id,
                            	 box_id:2,
                            	 userId:data.userId,
                            	 num:first_num},
    	                     success: function () {
    	                    	 T.reload();
    	                     	layer.msg("包装好，等审核！");
    	                     },
    	                     error: function () {
    	                        layer.msg("系统错误22");
    	                     }
    	                 })
    	                    
    	            }else if(obj.event=='edit3'){
    	            	$.ajax({
    	             		url:"/updateStatus3",
    	             		dataType: 'json',
    	                     type: 'post',
    	                     data:{order_id:order_id,
                            	 box_id:3,
                            	 userId:data.userId,
                            	 num:first_num},
    	                     success: function () {
    	                    	 T.reload();
    	                     	layer.msg("包装好，等审核！");
    	                     },
    	                     error: function () {
    	                        layer.msg("系统错误33");
    	                     }
    	                 })
                        
                }
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                             },
                             error: function () {
                                layer.msg("系统错误2");
                             }
                         })
                     },
                     error: function () {
                        layer.msg("系统错误1");
                     }
                 })
                 
                 
	         
	            	})
		  
		
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
	})
	
	
})