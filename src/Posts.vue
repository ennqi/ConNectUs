<template lang="html">
  <div class="">
    
    <vs-tabs>
      <vs-tab label="Home">
        <div class="con-tab-ejemplo">
        </div>
        <vs-list>
  <vs-list-header title="CS2040" color="danger" class = "post-title" style = "font-family:Poppins"></vs-list-header>
  <vs-list-item  class = 'info' title="Debugging Help" subtitle="posted on 4 Feb 2018 23:40 by user123" style = "font-family:Poppins">
    <template slot="avatar">
      <vs-avatar />
    </template>
    <vs-avatar />
      <div class="con-example-images">
    <vs-images>
      <vs-image :key="index" :src="`./assets/star.png${index}`" v-for="(image, index) in 9" />
      <vs-image :key="index" :src="`./assets/forum.png${index}${index}`" v-for="(image, index) in 7" />
    </vs-images>
  </div>
  </vs-list-item>
    <vs-list-item  class = 'info' title="Assignment 5" subtitle="posted on 4 Feb 2018 23:40 by user123" style = "font-family:Poppins">
    <template slot="avatar">
      <vs-avatar vs-text="Vuesax"/>
    </template>
  </vs-list-item>
  <vs-list-header class = "post-title" title="Profile photo" color="warning" style = "font-family:Poppins"></vs-list-header>
  <vs-list-item  class = 'info' title="Xian Famous Foods" subtitle="A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers." style = "font-family:Poppins">
    <template slot="avatar">
      <vs-avatar vs-text="Vue"/>
    </template>
  </vs-list-item>
</vs-list>
      </vs-tab>
      <vs-tab label="Service">
        <div class="con-tab-ejemplo">
          Service
        </div>
      </vs-tab>
      <vs-tab label="login">
        <div class="con-tab-ejemplo">
          login
        </div>
      </vs-tab>
      <vs-tab disabled label="Disabled">
        <div class="con-tab-ejemplo">
          Disabled
        </div>
      </vs-tab>
      <vs-tab label="Lorem ipsum dolor sit amet">
        <div class="con-tab-ejemplo">
          Lorem ipsum dolor sit amet
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<style lang="stylus">
.post-title{
  font-size 30px;
  color #F2D886;
}

.info{
  font-size 25px;
  color: #80A9B4;

}
  
</style>