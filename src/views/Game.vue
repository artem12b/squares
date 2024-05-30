<script setup>
import { ref, computed, watch, onMounted } from 'vue';

const sizeX = ref(30);
const sizeY = ref(10);
const squares = ref([]);

const squareStyle = computed(() => ({
   width: '36px',
   height: '36px'
}));

const gridStyle = computed(() => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${sizeX.value}, 36px)`,
  gridGap: '2px'
}));

const drawGrid = () => {
  squares.value = [];
  for (let i = 0; i < sizeX.value * sizeY.value; i++) {
    squares.value.push({ isBlue: false });
  }
};

const toggleColor = (square) => {
  square.isBlue = !square.isBlue;
};

watch([sizeX, sizeY], drawGrid);

onMounted(drawGrid);

</script>

<template>
  <div class="grid-container d-flex flex-column align-center justify-center pb-9">
    <div class="controls d-flex ga-9 pt-5">
      <v-number-input
        :min="0"
        v-model.number="sizeX"
        label="Size X"
        control-variant="stacked"
      ></v-number-input>

      <v-number-input
        :min="0"
        v-model.number="sizeY"
        label="Size Y"
        control-variant="stacked"
      ></v-number-input>
    </div>
    
    <div class="grid" :style="gridStyle">
      <div 
        v-for="(square, index) in squares" 
        :key="index" 
        class="square" 
        :class="{ blue: square.isBlue }" 
        @mouseover="toggleColor(square)"
        :style="squareStyle">
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  background-color: #333;
  width: 100vw;
  height: 100vh;
  color: white;
  box-sizing: border-box;
}

.grid {
	margin-top: 108px;
	overflow: auto;
}
.controls {
  position: fixed;
  top: 0;
  width: 600px;
  background-color: #333;
  z-index: 1;
  display: flex;
  gap: 9px;
  padding: 10px;
  box-sizing: border-box;
}
.square {
  background-color: white;
  transition: background-color 0.3s;
}
.square.blue {
  background-color: blue;
}
</style>
