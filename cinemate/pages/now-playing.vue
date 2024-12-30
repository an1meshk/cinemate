<template>
    <div>
        <section>
            <h1
                class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Now Playing Movies</h1>


            <ul class="grid grid-cols-5 gap">
                <li v-for="mov in movies" :key="mov.id">
                    <MovieCard :title="mov.title" :overview="mov.overview" :release_date="mov.release_date"
                        :poster_path="mov.poster_path" :popularity="mov.popularity" :item="mov" />

                </li>
            </ul>
        </section>
    </div>
</template>

<script setup>
const movies = useState(() => [])

const { data, error } = useFetch('/api/movies/nowplaying', {
    transform: (data) => {
        if (data) {
            movies.value = data.nowPlayingMovies.results || []
        }
        return data
    }
})

if (error.value) {
    console.error('Error fetching data:', error.value)
}
</script>

<style scoped>
/* Add your styles here */
</style>