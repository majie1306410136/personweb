# personweb
使用html、css、js编写过一个响应式布局的个人网站，主要功能：留言和相册特效。没有用到数据库，只用了一个xml文件存储留言的数据，通过ajax的get方法获取xml文件中的数据同步添加到html上的留言墙上。Html上发布留言使用了一个form表单，post请求方式，遵从http协议将请求服务器中的Servlet，这个Servlet主要就是通过HttpServletRequest中的getParameter方法获取客户端的请求参数，并dom4j的方式解析与html页面关联的xml文件，将这些参数写入这个xml文件，就实现了留言功能。<br>
不过服务器如果不支持jsp的话，后台的servlet运行不了，就接受不了留言的请求，也就看不到留言信息了

