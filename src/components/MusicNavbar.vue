<script setup>
    import { ref } from 'vue';

    const emits = defineEmits(['emitCategory']);
    const classAsmr = ref('menu__item active');
    const classMeditation = ref('menu__item');

    const setCategory = ( category ) => {
        emits('emitCategory', category);
    }

    const showAsmrPlaylist = () => {
        classAsmr.value = 'menu__item active';
        classMeditation.value = 'menu__item';
    }
    const showMeditationPlaylist = () => {
        classMeditation.value = 'menu__item active';
        classAsmr.value = 'menu__item';
    }

</script>

<template>
    <nav class="navbar">
        <ul class="navbar__menu">
            <li 
                :class="classAsmr"
                @click="setCategory('asmr'); showAsmrPlaylist();"
            >
                ASMR
                <div class="status__bar">
                </div>
            </li>
            <li 
                :class="classMeditation"
                @click="setCategory('meditation'); showMeditationPlaylist();"
            >
                Meditación
                <div class="status__bar">
                </div>
            </li>
            <!-- <li 
                :class="classInactive"
                @click="setCategory('roleplay'); toggleClass();"
            >
                Roleplay
                <div class="status__bar">
                </div>
            </li> -->
        </ul>
    </nav>
</template>

<style scoped>
    .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4rem 0;
    }
    .navbar__menu {
        display: flex;
        /* gap: 8px; */
        justify-content: space-evenly;
        width: 100%;
    }
    .menu__item {
        list-style: none;
        font-size: 1.6rem;
        cursor: pointer;
        font-weight: 500;
    }
    .active {
        color: var(--color-heading);
    }
    .status__bar {
        width: 24px;
        height: 4px;
        background-color: transparent;
        border-radius: 16px;
        margin: 8px auto;
    }

    .menu__item.active .status__bar {
        background-color: var(--color-green);
    }
</style>