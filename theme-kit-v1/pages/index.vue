<template>
    <NuxtLayout :name="layout">
        <!-- Color -->
        <ColorTypography />

        <!-- Buttons -->
        <Buttons />

        <!-- Forms -->
        <Forms />

        <!-- Breadcrumbs -->
        <Breadcrumbs />

        <!-- Placeholders -->
        <Placeholders />

        <!-- Segments -->
        <Segments />

        <!-- Steps -->
        <Steps />

        <!-- Menus -->
        <Menus />

        <!-- Tables -->
        <Tables />

        <!-- Icons -->
        <Icons />

        <!-- Cards -->
        <Cards />

        <!-- Comments -->
        <Comments />

        <!-- Feed -->
        <Feed />

        <!-- Stats -->
        <Stats />

        <!-- Progress Indicators -->
        <ProgressIndicators />

        <!-- Rating -->
        <Rating />

        <!-- Search -->
        <Search />

        <!-- Tabs -->
        <Tabs />
    </NuxtLayout>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const layout = "main";
</script>

<style>

</style>
