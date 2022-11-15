<template>
    <section class="navbar">
        <div class="sidebar-toggle">
            <img src="../assets/icons/icon-menu.svg" alt="hamburger menu">
        </div>
        <div class="navbar-wrap">
            <div class="menu">
                <ul class="disflex">
                    <li>
                        <router-link to="/">
                            Main
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboards/template-one">
                            Template One
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboards/template-two">
                            Template Two
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboards/template-three">
                            Template Three
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
// export default {
//     setup() {
//     },
//     methods: {
//         toggleSidebar() {
//             const bod = document.body;
            
//         }
//     },
//     mounted() {
//         $(".sidebar-toggle").click(() => {
//             $('.sidebar').toggleClass('active');
//             $('.dashboard .content').toggleClass('sidebar-active');
//         });
//     }
// }
</script>

<style lang="scss" scoped>
section.navbar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    padding: 0 20px;
    border-bottom: 2px solid var(--secondary-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--secondary-color);
    z-index: 9;
    @media (min-width: 1080px){
        justify-content: flex-end;
    }
    .navbar-wrap{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        .menu{
            height: 100%;
            ul{
                list-style: none;
                padding: 0;
                margin: 0;
                height: 100%;
                li{
                    font-size: .8rem;
                    margin-left: 3px;
                    height: 100%;
                    a{
                        height: 100%;
                        display: flex;
                        align-items: center;
                        padding: 0 15px;
                        transition: 0.5s;
                        border-bottom: 2px solid transparent;
                        &.nuxt-link-exact-active, &:hover{
                            transition: 0.5s;
                            background-color: var(--alternate-color);
                            border-bottom: 2px solid var(--primary-color);
                        }
                    }
                }
            }
        }
    }
    .sidebar-toggle{
        height: 100%;
        cursor: pointer;
        @media (min-width: 1080px){
            display: none;
        }
        img{
            width: 20px;
            margin-top: 12.5px;
        }
    }
}
</style>