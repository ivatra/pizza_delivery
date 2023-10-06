<template>
  <section class="list-ingredients">
    <div class="container">
      <IngredientItem
        v-for="ingredientItem in ingredientStore.getIngredients"
        :key="ingredientItem.id"
        :ingredient="ingredientItem"
      ></IngredientItem>
    </div>
  </section>
</template>

<script>
import { useIngredientStore } from "@/store/IngredientStore";
import IngredientItem from "./IngredientItem.vue";

export default {
  name: "IngredientList",
  components: {
    IngredientItem,
  },
  setup() {
    const ingredientStore = useIngredientStore();
    return { ingredientStore };
  },
  created() {
    this.ingredientStore.ingredients = [];
    fetch(`${process.env.VUE_APP_API_URL}/customizepizza`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        for (let ingredient of json) {
          this.ingredientStore.addIngredient(ingredient);
        }
      })
      .catch((error) => {
        console.error("Error fetching ingredients:", error);
      });
  },
};
</script>

<style lang="scss" scoped></style>
