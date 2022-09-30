<template>
  <nav class="menu-container">
    <RouterLink
      :exact="item.exact"
      v-for="item in items"
      :key="item.link"
      :to="{ name: item.name }"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon"><Icon :type="item.icon" /></div>
      <span>{{ item.title }} </span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        { name: "Home", link: "/", title: "首页", icon: "home", exact: true },
        {
          name: "Blog",
          link: "/blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "About",
          link: "/about",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          link: "/project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          link: "/message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  width: 100%;
  background: transparent;
  color: @lightWords;
  margin: 24px 0;
  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    padding: 0 50px;
    height: 45px;
    &.selected {
      background: darken(@words, 3%);
    }
    &:hover {
      color: #fff;
    }
    .icon {
      width: 24px;
      text-align: center;
    }
  }
}
</style>
