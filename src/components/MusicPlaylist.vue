<script setup>
    import { ref, watch } from 'vue';
    import { usePlaylist } from '../composables/playlist'
    
    const { getPlaylist } = usePlaylist()
    const songs = ref(getPlaylist('asmr'))

    const emits = defineEmits(['emitSong']);
    const props = defineProps({
        category: {
            type: String,
            required: false
        }
    })

    watch(props, () => {
        songs.value = getPlaylist(props.category)
    })

    const setSong = ( song ) => {
        emits('emitSong', song);
    }

</script>

<template>
    <section class="playlist__container">
        <article 
            class="playlist__song"
            v-for="(song, index) in songs"
            :key="index"
            @click="setSong(song)"
        >
            <img 
                class="song__img"
                :src="song.cover" 
                :alt="song.title" 
            >
            <div class="song__info">
                <h3 class="song__title"> {{ song.title }} </h3>
                <p class="song__artist"> {{ song.artist }} </p>
            </div>
        </article>
    </section>
</template>