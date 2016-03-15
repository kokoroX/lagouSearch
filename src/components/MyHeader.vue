<template>
  <header>
    <div class="inner">
      <div class="logo-wrap">
        <a href="/" class="logo">
          <img src="../assets/head.jpeg" class="logo-img">
          <span class="site-name">拉勾网 全文检索 vue 相关职位 </span>
        </a>
      </div>
      <nav class="main-nav">
          <a class="main-nav-link" href="https://github.com/kokoroX/lagouSearch">github</a>
      </nav>
    </div>
  </header>
</template>

<style>
a {
  text-decoration: none;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #00b38a;
  background: #fff;
  width: 100%;
}
.inner {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
}
.logo-wrap {
  display: inline-block;
  float: left;
  margin-bottom: 0;
  padding: 12px 0 12px 0;
}
.logo {
  font-size: 40px;
  line-height: 40px;
  letter-spacing: 2px;
  color: #00a57f;
}
.logo .logo-img{
  height: 40px;
  width: 40px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  vertical-align: bottom;
}
.site-name {
  font-size: 20px;
  vertical-align: top;
}
.main-nav {
  float: right;
}
.main-nav-link {
  float: left;
  opacity: 0.7;
  text-decoration: none;
  transition: opacity 0.2s;
  display: block;
  padding: 12px 15px;
  line-height: 40px;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 14px;
  color: #576366;
}
a:hover {
  opacity: 1;
  text-decoration: underline;
}
</style>
