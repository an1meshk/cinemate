<template>
    <div>
        <MovieCard v-if="item.release_date" :title="item.title" :overview="item.overview"
            :release_date="item.release_date" :poster_path="item.poster_path" :popularity="item.popularity"
            :item="item" />

        <SeriesCard v-if="item.first_air_date" :name="item.name" :overview="item.overview"
            :first_air_date="item.first_air_date" :poster_path="item.poster_path" :popularity="item.popularity"
            :item="item" />
    </div>
</template>

<script setup>
const itemState = useState('chosenItem', () => { })
const item = itemState.value
</script>

<style scoped></style>