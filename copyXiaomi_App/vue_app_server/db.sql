#1:进入xz库中
USE xz;
#2:创建新闻表
CREATE TABLE xz_news(
 id    INT PRIMARY KEY AUTO_INCREMENT, 
 title VARCHAR(128),
 ctime DATETIME,
 img_url VARCHAR(255),
 point INT
);
#now() 当前数据库时间 年月日时分秒
INSERT INTO xz_news VALUES(null,'红米6 AI双摄',now(),
"http://127.0.0.1:3000/img/list1.jpg",2);
INSERT INTO xz_news VALUES(null,'小米手环3 NFC版',now(),
"http://127.0.0.1:3000/img/list2.jpg",40);
INSERT INTO xz_news VALUES(null,'小米8 青春版',now(),
"http://127.0.0.1:3000/img/list3.jpg",12);
INSERT INTO xz_news VALUES(null,'九号平衡车',now(),
"http://127.0.0.1:3000/img/list4.jpg",3);
INSERT INTO xz_news VALUES(null,'小米路由器4',now(),
"http://127.0.0.1:3000/img/list5.jpg",2);
INSERT INTO xz_news VALUES(null,'米家蓝牙温湿度计 白色',now(),
"http://127.0.0.1:3000/img/list6.jpg",21);
INSERT INTO xz_news VALUES(null,'米兔定位电话 白色',now(),
"http://127.0.0.1:3000/img/list7.jpg",11);
INSERT INTO xz_news VALUES(null,'米兔智能故事机',now(),
"http://127.0.0.1:3000/img/list8.jpg",05);
INSERT INTO xz_news VALUES(null,'小米米家小白智能摄像头',now(),
"http://127.0.0.1:3000/img/list9.jpg",7);
INSERT INTO xz_news VALUES(null,'米兔拉杆箱 海军蓝',now(),
"http://127.0.0.1:3000/img/list10.jpg",10);
INSERT INTO xz_news VALUES(null,'米家电水壶 白色',now(),
"http://127.0.0.1:3000/img/list11.jpg",23);
INSERT INTO xz_news VALUES(null,'TS尼龙偏光太阳镜',now(),
"http://127.0.0.1:3000/img/list12.jpg",19);
INSERT INTO xz_news VALUES(null,'米兔儿童电话手表',now(),
"http://127.0.0.1:3000/img/list13.jpg",100);
INSERT INTO xz_news VALUES(null,'..14',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..15',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);



#1:创建评论
CREATE TABLE xz_comment(
  id  INT PRIMARY KEY AUTO_INCREMENT,
  content VARCHAR(140),
  ctime   DATETIME,
  user_name VARCHAR(50),
  nid  INT
);

INSERT INTO xz_comment VALUES(null,'ha ha1',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha2',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha3',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha4',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha5',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha6',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha7',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha8',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha9',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha10',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha11',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha12',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha13',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha14',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha15',now(),'匿名 ',1);




