<template>

    <div class="container-fluid dashboard-main-wrapper">

        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="1">
                <router-link to="/"><Icon type="ios-paper" />
                Home</router-link>
            </MenuItem>

             <MenuItem name="2">
                 <router-link to="/first-vue"><Icon type="ios-people" />
                First Page</router-link>
            </MenuItem>

            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats" />
                    Second Page
                </template>
                <MenuGroup title="使用">
                    <router-link to="/first-vue"> <MenuItem name="3-1">First page</MenuItem></router-link>
                        <router-link to="/second-vue"><MenuItem name="3-2">Second Page</MenuItem></router-link>
                            <router-link to="/hooks"><MenuItem name="3-3">Hooks</MenuItem></router-link>
                </MenuGroup>
                <MenuGroup title="留存">
                    <router-link to="/methods"><MenuItem name="3-4">Methods</MenuItem></router-link>
                        <router-link to="/"><MenuItem name="3-5">流失用户</MenuItem></router-link>
                </MenuGroup>
            </Submenu>
            <MenuItem name="4">
                <router-link to="/"><Icon type="ios-construct" /></router-link>
                综合设置
            </MenuItem>
        </Menu>

        <router-view></router-view>

    </div>

</template>
