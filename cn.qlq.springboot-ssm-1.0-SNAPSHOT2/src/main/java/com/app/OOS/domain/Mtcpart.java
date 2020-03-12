package com.app.OOS.domain;

public class Mtcpart {
	int MTC_id;
	String MTC_name;
	String partname;
	int partNum;
	double length;
	double width;
	double height;
	public int getMTC_id() {
		return MTC_id;
	}
	public void setMTC_id(int mTC_id) {
		MTC_id = mTC_id;
	}
	public String getMTC_name() {
		return MTC_name;
	}
	public void setMTC_name(String mTC_name) {
		MTC_name = mTC_name;
	}
	public String getPartname() {
		return partname;
	}
	public void setPartname(String partname) {
		this.partname = partname;
	}
	public int getPartNum() {
		return partNum;
	}
	public void setPartNum(int partNum) {
		this.partNum = partNum;
	}
	public double getLength() {
		return length;
	}
	public void setLength(double length) {
		this.length = length;
	}
	public double getWidth() {
		return width;
	}
	public void setWidth(double width) {
		this.width = width;
	}
	public double getHeight() {
		return height;
	}
	public void setHeight(double height) {
		this.height = height;
	}
}
