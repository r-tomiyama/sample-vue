<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Poyo</h1>
        <p>count: {{ state.count }}, double: {{ state.double }}</p>
        <v-btn color="secondary" class="mr-4" @click="increment">ぽよ</v-btn>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4">
        <v-form>
          <v-text-field
            v-model="poyo"
            :counter="100"
            label="ぽよ"
          ></v-text-field>
          <p>{{ state.hoge }}</p>

          <v-btn color="error" class="mr-4" @click="reset">リセット</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "@vue/composition-api";

export default defineComponent({
  name: "HelloWorld",

  props: {
    poyo: {
      type: String,
      default: ""
    }
  },

  setup(props: Props) {
    const state: State = reactive({
      count: 0,
      double: computed(() => state.count * 2),
      hoge: computed(() => "『" + props.poyo + "』")
    });

    function increment() {
      state.count++;
    }
    function reset() {
      state.count = 0;
      props.poyo = "";
    }

    return {
      state,
      increment,
      reset
    };
  }
});

type Props = {
  poyo: string;
};

interface State {
  count: number;
  double: number;
  hoge: string;
}
</script>
