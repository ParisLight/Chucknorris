<template>
  <a class="joke-card" :href="jokeLink">
    <div class="joke-text">
      <span>{{ jokeText }}</span>
    </div>
    <div class="joke-bottom">
      <div class="joke-link" >
        <span>{{ getSliceUrl(jokeLink) }}</span>
      </div>
      <div class="joke-date">
        <span>{{ getDate(jokeDate) }}</span>
      </div>
    </div>
  </a>
</template>
<script setup>
const props = defineProps({
  jokeText: {
    type: String,
    required: true,
  },
  jokeLink: {
    type: String,
    required: true,
  },
  jokeDate: {
    type: String,
    required: false,
  },
});

const getDate = (dateToConvert) => {
  const date = new Date(dateToConvert);

  return date.toLocaleDateString("ru");
};

const getSliceUrl = (url) => {
  const parts = url.split("/");
  return parts[parts.length - 1];
};
</script>
<style lang="scss" scoped>
.joke-card {
  background-color: $white;
  box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
  padding: 40px 40px 25px 40px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  max-width: 518px;
  width: 100%;

  &:hover{
    box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.45);
  }

  &:nth-child(1),
  &:nth-child(2) {
    max-width: 788px;

    @media only screen and (max-width: 1600px) {
      max-width: 518px;
    }
  }
}

.joke-card-big {
  max-width: 788px;
}

.joke-text {
  span {
    color: $black;
    font-size: 16px;
    line-height: 24px;
    overflow-wrap: break-word;
  }
}

.joke-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;

  @media only screen and (max-width: 480px){
    flex-direction: column;
    row-gap: 10px;
  }

  span,
  a {
    color: $grey;
    font-size: 14px;
    font-family: "Montserrat";
  }
}
</style>
