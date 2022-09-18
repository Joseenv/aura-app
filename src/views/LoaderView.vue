<template>
    <div class="loader__container">
        <article class="loader__wrapper">
            <img src="/aura-logo.png" alt="" class="loader__img">
            <h1 class="loader__title">Aura</h1>
        </article>
    </div>
</template>

<style scoped>
.loader__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: var(--color-background);
}
.loader__wrapper {
    display: flex;
    gap: 8px;
    align-items: center;
}
.loader__title {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--color-heading);
}

</style>