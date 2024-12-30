<template>
    <div>
        <form class="max-w-md mx-auto pb-2">
            <label for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input v-model="searchText" type="text" id="default-search"
                    class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Movies, TV Series..." required />
            </div>
        </form>

        <section>
            <h1 v-if="movies.length"
                class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Movies Results</h1>


            <ul class="grid grid-cols-5 gap">
                <li v-for="mov in movies" :key="mov.id">
                    <MovieCard :title="mov.title" :overview="mov.overview" :release_date="mov.release_date"
                        :poster_path="mov.poster_path" :popularity="mov.popularity" :item="mov" />

                </li>
            </ul>
        </section>
        <section>
            <h1 v-if="series.length"
                class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Tv Series Results</h1>


            <ul class="grid grid-cols-5 gap">
                <li v-for="serie in series" :key="serie.id">
                    <SeriesCard :name="serie.name" :overview="serie.overview" :first_air_date="serie.first_air_date"
                        :poster_path="serie.poster_path" :popularity="serie.popularity" :item="serie" />
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup>
const searchText = useState('searchText', () => '')
const movies = useState(() => [])
const series = useState(() => [])

const { data, error } = useFetch('/api/movies/search', {
    query: { searchText },
    immediate: false,
    transform: (data) => {
        if (data) {
            movies.value = data.movies.results || []
            series.value = data.series.results || []
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