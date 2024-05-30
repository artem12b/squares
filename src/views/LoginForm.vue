<script setup>
import { reactive, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { minLength, required, email, sameAs } from '@vuelidate/validators';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = reactive({
  email: '',
  password: '',
});

const rules = computed(() => {
  return {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
  }
});

const v$ = useVuelidate(rules, form);

const emailErrors = computed(() => {
  return v$.value.email.$errors.map(error => error.$message)
});

const passwordErrors = computed(() => {
  return v$.value.password.$errors.map(error => error.$message)
});

async function handleSubmit() {
  v$.value.$touch()
  const result = await v$.value.$validate()
  if (!result) {
    return
  }
  alert('Form submitted successfully')
  router.push('/game');
};
</script>

<template>
  <v-container>
    <v-card class="login-form pa-4" width="400">
      <form @submit.prevent="handleSubmit" class="d-flex flex-column ga-4">
        <v-text-field
          v-model="form.email"
          label="Email"
          :error-messages="emailErrors"
          required
          @blur="v$.email.$touch()"
        ></v-text-field>

        <v-text-field
          v-model="form.password"
          label="Password"
          type="password"
          :error-messages="passwordErrors"
          required
          @blur="v$.password.$touch()"
        ></v-text-field>

        <v-btn type="submit" color="primary">Login</v-btn>
      </form>
    </v-card>
  </v-container>
</template>

<style scoped>
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -200px;
}
.fill-height {
  height: 100vh;
}
</style>
