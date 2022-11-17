<template>
    <section class="sidebar">
        <!-- <p class="sub-heading">Exigent Component Library</p> -->
        <img src="../assets/images/mf-logo.svg" alt="" class="mf-logo">
        <div class="menu">
            <ul>
                <li class="disflex-start color">
                    <a href="#color">Color & Typography</a>
                </li>
                <li class="disflex-start">
                    <a href="#buttons">Buttons</a>
                </li>
                <li class="disflex-start">
                    <a href="#forms">Forms</a>
                </li>
                <li class="disflex-start">
                    <a href="#breadcrumbs">Breadcrumbs</a>
                </li>
                <li class="disflex-start">
                    <a href="#placeholders">Placeholders</a>
                </li>
                <li class="disflex-start">
                    <a href="#segments">Segments</a>
                </li>
                <li class="disflex-start">
                    <a href="#steps">Steps</a>
                </li>
                <li class="disflex-start">
                    <a href="#menus">Menus</a>
                </li>
                <li class="disflex-start">
                    <a href="#tables">Tables</a>
                </li>
                <li class="disflex-start">
                    <a href="#icons">Icons</a>
                </li>
                <li class="disflex-start">
                    <a href="#cards">Cards</a>
                </li>
                <li class="disflex-start">
                    <a href="#comments">Comments</a>
                </li>
                <li class="disflex-start">
                    <a href="#feed">Feed</a>
                </li>
                <li class="disflex-start">
                    <a href="#stats">Stats</a>
                </li>
                <li class="disflex-start">
                    <a href="#progress-indicators">Progress Indicators</a>
                </li>
                <li class="disflex-start">
                    <a href="#rating">Rating</a>
                </li>
                <li class="disflex-start">
                    <a href="#search">Search</a>
                </li>
                <li class="disflex-start">
                    <a href="#tabs">Tabs</a>
                </li>
            </ul>
        </div>
        <div class="copyright">
            <span>© Copyright 2022 | Powered by Exigent</span>
        </div>
    </section>
</template>

<script setup>
    // import logo from "../components/MainLogo.vue"
    // import $ from 'jquery';

    // export default {
    //     setup() {
    //     },
    //     components: { logo },
    //     data() {
    //     },
    //     mounted: function() {
    //         $("li.color").on("click", function(){
    //             $('#color').addClass('active');
    //             // alert("Color & Typography Clicked!");
    //         });
    //     }
    // }
</script>

<style lang="scss" scoped>
section.sidebar{
    position: fixed;
    top: 0;
    left: -290px;
    height: calc(100% - 40px);
    width: 250px;
    padding: 20px;
    background-color: var(--secondary-color);
    transition: 0.5s;
    overflow: scroll;
    z-index: 9999;
    border-right: 2px solid #fff;
    @media(min-width: 1080px){
        width: 300px;
        left: 0;
    }
    &.active{
        transition: 0.5s;
        transform: translateX(290px);
    }
    &::-webkit-scrollbar{
        display: none;
    }
    .mf-logo{
        width: 100%;
        padding: 10px;
        box-sizing: border-box
    }
    .menu{
        margin-top: 20px;
        ul{
            padding: 0;
            margin: 0;
            li{
                position: relative;
                margin-bottom: 5px;
                transition: 0.3s;
                padding: 0 15px;
                border-radius: 4px;
                background-color: var(--alternate-color);
                &::before{
                    content: '';
                    position: absolute;
                    left: 5px;
                    top: 5px;
                    height: calc(100% - 10px);
                    width: 4px;
                    border-radius: 2px;
                    background-color: var(--primary-color);
                    opacity: 0;
                }
                &:hover{
                    transition: 0.4s;
                    padding: 0 20px;
                    box-shadow: 0 0 5px var(--primary-color-shadow);
                    &::before{
                        transition: .8s;
                        opacity: 1;
                    }
                }
                a{
                    width: 100%;
                    padding: 15px 0;
                    color: var(--white);
                    font-size: .8rem;
                }
            }
            a.router-link-active{
                li{
                    transition: 0.4s;
                    padding: 0 30px;
                    box-shadow: 0 0 10px var(--primary-color-shadow);
                    &::before{
                        transition: .8s;
                        opacity: 1;
                    }
                }
            }
        }
    }
    .copyright{
        display: block;
        width: 100%;
        text-align: center;
        padding: 10px 0 0 0;
        border-top: 1px solid var(--alternate-color);
        span{
            color: #fff;
            font-size: .8rem;
        }
    }
    p.sub-heading{
        color: #fff;
    }
}
</style>