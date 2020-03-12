package com.app.OOS.domain;

public class Orders {
 int order_id;
 int A_id;
 int B_id;
 int A_num;
 int B_num;
 int userId;
 int status;



public int getA_id() {
	return A_id;
}
public void setA_id(int a_id) {
	A_id = a_id;
}
public int getB_id() {
	return B_id;
}
public void setB_id(int b_id) {
	B_id = b_id;
}
public int getA_num() {
	return A_num;
}
public void setA_num(int a_num) {
	A_num = a_num;
}
public int getB_num() {
	return B_num;
}
public void setB_num(int b_num) {
	B_num = b_num;
}
public int getUserId() {
	return userId;
}
public void setUserId(int userId) {
	this.userId = userId;
}
public int getStatus() {
	return status;
}
public void setStatus(int status) {
	this.status = status;
}
public int getOrder_id() {
	return order_id;
}
public void setOrder_id(int order_id) {
	this.order_id = order_id;
}
}
