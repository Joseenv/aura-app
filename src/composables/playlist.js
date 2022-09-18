import { ref } from "vue"


export const usePlaylist = () => {
    
    const songs = ref([
        {
            title: 'Sensitive Mouth Sounds',
            artist: 'Arbmeis',
            cover: 'https://i.ytimg.com/vi_webp/GPIxNdjOnXY/mqdefault.webp',
            category: 'asmr',
            music: '@/assets/music/sensitive-mouth-sounds.mp3'
        },
        {
            title: 'Atención personal para dormir',
            artist: 'Arbmeis',
            cover: 'https://i.ytimg.com/vi_webp/RF1qzY-6txo/mqdefault.webp',
            category: 'asmr',
            music: '@/assets/music/atención-personal-para-dormir.mp3'
        },
        {
            title: 'Para estudiar, trabajar o dormir',
            artist: 'Arbmeis',
            cover: 'https://i.ytimg.com/vi/r-Ofq7fljxg/mqdefault.jpg',
            category: 'asmr',
            music: '@/assets/music/para-estudiar-trabajar-o-dormir.mp3'
        },
        {
            title: 'Acupuntura cerebral',
            artist: 'Arbmeis',
            cover: 'https://i.ytimg.com/vi_webp/FXRv2ACNdCI/mqdefault.webp',
            category: 'asmr',
            music: '@/assets/music/acupuntura-cerebral.mp3'
        },
        {
            title: 'Sonidos intensos',
            artist: 'Arbmeis',
            cover: 'https://i.ytimg.com/vi_webp/9pN-PrdtFEk/mqdefault.webp',
            category: 'asmr',
            music: '@/assets/music/sonidos-intensos.mp3'
        },
        {
            title: 'Meditación guiada',
            artist: 'Arbmeis',
            cover: 'https://i.ytimg.com/vi/C_iaOUo0Td8/mqdefault.jpg',
            category: 'meditation',
            music: '@/assets/music/meditacion-guiada.mp3'
        }
    ])
    
    const getPlaylist = ( category ) => { 
        return songs.value.filter( song => song.category === category)  
    }

    return {
        getPlaylist
    }
}