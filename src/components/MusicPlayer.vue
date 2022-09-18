<script setup>
    const props = defineProps({
        song: {
            type: Object,
            required: false
        }
    })

</script>

<template>
    <section class="player__container">
        <div class="player__info">
            <img 
                class="player__img"
                :src="props.song.cover" 
                :alt="props.song.title" 
            >
            <div class="player__song">
                <h3 class="player__title"> {{ props.song.title }} </h3>
                <p class="player__artist"> {{ props.song.artist }} </p>
            </div>
        </div>
        <!-- <div class="player__controls">
            <button class="player__btn">
                <i class="fas fa-step-backward"></i>
            </button>
            <button class="player__btn">
                <i class="fas fa-play"></i>
            </button>
            <button class="player__btn">
                <i class="fas fa-step-forward"></i>
            </button>
        </div> -->
    </section>
</template>