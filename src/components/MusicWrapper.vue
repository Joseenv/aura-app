<script setup>
    import { ref } from 'vue';
    import MusicNavbar from './MusicNavbar.vue';
    import MusicPlaylist from './MusicPlaylist.vue';
    import MusicPlayer from './MusicPlayer.vue';

    const categoryMusic = ref('');
    const selectedSong = ref({})

    const getCategory = (category) => {
        categoryMusic.value = category;
    }

    const getSong = ( song ) => {
        selectedSong.value = song;
    }

</script>

<template>
    <main>
        <MusicNavbar @emit-category="getCategory"></MusicNavbar>
        <MusicPlaylist :category = "categoryMusic" @emit-song="getSong"></MusicPlaylist>
        <MusicPlayer :song="selectedSong"></MusicPlayer>    
    </main>
</template>