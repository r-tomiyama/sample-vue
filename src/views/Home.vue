<template>
  <v-container>
    <v-row>
      <h1>サンプルページ</h1>
    </v-row>
    <CharacterList :characters="characters" />
  </v-container>
</template>

<script lang="ts">
import CharacterList from "@/components/CharacterList.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "SamplePage",
  components: {
    CharacterList
  },
  setup() {
    const characters = [
      { id: 1, name: "hoge" },
      { id: 2, name: "fuga" }
    ];

    return {
      characters
    };
  }
});
</script>
