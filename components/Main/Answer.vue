<template>
  <div>
    <FormInput
      label="Nom du pokemon:"
      :inputId="1"
      v-on:form-submit="submitForm"
      type="text"
    />

  </div>
</template>

<script>
import FormInput from "@/components/Form/Input.vue";
import { useScoreStore } from "@/store/score.js";

export default {
  name: "MainAnswer",
  setup(props) {
  const store = useScoreStore();
  const score = ref(store.score)

  watch(() => store.score, (newValue) => {
    score.value = newValue
  })

  const increment = () => {
    store.increment();
    return store.score;
  };

  const decrement = () => {
    store.decrement();
    return store.score;
  };

  const submitForm = (value) => {
    console.warn("value" + normalizeString(value));
    console.warn("answer" + normalizeString(props.answer));

    areStringsEquals(normalizeString(value), props.answer)
      ? resultWin()
      : console.log("lost");
  };

  const normalizeString = (str) => {
    return str.replace(/[^\w]/g, "").toLowerCase();
  };

  const areStringsEquals = (str1, str2) => {
    return normalizeString(str1) == normalizeString(str2);
  };

  const resultWin = () => {
    console.log("win");
    increment();
  };

  return {
    score,
    increment,
    decrement,
    submitForm,
  };
},

  props: {
    answer: {
      type: String,
      required: true,
    },
  },
  components: {
    FormInput,
  },
};
</script>

<style>
</style>