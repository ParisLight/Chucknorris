<template>
  <div class="index">
    <div class="container">
      <div class="wrapper-input index__wrapper-input">
        <CustomInput
          :placeholder="'Search jokes...'"
          v-model="searchingValue"
          @input="debouncedSearchJoke()"
          autofocus
        />
        <Transition name="fade">
          <div class="founded-jokes" v-if="getCountFoundedJokes">
            <span>Found jokes: {{ getCountFoundedJokes }}</span>
          </div>
        </Transition>
      </div>

      <div class="jokes-list index__jokes-list">
        <TransitionGroup name="fade">
          <JokeCard
            v-for="(joke, index) in jokes.result"
            :key="index"
            :jokeText="joke.value"
            :jokeLink="joke.url"
            :jokeDate="joke.updated_at"
          />
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>
<script setup>
import CustomInput from "@/components/UI/CustomInput.vue";
import JokeCard from "@/components/JokeCard.vue";
import { useState } from "@/stores/jokesStore.js";
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";
import { getSearchingJoke } from "@/api/jokesApi.js";
import { debounce } from "@/composables/useDebounce.js";
const store = useState();

const { jokes } = storeToRefs(store);

const searchingValue = ref("");

const debouncedSearchJoke = debounce(async () => {
  if (searchingValue.value.length < 3) return;

  jokes.value = await getSearchingJoke(searchingValue.value);
}, 200);

const getCountFoundedJokes = computed(() => {
  return jokes.value?.result?.length;
});
</script>
<style lang="scss">
.index {
  &__wrapper-input {
    padding-top: 128px;
    margin: 0 auto ;
  }

  &__jokes-list {
    margin-top: 60px;
  }
}

.wrapper-input {
  max-width: 626px;
}

.founded-jokes {
  margin-top: 20px;
  margin-left: 36px;

  span {
    color: $black;
    font-size: 16px;
    font-family: "Montserrat";
  }
}

.jokes-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media only screen and (max-width: 1600px) {
    justify-content: center;
  }
}
</style>
