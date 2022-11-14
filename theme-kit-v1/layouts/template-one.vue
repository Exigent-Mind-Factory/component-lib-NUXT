<template>
    <main class="dashboard">
        <section class="disflex-space-between">
            <SideBar />
            <section class="content">
                <Navigation />
                <Nuxt />
            </section>
        </section>
    </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
main.dashboard {
    position: relative;
    height: 100%;
    background-color: var(--secondary-color);

    section.content {
        width: 100%;
        padding-left: 0;
        transition: 0.5s;
        background-color: var(--white);
        position: relative;
        padding-top: 20px;
        overflow-y: scroll;
        scroll-behavior: smooth;

        @media (min-width: 1080px) {
            width: calc(100% - 340px);
            padding-left: 340px;
        }

        &.sidebar-active {
            transition: 0.5s;
            transform: translateX(290px);
            position: fixed;
        }

        // .wrapper.active{
        //     .inner-wrapper{
        //         h2{
        //             border-bottom: 2px solid var(--primary-color);
        //         }
        //     }
        // }
    }
}
</style>
