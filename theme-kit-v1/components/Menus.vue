<template>
    <section id="menus" class="mf-menus wrapper">
        <!-- Menus -->
        <div class="inner-wrapper">
            <h2>Menus</h2>

            <nav class="navbar gutter">
                <div class="logo">
                    <span>Component</span>&nbsp;Library
                </div>

                <div class="burger-menu-icon" :class="{ open: burgerMenuOpen }" @click="burgerMenuClick">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="nav" :class="{ open: burgerMenuOpen }" @click="burgerMenuClick">

                    <div class="main-menu">
                        <router-link class="nav-link" to="#">
                            <div class="menu-title">Dashboard</div>
                            <div class="active-menu-item"></div>
                        </router-link>

                        <router-link class="nav-link" to="#">
                            <div class="menu-title">Categories</div>
                            <div class="active-menu-item"></div>
                        </router-link>

                        <router-link class="nav-link" to="#">
                            <div class="menu-title">Policies</div>
                            <div class="active-menu-item"></div>
                        </router-link>

                        <router-link class="nav-link" to="#">
                            <div class="menu-title">Deviation Analysis</div>
                            <div class="active-menu-item"></div>
                        </router-link>
                    </div>

                    <div class="profile-button-container">
                        <router-link to="/">
                            <div class="sign-out">
                                <span>Sign out</span>
                            </div>
                        </router-link>
                        <div class="nav-profile-img">
                            <img src="../assets/images/icon-user.svg" alt="image">
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            burgerMenuOpen: false,
        };
    },

    methods: {
        burgerMenuClick() {
            this.burgerMenuOpen = !this.burgerMenuOpen;
        },
        dropdownOptions() {
            this.toggle = !this.toggle;
        },
    },
}
</script>

<style lang="scss">
.navbar {
    height: 60px;
    border-bottom: 1px solid var(--grey-2);
    display: grid;
    grid-template-columns: min-content auto;
    /* padding: 0 2rem; */
    align-items: center;
    position: relative;
}

.logo {
    display: flex;
    align-items: center;
    font-size: 24px;
    padding-right: 1rem;
}

.logo span {
    font-weight: 700;
    color: var(--primary-color);
}

.nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.nav.open {
    /* display: flex; */
    right: 10px;
    opacity: 1;
}

.main-menu {
    display: flex;
}

.nav-link {
    position: relative;
    font-size: 16px;
    font-weight: 600;
    color: var(--grey-5);
}

.menu-title {
    padding: 0 10px;
    line-height: 30px;
}

.active-menu-item {
    display: block;
    position: absolute;
    top: 100%;
    height: 3px;
    width: 100%;
    background-color: transparent;
    transition: all 0.25s ease-in-out;
}

// .router-link-active .active-menu-item,
// .nav-link:hover .active-menu-item {
//     background-color: var(--primary-color);
// }

.nav-link:hover .active-menu-item {
    background-color: var(--primary-color);
}

.profile-button-container {
    justify-self: right;
    display: flex;
    align-items: center;

    a {
        color: var(--grey-5);
    }
}

.sign-out {
    overflow: hidden;
    padding-right: 20px;
}

.sign-out span {
    position: relative;
    left: 100px;
    transition: all 0.25s ease;
}

.sign-out span:hover {
    color: var(--primary-color);
    cursor: pointer;
}

.profile-button-container:hover .sign-out>span {
    left: 0;
}

.nav-profile-img {
    height: 40px;
    padding: 5px 0;
}

.nav-profile-img img {
    max-height: 100%;
    border-radius: 100%;
    filter: invert(13%) sepia(33%) saturate(18%) hue-rotate(69deg) brightness(100%) contrast(83%);
}

.burger-menu-icon {
    display: none;
    height: 40px;
    width: 40px;
    overflow: hidden;
    position: relative;
    justify-self: end;
}

.burger-menu-icon span {
    position: absolute;
    background-color: #333;
    border-radius: 3px;
    height: 3px;
    width: 28px;
    transform: translate(-50%);
    left: 50%;
    transition: all 0.25s ease;
}

.burger-menu-icon :nth-child(1) {
    top: 12px;
}

.burger-menu-icon.open :nth-child(1) {
    transform: rotate(45deg);
    left: 4px;
    top: 20px;
}

.burger-menu-icon :nth-child(2) {
    top: 50%;
}

.burger-menu-icon.open :nth-child(2) {
    top: 50%;
    left: -30px;
    opacity: 0;
}

.burger-menu-icon :nth-child(3) {
    top: 28px;
}

.burger-menu-icon.open :nth-child(3) {
    transform: rotate(-45deg);
    left: 4px;
    top: 20px;
}

@media (max-width: 1080px) {
    .logo {
        font-size: 20px;
    }

    .nav-link {
        font-size: 14px;
    }

    .menu-title {
        padding: 5px;
        line-height: 1rem;
    }
}

@media (max-width: 767px) {
    .navbar {
        height: 50px;
    }

    .nav {
        /* display: none; */
        opacity: 0;
        // position: fixed;
        position: absolute;
        right: -300px;
        top: 60px;
        flex-direction: column;
        z-index: 100;
        background-color: white;
        padding: 20px;
        font-size: 1rem;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        gap: 20px;
        transition: all 0.25s ease;
    }

    .main-menu {
        gap: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ddd;
    }

    .menu-title {
        font-size: 1rem;
    }

    .main-menu {
        flex-direction: column;
    }

    .burger-menu-icon {
        display: block;
    }

    .profile-button-container {
        width: 100%;
        flex-flow: row-reverse;
        justify-content: flex-end;
    }

    .sign-out {
        padding: 0 20px;
        justify-self: flex-end;
    }

    .sign-out span {
        left: 0;
    }
}
</style>