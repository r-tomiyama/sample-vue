<template>
  <div>
    <v-row>
      <h2>サンプルデータ</h2>
    </v-row>
    <v-row>
      <v-col>
        <li v-for="character of characters" :key="character.id">
          {{ character.id }} {{ character.name }}
        </li>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "CharacterList",
  props: {
    characters: {
      default: () => []
    }
  },
  setup() {
    return {};
  }
});
</script>
