<template lang="">
    <input
      type="text"
      class="input"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script setup>
defineProps({
  modelValue: String,
  placeholder: {
    type: String,
    required: false,
  }
});
defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
  input{
    font-family: 'Fira Sans';
    background-color: $white;
    outline: none;
    border: none;
    padding: 19px 30px;
    color: $blue;
    font-size: 22px;
    font-weight: 700;
    box-shadow: 0px 7px 12px 0px $smoke;
    transition: .3s ease-in-out box-shadow;
    width: 100%;

    &::placeholder{
      color: $blue;
    }

    &:focus{
      box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.45);
    }
  }
</style>
