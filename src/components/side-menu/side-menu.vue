<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu v-show="!collapsed" width="auto" theme="dark" @on-select="handleSelect">
      <template v-for="item in list">
        <re-submenu
          v-if="item.children"
          :key="item.name"
          :name="item.name"
          :parent="item">
        </re-submenu>
        <menu-item v-else :key="item.name" :name="item.name"><Icon :type="item.icon" />{{item.title}}</menu-item>
      </template>
    </Menu>
    <div v-show="collapsed" class="drop-wrapper">
      <template v-for="item in list">
        <re-dropdown
          v-if="item.children"
          :key="item.name"
          :name="item.name"
          icon-color="#fff"
          :show-title="false"
          @on-select="handleSelect"
          :parent="item"></re-dropdown>
        <Tooltip v-else :content="item.title" :key="item.name" placement="right">
          <span @click="handleSelect(item.name)" class="drop-menu-span">
            <Icon :type="item.icon" :size="20"></Icon>
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
  import ReSubmenu from './re-submenu';
  import ReDropdown from './re-dropdown';
  export default {
    name: "side-menu",
    props: {
      collapsed: {
        type: Boolean,
        default: false
      },
      list: {
        type: Array,
        default: () => []
      }
    },
    components: {
      ReSubmenu,
      ReDropdown
    },
    methods: {
      handleSelect (name) {
        console.log(name);
      }
    }
  }
</script>

<style scoped lang="less">
.side-menu-wrapper {
  width: 100%;
  .ivu-tooltip, .drop-menu-span {
    width: 100%;
    display: block;
    color: #ffffff;
    text-align: center;
    padding: 5px 0;
  }
  .drop-wrapper > .ivu-dropdown {
    display: block;
    margin: 0 auto;
    text-align: center;
    padding: 5px 0;
  }
}
</style>
